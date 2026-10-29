import test from "node:test";
import assert from "node:assert/strict";
import {
  medications, validateMedications, searchMedications, matchingGameConfig, getMatchingItems,
} from "./medications.js";

// Synthetic records exercise the data contract without inventing study entries.
const records = [
  { genericName: "Fixture Alpha", brandName: "Fixture Brand", category: "Category One", primaryUse: "Use One" },
  { genericName: "Fixture Beta", brandName: null, category: "Category Two", primaryUse: "Use Two" },
];

test("the production dataset remains valid as supplied entries are added", () => {
  assert.ok(Array.isArray(medications));
  assert.equal(validateMedications(medications), medications);
});

test("search matches generic, brand, and category without case sensitivity", () => {
  for (const query of [" ALPHA ", "fixture brand", "CATEGORY ONE"]) {
    assert.deepEqual(searchMedications(records, query), [records[0]]);
  }
  assert.deepEqual(searchMedications(records, ""), records);
  assert.deepEqual(searchMedications(records, "missing"), []);
  assert.deepEqual(searchMedications([], "anything"), []);
});

test("validation rejects duplicate generic names regardless of case or whitespace", () => {
  assert.throws(() => validateMedications([
    records[0], { ...records[0], genericName: " fixture ALPHA " },
  ]), /Duplicate medication/);
});

test("validation requires all fields and allows a null brand", () => {
  assert.equal(validateMedications(records), records);
  for (const field of ["genericName", "category", "primaryUse", "brandName"]) {
    for (const value of [undefined, "", " ", 42]) {
      assert.throws(() => validateMedications([{ ...records[0], [field]: value }]));
    }
  }
  assert.throws(() => validateMedications([null]));
});

test("matching data retains correct answer associations without mutating study data", () => {
  const before = structuredClone(records);
  assert.equal(matchingGameConfig.medicationsPerRound, 5);
  assert.deepEqual(getMatchingItems(records), records.map((record) => ({
    id: record.genericName.toLowerCase(),
    prompt: record.genericName,
    answer: { category: record.category, primaryUse: record.primaryUse },
  })));
  assert.deepEqual(records, before);
  assert.deepEqual(getMatchingItems([]), []);
});
