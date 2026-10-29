/**
 * Add supplied medications here, keeping genericName unique (case-insensitive).
 * Each record: { genericName, brandName: string | null, category, primaryUse }.
 * Use null when no brand applies; do not add unprovided medication entries.
 */
export const medications = [];

export function validateMedications(records) {
  const names = new Set();
  for (const record of records) {
    if (!record || ["genericName", "category", "primaryUse"].some(
      (field) => typeof record[field] !== "string" || !record[field].trim(),
    )) {
      throw new Error("Every medication needs a generic name, category, and primary use.");
    }
    if (record.brandName !== null &&
        (typeof record.brandName !== "string" || !record.brandName.trim())) {
      throw new Error("Brand name must be a non-empty string or null.");
    }
    const key = record.genericName.trim().toLowerCase();
    if (names.has(key)) {
      throw new Error(`Duplicate medication: ${record.genericName}`);
    }
    names.add(key);
  }
  return records;
}

export function searchMedications(records, query) {
  const term = query.trim().toLowerCase();
  return records.filter((record) =>
    [record.genericName, record.brandName, record.category].some(
      (value) => value?.toLowerCase().includes(term),
    ),
  );
}

// Shared data contract for a future matching game; no rounds or gameplay yet.
export const matchingGameConfig = Object.freeze({ medicationsPerRound: 5 });

export function getMatchingItems(records) {
  return validateMedications(records).map((record) => ({
    id: record.genericName.trim().toLowerCase(),
    prompt: record.genericName,
    answer: { category: record.category, primaryUse: record.primaryUse },
  }));
}
