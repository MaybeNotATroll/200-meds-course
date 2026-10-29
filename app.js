import { medications, validateMedications } from "./medications.js";
import { createRound, connect, checkRound } from "./matching.js";

const studyView = document.querySelector("#study-view");
const cheatSheetView = document.querySelector("#cheat-sheet-view");
const openButton = document.querySelector("#open-cheat-sheet");
const closeButton = document.querySelector("#close-cheat-sheet");
const board = document.querySelector("#matching-board");
const lines = document.querySelector("#matching-lines");
const checkButton = document.querySelector("#check-answers");
const newButton = document.querySelector("#new-round");
const status = document.querySelector("#matching-status");
const resultsList = document.querySelector("#matching-results");
let round;
let matches = new Map();
let selectedId = null;
let checked = false;
let drag = null;
let draggedClick = false;
let results = [];

function element(tag, text, className) {
  const node = document.createElement(tag);
  if (text !== undefined) node.textContent = text;
  if (className) node.className = className;
  return node;
}

function medicationDetails(record, reference = false) {
  const card = element(reference ? "li" : "article", undefined, reference ? "reference-item" : "medication-card");
  card.append(
    element("h2", record.genericName),
    element("p", record.brandName ? `Brand: ${record.brandName}` : "No brand listed", "brand"),
  );
  const details = element("dl");
  if (reference) {
    const category = element("div");
    category.append(element("dt", "Therapeutic category"), element("dd", record.category));
    details.append(category);
  } else {
    card.append(element("p", record.category, "category"));
  }
  const use = element("div");
  use.append(element("dt", "Primary use"), element("dd", record.primaryUse));
  details.append(use);
  card.append(details);
  return card;
}

function drawLines() {
  lines.replaceChildren();
  if (studyView.hidden) return;
  const bounds = board.getBoundingClientRect();
  lines.setAttribute("viewBox", `0 0 ${bounds.width} ${bounds.height}`);
  const point = (button, right) => {
    const rect = button.getBoundingClientRect();
    return { x: (right ? rect.right : rect.left) - bounds.left, y: rect.top + rect.height / 2 - bounds.top };
  };
  const line = (start, end, className) => {
    const node = document.createElementNS("http://www.w3.org/2000/svg", "line");
    for (const [key, value] of Object.entries({ x1: start.x, y1: start.y, x2: end.x, y2: end.y })) {
      node.setAttribute(key, value);
    }
    node.setAttribute("class", className);
    lines.append(node);
  };
  for (const [source, target] of matches) {
    const left = [...board.querySelectorAll("[data-prompt]")].find((button) => button.dataset.prompt === source);
    const right = [...board.querySelectorAll("[data-use]")].find((button) => button.dataset.use === target);
    const result = results.find((item) => item.id === source);
    line(point(left, true), point(right, false), checked ? (result.correct ? "correct" : "corrected") : "");
  }
  if (drag?.moved) {
    line(point(drag.button, true), { x: drag.x - bounds.left, y: drag.y - bounds.top }, "preview");
  }
}

function updateConnections() {
  board.querySelectorAll("[data-prompt]").forEach((button) => {
    const id = button.dataset.prompt;
    const use = round.uses.find((item) => item.id === matches.get(id));
    button.setAttribute("aria-pressed", String(selectedId === id));
    button.setAttribute("aria-label", `${button.textContent}${use ? `; matched to ${use.text}` : "; unmatched"}`);
    button.classList.toggle("matched", Boolean(use));
    button.disabled = checked;
  });
  board.querySelectorAll("[data-use]").forEach((button) => {
    const source = round.prompts.find((item) => matches.get(item.id) === button.dataset.use);
    button.setAttribute("aria-label", `${button.textContent}${source ? `; matched to ${source.prompt}` : "; unmatched"}`);
    button.classList.toggle("matched", Boolean(source));
    button.disabled = checked;
  });
  checkButton.disabled = checked || !round.prompts.length;
  drawLines();
}

function selectPrompt(id) {
  selectedId = id;
  const prompt = round.prompts.find((item) => item.id === id);
  status.textContent = `${prompt.prompt} selected. Now choose its use.`;
  updateConnections();
}

function matchUse(id) {
  if (checked) return;
  if (!selectedId) {
    status.textContent = "Select a medication on the left first.";
    return;
  }
  const prompt = round.prompts.find((item) => item.id === selectedId);
  const use = round.uses.find((item) => item.id === id);
  matches = connect(matches, selectedId, id);
  selectedId = null;
  status.textContent = `${prompt.prompt} matched to ${use.text}. ${matches.size} of ${round.prompts.length} pairs connected.`;
  updateConnections();
}

function startRound() {
  round = createRound(medications);
  matches = new Map();
  selectedId = null;
  checked = false;
  drag = null;
  draggedClick = false;
  results = [];
  resultsList.hidden = true;
  resultsList.replaceChildren();
  status.textContent = round.prompts.length ? "Connect the pairs, then check your answers." : "No medications are available yet.";
  document.querySelector("#round-summary").textContent =
    `${round.prompts.length} random medications · ${medications.length} in the complete list`;
  document.querySelector("#matching-prompts").replaceChildren(...round.prompts.map((item, index) => {
    const button = element("button", `${index + 1}. ${item.prompt}`, "match-item");
    button.type = "button";
    button.dataset.prompt = item.id;
    button.addEventListener("click", (event) => {
      if (!draggedClick || event.detail === 0) selectPrompt(item.id);
    });
    button.addEventListener("pointerdown", (event) => {
      if (event.button !== 0 || !event.isPrimary || checked) return;
      draggedClick = false;
      drag = { button, id: item.id, pointerId: event.pointerId, startX: event.clientX, startY: event.clientY, moved: false };
      button.setPointerCapture(event.pointerId);
      selectPrompt(item.id);
    });
    return button;
  }));
  document.querySelector("#matching-uses").replaceChildren(...round.uses.map((item, index) => {
    const button = element("button", `${String.fromCharCode(65 + index)}. ${item.text}`, "match-item");
    button.type = "button";
    button.dataset.use = item.id;
    button.addEventListener("click", () => matchUse(item.id));
    return button;
  }));
  updateConnections();
}

function finishRound() {
  if (checked || !round.prompts.length) return;
  const evaluation = checkRound(round, matches);
  results = evaluation.results;
  matches = evaluation.corrected;
  checked = true;
  selectedId = null;
  drag = null;
  resultsList.replaceChildren(...results.map((result, index) => {
    const prompt = round.prompts[index];
    const outcome = result.correct ? "Correct" : result.selected ? "Incorrect" : "Unanswered";
    const feedback = element("li",
      `${prompt.prompt}: ${outcome}. ${!result.correct && result.selected ? `You chose: ${result.selected}. ` : ""}Correct use: ${result.answer}.`,
      result.correct ? "result-correct" : "result-incorrect");
    const button = [...board.querySelectorAll("[data-prompt]")][index];
    button.classList.add(result.correct ? "result-correct" : "result-incorrect");
    return feedback;
  }));
  resultsList.hidden = false;
  status.textContent = `${results.filter((item) => item.correct).length} of ${results.length} correct. All lines now show the correct matches. Green means you were right; dashed orange means corrected.`;
  updateConnections();
}

function showCheatSheet(open) {
  studyView.hidden = open;
  cheatSheetView.hidden = !open;
  if (open) {
    document.querySelector("#cheat-sheet-title").focus();
  } else {
    openButton.focus();
    drawLines();
  }
  window.scrollTo(0, 0);
}

try {
  validateMedications(medications);
  startRound();
  document.querySelector("#cheat-sheet-list").replaceChildren(
    ...medications.map((record) => medicationDetails(record, true)),
  );
  document.querySelector("#cheat-sheet-summary").textContent = `${medications.length} medications · Complete list`;
  document.querySelector("#cheat-sheet-empty").hidden = medications.length > 0;
  checkButton.addEventListener("click", finishRound);
  newButton.addEventListener("click", startRound);
  board.addEventListener("pointermove", (event) => {
    if (!drag || drag.pointerId !== event.pointerId || checked) return;
    drag.x = event.clientX;
    drag.y = event.clientY;
    drag.moved ||= Math.hypot(drag.x - drag.startX, drag.y - drag.startY) > 5;
    drawLines();
  });
  board.addEventListener("pointerup", (event) => {
    if (!drag || drag.pointerId !== event.pointerId) return;
    const target = document.elementFromPoint(event.clientX, event.clientY)?.closest("[data-use]");
    if (drag.moved && target) matchUse(target.dataset.use);
    draggedClick = drag.moved;
    drag = null;
    drawLines();
  });
  board.addEventListener("pointercancel", () => {
    drag = null;
    drawLines();
  });
  new ResizeObserver(drawLines).observe(board);
  openButton.addEventListener("click", () => showCheatSheet(true));
  closeButton.addEventListener("click", () => showCheatSheet(false));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !cheatSheetView.hidden) showCheatSheet(false);
  });
} catch (error) {
  status.textContent =
    "The medication data could not be loaded. Please check the dataset.";
  checkButton.disabled = true;
  newButton.disabled = true;
  openButton.disabled = true;
  console.error(error);
}
