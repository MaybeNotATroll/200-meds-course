import { getMatchingItems, matchingGameConfig } from "./medications.js";

export function shuffle(items) {
  const shuffled = [...items];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function createRound(records) {
  const prompts = shuffle(getMatchingItems(records)).slice(0, matchingGameConfig.medicationsPerRound);
  return { prompts, uses: shuffle(prompts.map((item) => ({
    id: item.id, text: item.answer.primaryUse,
  }))) };
}

export function connect(matches, promptId, useId) {
  const next = new Map(matches);
  for (const [source, target] of next) {
    if (target === useId) next.delete(source);
  }
  next.set(promptId, useId);
  return next;
}

export function checkRound(round, matches) {
  const results = round.prompts.map((prompt) => {
    const selected = round.uses.find((use) => use.id === matches.get(prompt.id));
    return {
      id: prompt.id,
      selected: selected?.text,
      correct: selected?.text === prompt.answer.primaryUse,
      answer: prompt.answer.primaryUse,
    };
  });
  const available = new Set(round.uses.map((use) => use.id));
  const corrected = new Map();
  // Preserve correct choices when several medications share the same use.
  for (const result of results.filter((item) => item.correct)) {
    const target = matches.get(result.id);
    corrected.set(result.id, target);
    available.delete(target);
  }
  for (const result of results.filter((item) => !item.correct)) {
    const target = round.uses.find((use) => available.has(use.id) && use.text === result.answer);
    corrected.set(result.id, target.id);
    available.delete(target.id);
  }
  return { results, corrected };
}
