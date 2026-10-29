import test from "node:test";
import assert from "node:assert/strict";
import { medications } from "./medications.js";
import { shuffle, createRound, connect, checkRound } from "./matching.js";

test("rounds sample five unique medications from the complete dataset without mutation", () => {
  const before = structuredClone(medications);
  const seen = new Set();
  for (let i = 0; i < 50; i++) {
    const round = createRound(medications);
    assert.equal(round.prompts.length, 5);
    assert.equal(new Set(round.prompts.map((item) => item.id)).size, 5);
    assert.deepEqual(round.uses.map((item) => item.id).sort(), round.prompts.map((item) => item.id).sort());
    round.prompts.forEach((item) => seen.add(item.id));
  }
  assert.ok(seen.size > 5);
  assert.deepEqual(medications, before);
  assert.deepEqual(shuffle([]), []);
  assert.deepEqual(createRound([]), { prompts: [], uses: [] });
  assert.equal(createRound(medications.slice(0, 2)).prompts.length, 2);
});

test("connections replace previous choices and keep each use unique", () => {
  const original = new Map([["a", "x"], ["b", "y"]]);
  assert.deepEqual(connect(original, "a", "y"), new Map([["a", "y"]]));
  assert.deepEqual(original, new Map([["a", "x"], ["b", "y"]]));
});

test("checking scores correct, incorrect and unanswered choices and automatically solves all pairs", () => {
  const round = createRound(medications.slice(0, 5));
  const [a, b, c] = round.prompts;
  const matches = new Map([[a.id, a.id], [b.id, c.id]]);
  const { results, corrected } = checkRound(round, matches);
  assert.equal(results.filter((item) => item.correct).length, 1);
  assert.equal(results.find((item) => item.id === b.id).selected, c.answer.primaryUse);
  assert.equal(results.filter((item) => !item.selected).length, 3);
  assert.equal(corrected.size, 5);
  assert.equal(new Set(corrected.values()).size, 5);
  assert.ok(checkRound(round, corrected).results.every((item) => item.correct));
  assert.equal(matches.size, 2);
});

test("identical uses are interchangeable and correct choices stay connected", () => {
  const records = medications.filter((record) => record.primaryUse === "high cholesterol").slice(0, 3);
  const round = createRound(records);
  const [a, b, c] = round.prompts;
  const matches = new Map([[a.id, b.id], [b.id, c.id]]);
  const { results, corrected } = checkRound(round, matches);
  assert.equal(results.filter((item) => item.correct).length, 2);
  assert.equal(corrected.get(a.id), b.id);
  assert.equal(corrected.get(b.id), c.id);
  assert.equal(corrected.get(c.id), a.id);
  assert.ok(checkRound(round, corrected).results.every((item) => item.correct));
});
