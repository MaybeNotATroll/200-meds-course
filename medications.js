/**
 * Add supplied medications here, keeping genericName unique (case-insensitive).
 * Each record: { genericName, brandName: string | null, category, primaryUse }.
 * Use null when no brand applies; do not add unprovided medication entries.
 */
export const medications = [
  { genericName: "Lisinopril", brandName: "Zestril, Prinivil", category: "ACE inhibitor", primaryUse: "blood pressure, heart failure" },
  { genericName: "Atorvastatin", brandName: "Lipitor", category: "Statin", primaryUse: "high cholesterol" },
  { genericName: "Levothyroxine", brandName: "Synthroid, Levoxyl", category: "Thyroid hormone", primaryUse: "hypothyroidism" },
  { genericName: "Metformin", brandName: "Glucophage", category: "Antidiabetic", primaryUse: "type 2 diabetes" },
  { genericName: "Amlodipine", brandName: "Norvasc", category: "Calcium channel blocker", primaryUse: "hypertension, angina" },
  { genericName: "Metoprolol tartrate", brandName: "Lopressor", category: "Beta blocker", primaryUse: "hypertension, angina" },
  { genericName: "Metoprolol succinate ER", brandName: "Toprol-XL", category: "Beta blocker", primaryUse: "hypertension, heart failure" },
  { genericName: "Omeprazole", brandName: "Prilosec", category: "PPI", primaryUse: "GERD, ulcers" },
  { genericName: "Simvastatin", brandName: "Zocor", category: "Statin", primaryUse: "high cholesterol" },
  { genericName: "Losartan", brandName: "Cozaar", category: "ARB", primaryUse: "hypertension" },
  { genericName: "Albuterol", brandName: "Ventolin, ProAir", category: "SABA bronchodilator", primaryUse: "asthma" },
  { genericName: "Gabapentin", brandName: "Neurontin", category: "Anticonvulsant", primaryUse: "nerve pain" },
  { genericName: "Hydrochlorothiazide", brandName: "Microzide", category: "Thiazide diuretic", primaryUse: "hypertension, edema" },
  { genericName: "Hydrocodone/acetaminophen", brandName: "Norco, Vicodin", category: "Opioid combination analgesic", primaryUse: "pain" },
  { genericName: "Sertraline", brandName: "Zoloft", category: "SSRI", primaryUse: "depression, anxiety" },
  { genericName: "Fluticasone nasal", brandName: "Flonase", category: "Nasal corticosteroid", primaryUse: "allergies" },
  { genericName: "Montelukast", brandName: "Singulair", category: "Leukotriene antagonist", primaryUse: "asthma, allergies" },
  { genericName: "Furosemide", brandName: "Lasix", category: "Loop diuretic", primaryUse: "edema, heart failure" },
  { genericName: "Amoxicillin", brandName: "Amoxil", category: "Penicillin antibiotic", primaryUse: "bacterial infections" },
  { genericName: "Pantoprazole", brandName: "Protonix", category: "PPI", primaryUse: "GERD" },
  { genericName: "Acetaminophen", brandName: "Tylenol", category: "Analgesic/antipyretic", primaryUse: "pain, fever" },
  { genericName: "Citalopram", brandName: "Celexa", category: "SSRI", primaryUse: "depression" },
  { genericName: "Mixed amphetamine salts", brandName: "Adderall", category: "CNS stimulant", primaryUse: "ADHD" },
  { genericName: "Ibuprofen", brandName: "Motrin, Advil", category: "NSAID", primaryUse: "pain, fever, inflammation" },
  { genericName: "Carvedilol", brandName: "Coreg", category: "Beta blocker", primaryUse: "heart failure, hypertension" },
  { genericName: "Trazodone", brandName: "Desyrel", category: "Antidepressant", primaryUse: "depression, commonly insomnia" },
  { genericName: "Fluoxetine", brandName: "Prozac", category: "SSRI", primaryUse: "depression, OCD" },
  { genericName: "Tramadol", brandName: "Ultram", category: "Opioid analgesic", primaryUse: "pain" },
  { genericName: "Rosuvastatin", brandName: "Crestor", category: "Statin", primaryUse: "high cholesterol" },
  { genericName: "Semaglutide", brandName: "Ozempic", category: "GLP-1 agonist", primaryUse: "type 2 diabetes" },
  { genericName: "Insulin glargine", brandName: "Lantus", category: "Long-acting insulin", primaryUse: "diabetes" },
  { genericName: "Clopidogrel", brandName: "Plavix", category: "Antiplatelet", primaryUse: "clot prevention" },
  { genericName: "Venlafaxine", brandName: "Effexor XR", category: "SNRI", primaryUse: "depression, anxiety" },
  { genericName: "Clonazepam", brandName: "Klonopin", category: "Benzodiazepine", primaryUse: "seizures, panic disorder" },
  { genericName: "Propranolol", brandName: "Inderal", category: "Beta blocker", primaryUse: "hypertension, tremor, migraine prevention" },
  { genericName: "Zolpidem", brandName: "Ambien", category: "Sedative-hypnotic", primaryUse: "insomnia" },
  { genericName: "Tamsulosin", brandName: "Flomax", category: "Alpha-1 blocker", primaryUse: "enlarged prostate" },
  { genericName: "Aspirin", brandName: "Bayer, Ecotrin", category: "Analgesic/antiplatelet", primaryUse: "pain, clot prevention" },
  { genericName: "Warfarin", brandName: "Coumadin, Jantoven", category: "Anticoagulant", primaryUse: "clot prevention" },
  { genericName: "Atenolol", brandName: "Tenormin", category: "Beta blocker", primaryUse: "hypertension, angina" },
  { genericName: "Cyclobenzaprine", brandName: "Flexeril, Amrix", category: "Muscle relaxant", primaryUse: "spasms" },
  { genericName: "Oxycodone", brandName: "OxyContin, Roxicodone", category: "Opioid analgesic", primaryUse: "pain" },
  { genericName: "Potassium chloride", brandName: "Klor-Con", category: "Electrolyte", primaryUse: "low potassium" },
  { genericName: "Lisinopril/HCTZ", brandName: "Zestoretic", category: "ACE inhibitor/diuretic", primaryUse: "hypertension" },
  { genericName: "Ethinyl estradiol/norethindrone", brandName: "Junel, Loestrin", category: "Combination contraceptive", primaryUse: "contraception" },
  { genericName: "Meloxicam", brandName: "Mobic", category: "NSAID", primaryUse: "arthritis" },
  { genericName: "Glipizide", brandName: "Glucotrol", category: "Sulfonylurea", primaryUse: "type 2 diabetes" },
  { genericName: "Allopurinol", brandName: "Zyloprim", category: "Xanthine oxidase inhibitor", primaryUse: "gout prevention" },
  { genericName: "Azithromycin", brandName: "Zithromax", category: "Macrolide antibiotic", primaryUse: "bacterial infections" },
  { genericName: "Duloxetine", brandName: "Cymbalta", category: "SNRI", primaryUse: "depression, anxiety, nerve pain" },
];

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
