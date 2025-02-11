// Structure to hold parent data
class Parent {
    constructor(height, genotype, phenotype, traits, mutations, coatLength, breed, eyeColor, stats, rank) {
        this.height = height;
        this.genotype = genotype;
        this.phenotype = phenotype;
        this.traits = traits;
        this.mutations = mutations;
        this.coatLength = coatLength;
        this.breed = breed;
        this.eyeColor = eyeColor;
        this.stats = stats;
        this.rank = rank;
    }
}


// Function to map genotype to phenotype (color)
function getColorPhenotype(genotype) {
    // Define genotype-phenotype mapping
    const genotypeToColor = {
        "EE cc rr DD ss": "Non-Dilute Black",
        "Ee cc rr DD ss": "Black",
        "EE cc rr Dd ss": "Non-Dilute Black",
        "Ee cc rr Dd ss": "Black",
        "ee cc rr DD ss": "Black",
        "ee cc rr Dd ss": "Black",
        "EE cc rr DD Ss": "Non-Dilute Black",
        "Ee cc rr DD Ss": "Black",
        "EE cc rr Dd Ss": "Non-Dilute Black",
        "Ee cc rr Dd Ss": "Black",
        "ee cc rr DD Ss": "Black",
        "ee cc rr Dd Ss": "Black",
        "EE cc rr DD SS": "Non-Dilute Black",
        "Ee cc rr DD SS": "Black",
        "EE cc rr Dd SS": "Non-Dilute Black",
        "Ee cc rr Dd SS": "Black",
        "ee cc rr DD SS": "Black",
        "ee cc rr Dd SS": "Black",
        "EE cc rr dd ss": "Non-Dilute Black",
        "Ee cc rr dd ss": "Blue",
        "EE cc rr dd ss": "Non-Dilute Black",
        "Ee cc rr dd ss": "Blue",
        "ee cc rr dd ss": "Blue",
        "ee cc rr dd ss": "Blue",
        "EE cc rr dd Ss": "Non-Dilute Black",
        "Ee cc rr dd Ss": "Blue",
        "EE cc rr dd Ss": "Non-Dilute Black",
        "Ee cc rr dd Ss": "Blue",
        "ee cc rr dd Ss": "Blue",
        "ee cc rr dd Ss": "Blue",
        "EE cc rr dd SS": " Non-Dilute Black",
        "Ee cc rr dd SS": "Blue",
        "EE cc rr dd SS": "Non-Dilute Black",
        "Ee cc rr dd SS": "Blue",
        "ee cc rr dd SS": "Blue",
        "ee cc rr dd SS": "Blue",
        "ee CC rr DD ss": "Chocolate",
        "ee CC rr Dd ss": "Chocolate",
        "ee Cc rr DD ss": "Chocolate",
        "ee Cc rr Dd ss": "Chocolate",
        "ee CC rr DD Ss": "Chocolate",
        "ee CC rr Dd Ss": "Chocolate",
        "ee Cc rr DD Ss": "Chocolate",
        "ee Cc rr Dd Ss": "Chocolate",
        "ee CC rr DD SS": "Chocolate",
        "ee CC rr Dd SS": "Chocolate",
        "ee Cc rr DD SS": "Chocolate",
        "ee Cc rr Dd SS": "Chocolate",
        "EE CC rr DD ss": "Chocolate",
        "EE CC rr Dd ss": "Chocolate",
        "Ee CC rr DD ss": "Chocolate",
        "Ee CC rr Dd ss": "Chocolate",
        "EE Cc rr DD ss": "Chocolate",
        "EE Cc rr Dd ss": "Chocolate",
        "Ee Cc rr DD ss": "Chocolate",
        "Ee Cc rr Dd ss": "Chocolate",
        "EE CC rr DD Ss": "Chocolate",
        "EE CC rr Dd Ss": "Chocolate",
        "Ee CC rr DD Ss": "Chocolate",
        "Ee CC rr Dd Ss": "Chocolate",
        "EE Cc rr DD Ss": "Chocolate",
        "EE Cc rr Dd Ss": "Chocolate",
        "Ee Cc rr DD Ss": "Chocolate",
        "Ee Cc rr Dd Ss": "Chocolate",
        "EE CC rr DD SS": "Chocolate",
        "EE CC rr Dd SS": "Chocolate",
        "Ee CC rr DD SS": "Chocolate",
        "Ee CC rr Dd SS": "Chocolate",
        "EE Cc rr DD SS": "Chocolate",
        "EE Cc rr Dd SS": "Chocolate",
        "Ee Cc rr DD SS": "Chocolate",
        "Ee Cc rr Dd SS": "Chocolate",
        "ee CC rr dd ss": "Cinnamon",
        "ee Cc rr dd ss": "Cinnamon",
        "ee CC rr dd Ss": "Cinnamon",
        "ee Cc rr dd Ss": "Cinnamon",
        "ee CC rr dd SS": "Cinnamon",
        "ee Cc rr dd SS": "Cinnamon",
        "EE CC rr dd ss": "Cinnamon",
        "Ee CC rr dd ss": "Cinnamon",
        "EE Cc rr dd ss": "Cinnamon",
        "Ee Cc rr dd ss": "Cinnamon",
        "EE CC rr dd Ss": "Cinnamon",
        "Ee CC rr dd Ss": "Cinnamon",
        "EE Cc rr dd Ss": "Cinnamon",
        "Ee Cc rr dd Ss": "Cinnamon",
        "EE CC rr dd SS": "Cinnamon",
        "Ee CC rr dd SS": "Cinnamon",
        "EE Cc rr dd SS": "Cinnamon",
        "Ee Cc rr dd SS": "Cinnamon",
        "ee cc RR DD ss": "Red",
        "ee  cc RR Dd ss": "Red",
        "ee cc Rr DD ss": "Red",
        "ee cc Rr Dd ss": "Red",
        "ee cc RR DD Ss": "Red",
        "ee cc RR Dd Ss": "Red",
        "ee cc Rr DD Ss": "Red",
        "ee cc Rr Dd Ss": "Red",
        "ee cc RR DD SS": "Red",
        "ee cc RR Dd SS": "Red",
        "ee cc Rr DD SS": "Red",
        "ee cc Rr Dd SS": "Red",
        "ee CC RR DD ss": "Red",
        "ee  CC RR Dd ss": "Red",
        "ee Cc RR DD ss": "Red",
        "ee  Cc RR Dd ss": "Red",
        "ee CC Rr DD ss": "Red",
        "ee CC Rr Dd ss": "Red",
        "ee Cc Rr DD ss": "Red",
        "ee Cc Rr Dd ss": "Red",
        "ee CC RR DD Ss": "Red",
        "ee  CC RR Dd Ss": "Red",
        "ee Cc RR DD Ss": "Red",
        "ee  Cc RR Dd Ss": "Red",
        "ee CC Rr DD Ss": "Red",
        "ee CC Rr Dd Ss": "Red",
        "ee Cc Rr DD Ss": "Red",
        "ee Cc Rr Dd Ss": "Red",
        "ee CC RR DD SS": "Red",
        "ee  CC RR Dd SS": "Red",
        "ee Cc RR DD SS": "Red",
        "ee  Cc RR Dd SS": "Red",
        "ee CC Rr DD SS": "Red",
        "ee CC Rr Dd SS": "Red",
        "ee Cc Rr DD SS": "Red",
        "ee Cc Rr Dd SS": "Red",
        "EE cc RR DD ss": "Red",
        "EE  cc RR Dd ss": "Red",
        "Ee cc RR DD ss": "Red",
        "Ee  cc RR Dd ss": "Red",
        "EE cc Rr DD ss": "Red",
        "EE cc Rr Dd ss": "Red",
        "Ee cc Rr DD ss": "Red",
        "Ee cc Rr Dd ss": "Red",
        "EE cc RR DD Ss": "Red",
        "EE  cc RR Dd Ss": "Red",
        "Ee cc RR DD Ss": "Red",
        "Ee  cc RR Dd Ss": "Red",
        "EE cc Rr DD Ss": "Red",
        "EE cc Rr Dd Ss": "Red",
        "Ee cc Rr DD Ss": "Red",
        "Ee cc Rr Dd Ss": "Red",
        "EE cc RR DD SS": "Red",
        "EE  cc RR Dd SS": "Red",
        "Ee cc RR DD SS": "Red",
        "Ee  cc RR Dd SS": "Red",
        "EE cc Rr DD SS": "Red",
        "EE cc Rr Dd SS": "Red",
        "Ee cc Rr DD SS": "Red",
        "Ee cc Rr Dd SS": "Red",
        "EE CC RR DD ss": "Red",
        "EE  CC RR Dd ss": "Red",
        "Ee CC RR DD ss": "Red",
        "Ee  CC RR Dd ss": "Red",
        "EE CC Rr DD ss": "Red",
        "EE CC Rr Dd ss": "Red",
        "Ee CC Rr DD ss": "Red",
        "Ee CC Rr Dd ss": "Red",
        "EE CC RR DD Ss": "Red",
        "EE  CC RR Dd Ss": "Red",
        "Ee CC RR DD Ss": "Red",
        "Ee  CC RR Dd Ss": "Red",
        "EE CC Rr DD Ss": "Red",
        "EE CC Rr Dd Ss": "Red",
        "Ee CC Rr DD Ss": "Red",
        "Ee CC Rr Dd Ss": "Red",
        "EE CC RR DD SS": "Red",
        "EE  CC RR Dd SS": "Red",
        "Ee CC RR DD SS": "Red",
        "Ee  CC RR Dd SS": "Red",
        "EE CC Rr DD SS": "Red",
        "EE CC Rr Dd SS": "Red",
        "Ee CC Rr DD SS": "Red",
        "Ee CC Rr Dd SS": "Red",
        "EE Cc RR DD ss": "Red",
        "EE Cc RR Dd ss": "Red",
        "Ee Cc RR DD ss": "Red",
        "Ee Cc RR Dd ss": "Red",
        "EE Cc Rr DD ss": "Red",
        "EE Cc Rr Dd ss": "Red",
        "Ee Cc Rr DD ss": "Red",
        "Ee Cc Rr Dd ss": "Red",
        "EE Cc RR DD Ss": "Red",
        "EE Cc RR Dd Ss": "Red",
        "Ee Cc RR DD Ss": "Red",
        "Ee Cc RR Dd Ss": "Red",
        "EE Cc Rr DD Ss": "Red",
        "EE Cc Rr Dd Ss": "Red",
        "Ee Cc Rr DD Ss": "Red",
        "Ee Cc Rr Dd Ss": "Red",
        "EE Cc RR DD SS": "Red",
        "EE Cc RR Dd SS": "Red",
        "Ee Cc RR DD SS": "Red",
        "Ee Cc RR Dd SS": "Red",
        "EE Cc Rr DD SS": "Red",
        "EE Cc Rr Dd SS": "Red",
        "Ee Cc Rr DD SS": "Red",
        "Ee Cc Rr Dd SS": "Red",
        "ee  cc RR dd ss": "Gold",
        "ee cc Rr dd ss": "Gold",
        "ee  cc RR dd Ss": "Gold",
        "ee cc Rr dd Ss": "Gold",
        "ee  cc RR dd SS": "Gold",
        "ee cc Rr dd SS": "Gold",
        "ee  CC RR dd ss": "Gold",
        "ee  Cc RR dd ss": "Gold",
        "ee CC Rr dd ss": "Gold",
        "ee Cc Rr dd ss": "Gold",
        "ee  CC RR dd Ss": "Gold",
        "ee  Cc RR dd Ss": "Gold",
        "ee CC Rr dd Ss": "Gold",
        "ee Cc Rr dd Ss": "Gold",
        "ee  CC RR dd SS": "Gold",
        "ee  Cc RR dd SS": "Gold",
        "ee CC Rr dd SS": "Gold",
        "ee Cc Rr dd SS": "Gold",
        "EE  cc RR dd ss": "Gold",
        "Ee  cc RR dd ss": "Gold",
        "EE cc Rr dd ss": "Gold",
        "Ee cc Rr dd ss": "Gold",
        "EE  cc RR dd Ss": "Gold",
        "Ee  cc RR dd Ss": "Gold",
        "EE cc Rr dd Ss": "Gold",
        "Ee cc Rr dd Ss": "Gold",
        "EE  cc RR dd SS": "Gold",
        "Ee  cc RR dd SS": "Gold",
        "EE cc Rr dd SS": "Gold",
        "Ee cc Rr dd SS": "Gold",
        "EE  CC RR dd ss": "Gold",
        "Ee  CC RR dd ss": "Gold",
        "EE CC Rr dd ss": "Gold",
        "Ee CC Rr dd ss": "Gold",
        "EE  CC RR dd Ss": "Gold",
        "Ee  CC RR dd Ss": "Gold",
        "EE CC Rr dd Ss": "Gold",
        "Ee CC Rr dd Ss": "Gold",
        "EE  CC RR dd SS": "Gold",
        "Ee  CC RR dd SS": "Gold",
        "EE CC Rr dd SS": "Gold",
        "Ee CC Rr dd SS": "Gold",
        "EE cc rr DD Sas": "Non-Dilute Black",
        "Ee cc rr DD Sas": "Sapphire",
        "EE cc rr Dd Sas": "Non-Dilute Black",
        "Ee cc rr Dd Sas": "Sapphire",
        "ee cc rr DD Sas": "Sapphire",
        "ee cc rr Dd Sas": "Sapphire",
        "EE cc rr DD SaSa": "Non-Dilute Black",
        "Ee cc rr DD SaSa": "Sapphire",
        "EE cc rr Dd SaSa": "Non-Dilute Black",
        "Ee cc rr Dd SaSa": "Sapphire",
        "ee cc rr DD SaSa": "Sapphire",
        "ee cc rr Dd SaSa": "Sapphire",
        "EE cc rr dd Sas": "Non-Dilute Black",
        "Ee cc rr dd Sas": "Sky",
        "EE cc rr dd Sas": "Non-Dilute Black",
        "Ee cc rr dd Sas": "Sky",
        "ee cc rr dd Sas": "Sky",
        "ee cc rr dd Sas": "Sky",
        "EE cc rr dd SaSa": "Non-Dilute Black",
        "Ee cc rr dd SaSa": "Sky",
        "EE cc rr dd SaSa": "Non-Dilute Black",
        "Ee cc rr dd SaSa": "Sky",
        "ee cc rr dd SaSa": "Sky",
        "ee cc rr dd SaSa": "Sky",
        "ee CC rr DD Sgs": "Green",
        "ee CC rr Dd Sgs": "Green",
        "ee Cc rr DD Sgs": "Green",
        "ee Cc rr Dd Sgs": "Green",
        "ee CC rr DD SgSg": "Green",
        "ee CC rr Dd SgSg": "Green",
        "ee Cc rr DD SgSg": "Green",
        "ee Cc rr Dd SgSg": "Green",
        "EE CC rr DD Sgs": "Green",
        "EE CC rr Dd Sgs": "Green",
        "Ee CC rr DD Sgs": "Green",
        "Ee CC rr Dd Sgs": "Green",
        "EE Cc rr DD Sgs": "Green",
        "EE Cc rr Dd Sgs": "Green",
        "Ee Cc rr DD Sgs": "Green",
        "Ee Cc rr Dd Sgs": "Green",
        "EE CC rr DD SgSg": "Green",
        "EE CC rr Dd SgSg": "Green",
        "Ee CC rr DD SgSg": "Green",
        "Ee CC rr Dd SgSg": "Green",
        "EE Cc rr DD SgSg": "Green",
        "EE Cc rr Dd SgSg": "Green",
        "Ee Cc rr DD SgSg": "Green",
        "Ee Cc rr Dd SgSg": "Green",
        "ee CC rr dd Sgs": "Aqua",
        "ee Cc rr dd Sgs": "Aqua",
        "ee CC rr dd SgSg": "Aqua",
        "ee Cc rr dd SgSg": "Aqua",
        "EE CC rr dd Sgs": "Aqua",
        "Ee CC rr dd Sgs": "Aqua",
        "EE Cc rr dd Sgs": "Aqua",
        "Ee Cc rr dd Sgs": "Aqua",
        "EE CC rr dd SgSg": "Aqua",
        "Ee CC rr dd SgSg": "Aqua",
        "EE Cc rr dd SgSg": "Aqua",
        "Ee Cc rr dd SgSg": "Aqua",
        "ee CC rr DD Sps": "Purple",
        "ee CC rr Dd Sps": "Purple",
        "ee Cc rr DD Sps": "Purple",
        "ee Cc rr Dd Sps": "Purple",
        "ee CC rr DD SpSp": "Purple",
        "ee CC rr Dd SpSp": "Purple",
        "ee Cc rr DD SpSp": "Purple",
        "ee Cc rr Dd SpSp": "Purple",
        "EE CC rr DD Sps": "Purple",
        "EE CC rr Dd Sps": "Purple",
        "Ee CC rr DD Sps": "Purple",
        "Ee CC rr Dd Sps": "Purple",
        "EE Cc rr DD Sps": "Purple",
        "EE Cc rr Dd Sps": "Purple",
        "Ee Cc rr DD Sps": "Purple",
        "Ee Cc rr Dd Sps": "Purple",
        "EE CC rr DD SpSp": "Purple",
        "EE CC rr Dd SpSp": "Purple",
        "Ee CC rr DD SpSp": "Purple",
        "Ee CC rr Dd SpSp": "Purple",
        "EE Cc rr DD SpSp": "Purple",
        "EE Cc rr Dd SpSp": "Purple",
        "Ee Cc rr DD SpSp": "Purple",
        "Ee Cc rr Dd SpSp": "Purple",
        "ee CC rr dd Sps": "Amethyst",
        "ee Cc rr dd Sps": "Amethyst",
        "ee CC rr dd SpSp": "Amethyst",
        "ee Cc rr dd SpSp": "Amethyst",
        "EE CC rr dd Sps": "Amethyst",
        "Ee CC rr dd Sps": "Amethyst",
        "EE Cc rr dd Sps": "Amethyst",
        "Ee Cc rr dd Sps": "Amethyst",
        "EE CC rr dd SpSp": "Amethyst",
        "Ee CC rr dd SpSp": "Amethyst",
        "EE Cc rr dd SpSp": "Amethyst",
        "Ee Cc rr dd SpSp": "Amethyst",
        "ee cc RR DD Sss": "Scarlet",
        "ee cc RR Dd Sss": "Scarlet",
        "ee cc Rr DD Sss": "Scarlet",
        "ee cc Rr Dd Sss": "Scarlet",
        "ee cc RR DD SsSs": "Scarlet",
        "ee cc RR Dd SsSs": "Scarlet",
        "ee cc Rr DD SsSs": "Scarlet",
        "ee cc Rr Dd SsSs": "Scarlet",
        "ee CC RR DD Sss": "Scarlet",
        "ee  CC RR Dd Sss": "Scarlet",
        "ee Cc RR DD Sss": "Scarlet",
        "ee  Cc RR Dd Sss": "Scarlet",
        "ee CC Rr DD Sss": "Scarlet",
        "ee CC Rr Dd Sss": "Scarlet",
        "ee Cc Rr DD Sss": "Scarlet",
        "ee Cc Rr Dd Sss": "Scarlet",
        "ee CC RR DD SsSs": "Scarlet",
        "ee  CC RR Dd SsSs": "Scarlet",
        "ee Cc RR DD SsSs": "Scarlet",
        "ee  Cc RR Dd SsSs": "Scarlet",
        "ee CC Rr DD SsSs": "Scarlet",
        "ee CC Rr Dd SsSs": "Scarlet",
        "ee Cc Rr DD SsSs": "Scarlet",
        "ee Cc Rr Dd SsSs": "Scarlet",
        "EE cc RR DD Sss": "Scarlet",
        "EE  cc RR Dd Sss": "Scarlet",
        "Ee cc RR DD Sss": "Scarlet",
        "Ee  cc RR Dd Sss": "Scarlet",
        "EE cc Rr DD Sss": "Scarlet",
        "EE cc Rr Dd Sss": "Scarlet",
        "Ee cc Rr DD Sss": "Scarlet",
        "Ee cc Rr Dd Sss": "Scarlet",
        "EE cc RR DD SsSs": "Scarlet",
        "EE  cc RR Dd SsSs": "Scarlet",
        "Ee cc RR DD SsSs": "Scarlet",
        "Ee  cc RR Dd SsSs": "Scarlet",
        "EE cc Rr DD SsSs": "Scarlet",
        "EE cc Rr Dd SsSs": "Scarlet",
        "Ee cc Rr DD SsSs": "Scarlet",
        "Ee cc Rr Dd SsSs": "Scarlet",
        "EE CC RR DD Sss": "Scarlet",
        "EE  CC RR Dd Sss": "Scarlet",
        "Ee CC RR DD Sss": "Scarlet",
        "Ee  CC RR Dd Sss": "Scarlet",
        "EE CC Rr DD Sss": "Scarlet",
        "EE CC Rr Dd Sss": "Scarlet",
        "Ee CC Rr DD Sss": "Scarlet",
        "Ee CC Rr Dd Sss": "Scarlet",
        "EE CC RR DD SsSs": "Scarlet",
        "EE  CC RR Dd SsSs": "Scarlet",
        "Ee CC RR DD SsSs": "Scarlet",
        "Ee  CC RR Dd SsSs": "Scarlet",
        "EE CC Rr DD SsSs": "Scarlet",
        "EE CC Rr Dd SsSs": "Scarlet",
        "Ee CC Rr DD SsSs": "Scarlet",
        "Ee CC Rr Dd SsSs": "Scarlet",
        "EE Cc RR DD Sss": "Scarlet",
        "EE Cc RR Dd Sss": "Scarlet",
        "Ee Cc RR DD Sss": "Scarlet",
        "Ee Cc RR Dd Sss": "Scarlet",
        "EE Cc Rr DD Sss": "Scarlet",
        "EE Cc Rr Dd Sss": "Scarlet",
        "Ee Cc Rr DD Sss": "Scarlet",
        "Ee Cc Rr Dd Sss": "Scarlet",
        "EE Cc RR DD SsSs": "Scarlet",
        "EE Cc RR Dd SsSs": "Scarlet",
        "Ee Cc RR DD SsSs": "Scarlet",
        "Ee Cc RR Dd SsSs": "Scarlet",
        "EE Cc Rr DD SsSs": "Scarlet",
        "EE Cc Rr Dd SsSs": "Scarlet",
        "Ee Cc Rr DD SsSs": "Scarlet",
        "Ee Cc Rr Dd SsSs": "Scarlet",
        "ee  cc RR dd Sss": "Salmon",
        "ee cc Rr dd Sss": "Salmon",
        "ee  cc RR dd SsSs": "Salmon",
        "ee cc Rr dd SsSs": "Salmon",
        "ee  CC RR dd Sss": "Salmon",
        "ee  Cc RR dd Sss": "Salmon",
        "ee CC Rr dd Sss": "Salmon",
        "ee Cc Rr dd Sss": "Salmon",
        "ee  CC RR dd SsSs": "Salmon",
        "ee  Cc RR dd SsSs": "Salmon",
        "ee CC Rr dd SsSs": "Salmon",
        "ee Cc Rr dd SsSs": "Salmon",
        "EE  cc RR dd Sss": "Salmon",
        "Ee  cc RR dd Sss": "Salmon",
        "EE cc Rr dd Sss": "Salmon",
        "Ee cc Rr dd Sss": "Salmon",
        "EE  cc RR dd SsSs": "Salmon",
        "Ee  cc RR dd SsSs": "Salmon",
        "EE cc Rr dd SsSs": "Salmon",
        "Ee cc Rr dd SsSs": "Salmon",
        "EE  CC RR dd Sss": "Salmon",
        "Ee  CC RR dd Sss": "Salmon",
        "EE CC Rr dd Sss": "Salmon",
        "Ee CC Rr dd Sss": "Salmon",
        "EE  CC RR dd SsSs": "Salmon",
        "Ee  CC RR dd SsSs": "Salmon",
        "EE CC Rr dd SsSs": "Salmon",
        "Ee CC Rr dd SsSs": "Salmon",
    };


    return genotypeToColor[genotype] || "Unknown Phenotype";
}


// Map for Genotype Passdown Rates
const genotypePassdownRates = {
    "nVg": 0.50, // 50% chance to pass down
    "VgVg": 1.0, // 100% chance to pass down
    "nCn": 0.50,
    "CnCn": 1.0,
    "nDip": 0.5,
    "DipDip": 1.0,
    "nDn": 0.50,
    "DnDn": 1.0,
    "nFr": 0.50,
    "FrFr": 1.0,
    "nMsk": 0.50,
    "MskMsk": 1.0,
    "nRn": 0.50,
    "RnRn": 1.0,
    "nA": 0.50,
    "AA": 1.0,
    "nCr": 0.50,
    "nSty": 0.50,
    "StySty": 1.0,
    "nStk": 0.50,
    "StkStk": 1.0,
    "nBch": 0.25,
    "BchBch": 0.50,
    "nCh": 0.25,
    "ChCh": 0.50,
    "nW": 0.25,
    "CrCr": 0.50,
    "nDs": 0.25,
    "DsDs": 0.50,
    "nG": 0.25,
    "GG": 0.50,
    "nPan": 0.25,
    "PanPan": 0.50,
    "nZ": 0.25,
    "ZZ": 0.50,
    "nTab": 0.25,
    "TabTab": 0.50,
    "nWh": 0.25,
    "WhWh": 0.50,
    "nAn": 0.20,
    "AnAn": 0.40,
    "nEm": 0.20,
    "EmEm": 0.40,
    "ff": 0.20,
    "nIb": 0.20,
    "IbIb": 0.40,
    "prlprl": 0.40,
    "nRi": 0.20,
    "RiRi": 0.40,
    "nTort": 0.20,
    "TortTort": 0.40,
    "nAst": 0.15,
    "AstAst": 0.30,
    "nIri": 0.15,
    "IriIri": 0.30,
    "nMx": 0.15,
    "MxMx": 0.30,
    "nM": 0.15,
    "MM": 0.30,
    "nTn": 0.15,
    "TnTn": 0.30,
};


// Map for Genotype to Phenotype Mapping
const genotypeToPhenotype = {
    "n/Vg": "Non Visible Varigate",
    "Vg/Vg": "Varigate",
    "n/Cn": "Non Visible Chin",
    "Cn/Cn": "Chin",
    "nDip": "Non Visible Dipped",
    "DipDip": "Visible Dipped",
    "nDn": "Non Visible Dun",
    "DnDn": "Visible Dun",
    "nFr": "Non Visible Freckling",
    "FrFr": "Visible Freckling",
    "nMsk": "Non Visible Mask",
    "MskMsk": "Visible Mask",
    "nRn": "Non Visible Roan",
    "RnRn": "Visible Roan",
    "nA": "Non Visible Siam",
    "AA": "Visible Siam",
    "nCr": "Single Cream",
    "nSty": "Non Visible Sooty",
    "StySty": "Sooty",
    "nStk": "Non Visible Stockings",
    "StkStk": "Stockings",
    "nBch": "Non Visible Bleach",
    "BchBch": "Visible Bleach",
    "nCh": "Non Visible Champagne",
    "ChCh": "Visible Champagne",
    "nW": "Dom White",
    "CrCr": "Visible Cream",
    "nDs": "Non Visible Double Socks",
    "DsDs": "Visible Double Socks",
    "nG": "Non Visible Grey",
    "GG": "Visible Grey",
    "nPan": "Non Visible Pangare",
    "PanPan": "Visible Pangare",
    "nZ": "Non Visible Silver",
    "ZZ": "Visible Silver",
    "nTab": "Non Visible Tabby",
    "TabTab": "Visible Tabby",
    "nWh": "Non Visible Wash",
    "WhWh": "Visible Wash",
};


// Function to determine the offspring breed
function determineOffspringBreed(parent1Breed, parent2Breed) {
    const breedingRates = {
        "Standard x Standard": { "Standard": 1 },
        "Standard x Draft": { "Standard": 0.6, "Draft": 0.4 },
        "Standard x Variant": { "Standard": 0.9, "Variant": 0.1 },
        "Draft x Draft": { "Draft": 1 },
        "Draft x Variant": { "Draft": 0.8, "Variant": 0.2 },
        "Variant x Variant": { "Variant": 1 },
        "Avian x Avian": { "Avian": 1 },
        "Oriental x Oriental": { "Oriental": 1 },
        "Draken x Draken": { "Draken": 1 },
        "Oriental x Draken": { "Oriental": 0.5, "Draken": 0.5 },
        "Gigan x Gigan": { "Gigan": 1 },
        "Standard/Draft x Oriental": { "Standard/Draft": 0.8, "Oriental": 0.2 },
        "Standard/Draft x Draken": { "Standard/Draft": 0.6, "Draken": 0.4 },
        "Standard/Draft x Avian": { "Standard/Draft": 0.8, "Avian": 0.2 },
        "Standard/Draft x Gigan": { "Standard/Draft": 0.9, "Gigan": 0.1 },
        "Variant x Oriental": { "Variant": 0.6, "Oriental": 0.4 },
        "Variant x Draken": { "Variant": 0.5, "Draken": 0.5 },
        "Variant x Avian": { "Variant": 0.8, "Gigan": 0.2 },
        "Variant x Gigan": { "Variant": 0.8, "Avian": 0.2 },
        "Oriental x Avian": { "Oriental": 0.6, "Avian": 0.4 },
        "Oriental x Gigan": { "Oriental": 0.8, "Gigan": 0.2 },
        "Draken x Avian": { "Draken": 0.5, "Avian": 0.5 },
        "Draken x Gigan": { "Draken": 0.9, "Gigan": 0.1 },
        "Avian x Gigan": { "Avian": 0.6, "Gigan": 0.4 },
    };


    const key = `${parent1Breed} x ${parent2Breed}`;
    if (key in breedingRates) {
        return breedingRates[key];
    } else {
        const reverseKey = `${parent2Breed} x ${parent1Breed}`;
        if (reverseKey in breedingRates) {
            return breedingRates[reverseKey];
        } else {
            return { "Unknown": 1 };
        }
    }
}


// Function to determine the offspring coat length
function determineOffspringCoatLength(parent1CoatLength, parent2CoatLength, parent1Breed, parent2Breed) {
    const coatLengthProbabilities = {
        "Standard": {
            "Smooth x Smooth": { "Smooth": 1 },
            "Smooth x Medium": { "Smooth": 0.5, "Medium": 0.5 },
            "Smooth x Long": { "Smooth": 0.6, "Long": 0.4 },
            "Smooth x Silky": { "Smooth": 0.8, "Silky": 0.2 },
            "Medium x Medium": { "Medium": 1 },
            "Long x Long": { "Long": 1 },
            "Long x Silky": { "Long": 0.5, "Silky": 0.5 },
            "Silky x Silky": { "Silky": 1 },
        },
        "Variant": {
            "Light x Light": { "Light": 1 },
            "Light x Heavy": { "Light": 0.6, "Heavy": 0.4 },
            "Heavy x Heavy": { "Heavy": 1 },
        },
        "Draft": {
            "Smooth x Smooth": { "Smooth": 1 },
            "Smooth x Medium": { "Smooth": 0.5, "Medium": 0.5 },
            "Smooth x Long": { "Long": 0.6, "Smooth": 0.4 },
            "Smooth x Silky": { "Silky": 0.8, "Smooth": 0.2 },
            "Medium x Medium": { "Medium": 1 },
            "Long x Long": { "Long": 1 },
            "Long x Silky": { "Long": 0.5, "Silky": 0.5 },
            "Silky x Silky": { "Silky": 1 },
        },
        "Avian": {
            "Shorthair x Long hair": { "Shorthair": 0.5, "Long hair": 0.5 },
            "Common x Crested": { "Common": 0.6, "Crested": 0.4 },
            "Common x Fancy": { "Common": 0.8, "Fancy": 0.2 },
            "Crested x Fancy": { "Crested": 0.6, "Fancy": 0.4 },
        },
    };


    const key = `${parent1CoatLength} x ${parent2CoatLength}`;
    if (parent1Breed === parent2Breed) {
        if (key in coatLengthProbabilities[parent1Breed]) {
            return coatLengthProbabilities[parent1Breed][key];
        } else {
            const reverseKey = `${parent2CoatLength} x ${parent1CoatLength}`;
            if (reverseKey in coatLengthProbabilities[parent1Breed]) {
                return coatLengthProbabilities[parent1Breed][reverseKey];
            } else {
                return { "Unknown": 1 };
            }
        }
    } else {
        if (parent1Breed === "Standard" && parent2Breed === "Draft") {
            const standardCoatLengthProbabilities = {
                "Silky x Silky": { "Smooth": 0.5, "Medium": 0.5 },
                "Silky x Long": { "Smooth": 0.5, "Medium": 0.25, "Long": 0.25 },
                "Silky x Medium": { "Smooth": 0.25, "Medium": 0.25, "Long": 0.25, "Silky": 0.25 },
                "Silky x Smooth": { "Smooth": 0.25, "Medium": 0.25, "Long": 0.25, "Silky": 0.25 },
                "Long x Medium": { "Medium": 0.5, "Smooth": 0.25, "Long": 0.25 },
                "Long x Smooth": { "Smooth": 1 },
                "Long x Long": { "Smooth": 0.5, "Medium": 0.5 },
                "Medium x Medium": { "Medium": 1 },
                "Medium x Smooth": { "Smooth": 0.5, "Medium": 0.5 },
                "Smooth x Smooth": { "Smooth": 1 },
            };


            if (key in standardCoatLengthProbabilities) {
                return standardCoatLengthProbabilities[key];
            } else {
                const reverseKey = `${parent2CoatLength} x ${parent1CoatLength}`;
                if (reverseKey in standardCoatLengthProbabilities) {
                    return standardCoatLengthProbabilities[reverseKey];
                } else {
                    return { "Unknown": 1 };
                }
            }
        } else if (parent1Breed === "Draft" && parent2Breed === "Standard") {
            const draftCoatLengthProbabilities = {
                "Silky x Silky": { "Silky": 1 },
                "Silky x Long": { "Silky": 0.5, "Long": 0.5 },
                "Silky x Medium": { "Silky": 0.5, "Long": 0.25, "Medium": 0.25 },
                "Silky x Smooth": { "Silky": 0.25, "Long": 0.25, "Medium": 0.25, "Smooth": 0.25 },
                "Long x Medium": { "Long": 0.5, "Long": 0.25, "Silky": 0.25 },
                "Long x Smooth": { "Silky": 0.5, "Long": 0.5 },
                "Long x Long": { "Long": 1 },
                "Medium x Medium": { "Long": 0.5, "Medium": 0.25, "Smooth": 0.25 },
                "Medium x Smooth": { "Silky": 0.25, "Long": 0.25, "Medium": 0.25, "Smooth": 0.25 },
                "Smooth x Smooth": { "Silky": 0.5, "Long": 0.5 },
            };


            if (key in draftCoatLengthProbabilities) {
                return draftCoatLengthProbabilities[key];
            } else {
                const reverseKey = `${parent2CoatLength} x ${parent1CoatLength}`;
                if (reverseKey in draftCoatLengthProbabilities) {
                    return draftCoatLengthProbabilities[reverseKey];
                } else {
                    return { "Unknown": 1 };
                }
            }
        } else {
            return { "Unknown": 1 };
        }
    }
}


// Function to generate offspring data
function generateOffspring(parent1, parent2) {
    console.log("generateOffspring called with:", parent1, parent2);

    // Map ranks to baby count range
    const rankToBabies = {
        "Novice": [1, 4],
        "Beginner": [1, 4],
        "Intermediate": [1, 4],
        "Adept": [1, 4],
        "Proficient": [1, 4],
        "Advanced": [1, 4],
        "Expert": [2, 6],
        "Elite": [2, 6],
        "Superstar": [2, 6],
        "Infamous": [2, 6],
    };

    // Ensure rank is valid, otherwise default to "Novice"
    const parent1Rank = parent1.rank || "Novice";
    const parent2Rank = parent2.rank || "Novice";

    // Determine baby count range (higher range if either parent has a high rank)
    let [minBabies, maxBabies] = rankToBabies[parent1Rank];
    let [minBabies2, maxBabies2] = rankToBabies[parent2Rank];

    // Use the highest min/max values if parents have different ranks
    minBabies = Math.min(minBabies, minBabies2);
    maxBabies = Math.max(maxBabies, maxBabies2);

    // Roll for number of babies
    const numBabies = Math.floor(Math.random() * (maxBabies - minBabies + 1)) + minBabies;
    console.log(`Number of babies rolled: ${numBabies}`);

    // Create offspring array
    let offspring = [];
    for (let i = 0; i < numBabies; i++) {
        offspring.push(
            new Parent(
                Math.floor((parent1.height + parent2.height) / 2),
                "EE cc rr DD ss", // Placeholder for genotype
                getColorPhenotype("EE cc rr DD ss"), // Placeholder for phenotype
                parent1.traits, // Placeholder (should be mixed)
                parent1.mutations, // Placeholder (should be mixed)
                parent1.coatLength,
                parent1.breed,
                parent1.eyeColor,
                {
                    "Sta": Math.floor((parent1.stats.Sta + parent2.stats.Sta) / 2),
                    "Ac": Math.floor((parent1.stats.Ac + parent2.stats.Ac) / 2),
                    "Sp": Math.floor((parent1.stats.Sp + parent2.stats.Sp) / 2),
                    "Str": Math.floor((parent1.stats.Str + parent2.stats.Str) / 2),
                    "Ag": Math.floor((parent1.stats.Ag + parent2.stats.Ag) / 2),
                    "Pa": Math.floor((parent1.stats.Pa + parent2.stats.Pa) / 2),
                }
            )
        );
    }

    return offspring;
}
