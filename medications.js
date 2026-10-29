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
  { genericName: "Ergocalciferol", brandName: "Drisdol", category: "Vitamin D2", primaryUse: "deficiency" },
  { genericName: "Metronidazole", brandName: "Flagyl", category: "Antibiotic/antiprotozoal", primaryUse: "bacterial and protozoal infections" },
  { genericName: "Methylphenidate", brandName: "Ritalin, Concerta", category: "CNS stimulant", primaryUse: "ADHD" },
  { genericName: "Insulin aspart", brandName: "NovoLog", category: "Rapid-acting insulin", primaryUse: "diabetes" },
  { genericName: "Loratadine", brandName: "Claritin", category: "Antihistamine", primaryUse: "allergies" },
  { genericName: "Lorazepam", brandName: "Ativan", category: "Benzodiazepine", primaryUse: "anxiety, seizures" },
  { genericName: "Ethinyl estradiol/norgestimate", brandName: "Ortho Tri-Cyclen", category: "Combination contraceptive", primaryUse: "contraception" },
  { genericName: "Lamotrigine", brandName: "Lamictal", category: "Anticonvulsant/mood stabilizer", primaryUse: "seizures, bipolar disorder maintenance" },
  { genericName: "Estradiol", brandName: "Estrace", category: "Estrogen replacement", primaryUse: "menopausal symptoms" },
  { genericName: "Glimepiride", brandName: "Amaryl", category: "Sulfonylurea", primaryUse: "type 2 diabetes" },
  { genericName: "Fluticasone/salmeterol", brandName: "Advair Diskus", category: "ICS/LABA", primaryUse: "asthma, COPD" },
  { genericName: "Folic acid", brandName: "Folvite", category: "Vitamin B9", primaryUse: "deficiency prevention" },
  { genericName: "Donepezil", brandName: "Aricept", category: "Cholinesterase inhibitor", primaryUse: "Alzheimer's" },
  { genericName: "Cetirizine", brandName: "Zyrtec", category: "Antihistamine", primaryUse: "allergies" },
  { genericName: "Sumatriptan", brandName: "Imitrex", category: "Triptan", primaryUse: "acute migraine" },
  { genericName: "Hydroxychloroquine", brandName: "Plaquenil", category: "DMARD/antimalarial", primaryUse: "lupus, rheumatoid arthritis" },
  { genericName: "Losartan/HCTZ", brandName: "Hyzaar", category: "ARB/diuretic", primaryUse: "hypertension" },
  { genericName: "Ethinyl estradiol/drospirenone", brandName: "Yaz, Yasmin", category: "Combination contraceptive", primaryUse: "contraception" },
  { genericName: "Ramipril", brandName: "Altace", category: "ACE inhibitor", primaryUse: "hypertension" },
  { genericName: "Paroxetine", brandName: "Paxil", category: "SSRI", primaryUse: "depression, anxiety" },
  { genericName: "Hydroxyzine", brandName: "Vistaril, Atarax", category: "Antihistamine", primaryUse: "itching, anxiety" },
  { genericName: "Prednisone", brandName: "Deltasone", category: "Corticosteroid", primaryUse: "inflammation" },
  { genericName: "Spironolactone", brandName: "Aldactone", category: "Potassium-sparing diuretic", primaryUse: "heart failure, edema" },
  { genericName: "Oxybutynin", brandName: "Ditropan XL", category: "Antimuscarinic", primaryUse: "overactive bladder" },
  { genericName: "Desiccated thyroid", brandName: "Armour Thyroid", category: "Thyroid hormone replacement", primaryUse: "hypothyroidism" },
  { genericName: "Fenofibrate", brandName: "Tricor", category: "Fibrate", primaryUse: "high triglycerides" },
  { genericName: "Triamterene/HCTZ", brandName: "Dyazide, Maxzide", category: "Diuretic combination", primaryUse: "hypertension, edema" },
  { genericName: "Guanfacine", brandName: "Tenex, Intuniv", category: "Alpha-2 agonist", primaryUse: "hypertension, ADHD" },
  { genericName: "Naproxen", brandName: "Aleve, Naprosyn", category: "NSAID", primaryUse: "pain, inflammation" },
  { genericName: "Cephalexin", brandName: "Keflex", category: "Cephalosporin antibiotic", primaryUse: "bacterial infections" },
  { genericName: "Testosterone", brandName: "AndroGel", category: "Androgen", primaryUse: "low testosterone" },
  { genericName: "Pregabalin", brandName: "Lyrica", category: "Anticonvulsant", primaryUse: "nerve pain" },
  { genericName: "Triamcinolone", brandName: "Kenalog", category: "Corticosteroid", primaryUse: "skin inflammation" },
  { genericName: "Valsartan/HCTZ", brandName: "Diovan HCT", category: "ARB/diuretic", primaryUse: "hypertension" },
  { genericName: "Regular insulin", brandName: "Humulin R, Novolin R", category: "Short-acting insulin", primaryUse: "diabetes" },
  { genericName: "Benazepril", brandName: "Lotensin", category: "ACE inhibitor", primaryUse: "hypertension" },
  { genericName: "Diazepam", brandName: "Valium", category: "Benzodiazepine", primaryUse: "anxiety, spasms, seizures" },
  { genericName: "Budesonide/formoterol", brandName: "Symbicort", category: "ICS/LABA", primaryUse: "asthma, COPD" },
  { genericName: "Hydralazine", brandName: "Apresoline", category: "Vasodilator", primaryUse: "hypertension" },
  { genericName: "Ethinyl estradiol/levonorgestrel", brandName: "Amethyst", category: "Combination contraceptive", primaryUse: "contraception" },
  { genericName: "Diltiazem", brandName: "Cardizem", category: "Calcium channel blocker", primaryUse: "hypertension, rate control" },
  { genericName: "Celecoxib", brandName: "Celebrex", category: "COX-2 NSAID", primaryUse: "arthritis pain" },
  { genericName: "Clindamycin", brandName: "Cleocin", category: "Lincosamide antibiotic", primaryUse: "bacterial infections" },
  { genericName: "Quetiapine", brandName: "Seroquel", category: "Atypical antipsychotic", primaryUse: "schizophrenia, bipolar disorder" },
  { genericName: "Ciprofloxacin", brandName: "Cipro", category: "Fluoroquinolone antibiotic", primaryUse: "bacterial infections" },
  { genericName: "Gemfibrozil", brandName: "Lopid", category: "Fibrate", primaryUse: "high triglycerides" },
  { genericName: "Topiramate", brandName: "Topamax", category: "Anticonvulsant", primaryUse: "seizures, migraine prevention" },
  { genericName: "Ropinirole", brandName: "Requip", category: "Dopamine agonist", primaryUse: "Parkinson's, restless legs" },
  { genericName: "Dapagliflozin", brandName: "Farxiga", category: "SGLT2 inhibitor", primaryUse: "diabetes, heart/kidney benefits" },
  { genericName: "Bacitracin/neomycin/polymyxin B", brandName: "Neosporin", category: "Topical antibiotics", primaryUse: "minor wounds" },
  { genericName: "Rivaroxaban", brandName: "Xarelto", category: "Factor Xa inhibitor", primaryUse: "anticoagulant" },
  { genericName: "Baclofen", brandName: "Lioresal", category: "Muscle relaxant", primaryUse: "spasticity" },
  { genericName: "Clonidine", brandName: "Catapres", category: "Alpha-2 agonist", primaryUse: "hypertension" },
  { genericName: "Levetiracetam", brandName: "Keppra", category: "Anticonvulsant", primaryUse: "seizures" },
  { genericName: "Norethindrone", brandName: "Camila, Heather", category: "Progestin contraceptive", primaryUse: "contraception" },
  { genericName: "Buspirone", brandName: "BuSpar", category: "Anxiolytic", primaryUse: "generalized anxiety" },
  { genericName: "Isosorbide mononitrate", brandName: "Imdur", category: "Nitrate", primaryUse: "angina prevention" },
  { genericName: "Temazepam", brandName: "Restoril", category: "Benzodiazepine", primaryUse: "insomnia" },
  { genericName: "Latanoprost", brandName: "Xalatan", category: "Prostaglandin analog", primaryUse: "glaucoma" },
  { genericName: "Aripiprazole", brandName: "Abilify", category: "Atypical antipsychotic", primaryUse: "schizophrenia, bipolar disorder" },
  { genericName: "Nitroglycerin", brandName: "Nitrostat", category: "Nitrate", primaryUse: "acute angina relief" },
  { genericName: "Tiotropium", brandName: "Spiriva", category: "LAMA bronchodilator", primaryUse: "COPD" },
  { genericName: "Doxycycline", brandName: "Vibramycin", category: "Tetracycline antibiotic", primaryUse: "bacterial infections" },
  { genericName: "Nebivolol", brandName: "Bystolic", category: "Beta blocker", primaryUse: "hypertension" },
  { genericName: "Ondansetron", brandName: "Zofran", category: "Antiemetic", primaryUse: "nausea, vomiting" },
  { genericName: "Insulin degludec", brandName: "Tresiba", category: "Long-acting insulin", primaryUse: "diabetes" },
  { genericName: "Verapamil", brandName: "Calan SR", category: "Calcium channel blocker", primaryUse: "hypertension, arrhythmias" },
  { genericName: "Lovastatin", brandName: "Mevacor", category: "Statin", primaryUse: "high cholesterol" },
  { genericName: "Famotidine", brandName: "Pepcid", category: "H2 blocker", primaryUse: "heartburn, GERD" },
  { genericName: "Timolol", brandName: "Timoptic", category: "Ophthalmic beta blocker", primaryUse: "glaucoma" },
  { genericName: "Valsartan", brandName: "Diovan", category: "ARB", primaryUse: "hypertension, heart failure" },
  { genericName: "Amoxicillin/clavulanate", brandName: "Augmentin", category: "Combination penicillin antibiotic", primaryUse: "bacterial infections" },
  { genericName: "Promethazine", brandName: "Phenergan", category: "Antihistamine/antiemetic", primaryUse: "nausea" },
  { genericName: "Finasteride", brandName: "Propecia, Proscar", category: "5-alpha reductase inhibitor", primaryUse: "hair loss, BPH" },
  { genericName: "Methotrexate", brandName: "Trexall", category: "DMARD/antimetabolite", primaryUse: "autoimmune disease, cancer" },
  { genericName: "Benzonatate", brandName: "Tessalon Perles", category: "Antitussive", primaryUse: "cough" },
  { genericName: "Amitriptyline", brandName: "Elavil", category: "Tricyclic antidepressant", primaryUse: "depression, nerve pain" },
  { genericName: "Dulaglutide", brandName: "Trulicity", category: "GLP-1 agonist", primaryUse: "type 2 diabetes" },
  { genericName: "Memantine", brandName: "Namenda", category: "NMDA antagonist", primaryUse: "Alzheimer's" },
  { genericName: "Esomeprazole", brandName: "Nexium", category: "PPI", primaryUse: "GERD, ulcers" },
  { genericName: "Mirtazapine", brandName: "Remeron", category: "Antidepressant", primaryUse: "depression" },
  { genericName: "Doxazosin", brandName: "Cardura", category: "Alpha-1 blocker", primaryUse: "BPH, hypertension" },
  { genericName: "Tizanidine", brandName: "Zanaflex", category: "Muscle relaxant", primaryUse: "spasticity" },
  { genericName: "Nifedipine", brandName: "Procardia XL", category: "Calcium channel blocker", primaryUse: "hypertension, angina" },
  { genericName: "Ezetimibe", brandName: "Zetia", category: "Cholesterol absorption inhibitor", primaryUse: "high cholesterol" },
  { genericName: "Alendronate", brandName: "Fosamax", category: "Bisphosphonate", primaryUse: "osteoporosis" },
  { genericName: "Sulfamethoxazole/trimethoprim", brandName: "Bactrim", category: "Combination antibiotic", primaryUse: "bacterial infections" },
  { genericName: "Valacyclovir", brandName: "Valtrex", category: "Antiviral", primaryUse: "herpes, shingles" },
  { genericName: "Lisdexamfetamine", brandName: "Vyvanse", category: "CNS stimulant", primaryUse: "ADHD, binge-eating disorder" },
  { genericName: "Enalapril", brandName: "Vasotec", category: "ACE inhibitor", primaryUse: "hypertension, heart failure" },
  { genericName: "Nirmatrelvir/ritonavir", brandName: "Paxlovid", category: "Antiviral combination", primaryUse: "COVID-19" },
  { genericName: "Ferrous sulfate", brandName: "Feosol", category: "Iron supplement", primaryUse: "iron-deficiency anemia" },
  { genericName: "Docusate", brandName: "Colace", category: "Stool softener", primaryUse: "constipation" },
  { genericName: "Hydrocortisone", brandName: "Cortizone-10", category: "Corticosteroid", primaryUse: "itching, inflammation" },
  { genericName: "Apixaban", brandName: "Eliquis", category: "Factor Xa inhibitor", primaryUse: "anticoagulant" },
  { genericName: "Insulin lispro", brandName: "Humalog", category: "Rapid-acting insulin", primaryUse: "diabetes" },
  { genericName: "Morphine", brandName: "MS Contin", category: "Opioid analgesic", primaryUse: "severe pain" },
  { genericName: "Diclofenac", brandName: "Voltaren", category: "NSAID", primaryUse: "pain, inflammation" },
  { genericName: "Pioglitazone", brandName: "Actos", category: "Thiazolidinedione", primaryUse: "type 2 diabetes" },
  { genericName: "Risperidone", brandName: "Risperdal", category: "Atypical antipsychotic", primaryUse: "schizophrenia, bipolar disorder" },
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
