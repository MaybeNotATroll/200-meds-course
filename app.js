import { medications, searchMedications, validateMedications } from "./medications.js";

const studyView = document.querySelector("#study-view");
const cheatSheetView = document.querySelector("#cheat-sheet-view");
const search = document.querySelector("#medication-search");
const openButton = document.querySelector("#open-cheat-sheet");
const closeButton = document.querySelector("#close-cheat-sheet");

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

function renderStudy() {
  const results = searchMedications(medications, search.value);
  document.querySelector("#medication-cards").replaceChildren(
    ...results.map((record) => medicationDetails(record)),
  );
  document.querySelector("#search-summary").textContent =
    `${results.length} of ${medications.length} medications`;
  const empty = document.querySelector("#study-empty");
  empty.hidden = results.length > 0;
  empty.textContent = medications.length
    ? "No medications match your search. Try another name, brand, or category."
    : "Your study desk is ready. Medications will appear here once you provide the list.";
}

function showCheatSheet(open) {
  studyView.hidden = open;
  cheatSheetView.hidden = !open;
  if (open) {
    document.querySelector("#cheat-sheet-title").focus();
  } else {
    openButton.focus();
  }
  window.scrollTo(0, 0);
}

try {
  validateMedications(medications);
  renderStudy();
  document.querySelector("#cheat-sheet-list").replaceChildren(
    ...medications.map((record) => medicationDetails(record, true)),
  );
  document.querySelector("#cheat-sheet-summary").textContent = `${medications.length} medications · Complete list`;
  document.querySelector("#cheat-sheet-empty").hidden = medications.length > 0;
  search.addEventListener("input", renderStudy);
  openButton.addEventListener("click", () => showCheatSheet(true));
  closeButton.addEventListener("click", () => showCheatSheet(false));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !cheatSheetView.hidden) showCheatSheet(false);
  });
} catch (error) {
  document.querySelector("#search-summary").textContent =
    "The medication data could not be loaded. Please check the dataset.";
  document.querySelector("#study-empty").hidden = true;
  search.disabled = true;
  openButton.disabled = true;
  console.error(error);
}
