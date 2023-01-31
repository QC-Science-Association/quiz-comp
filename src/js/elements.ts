import { reactive } from "vue";

export enum ElType {
	am,
	alm,
	tm,
	bm,
	sm,
	nm,
	ha,
	ng,
	lan,
	act,
}

const am = ElType.am,
	alm = ElType.alm,
	tm = ElType.tm,
	bm = ElType.bm,
	sm = ElType.sm,
	nm = ElType.nm,
	ha = ElType.ha,
	ng = ElType.ng,
	lan = ElType.lan,
	act = ElType.act;

export interface ElData {
	name: string,
	colour: string,
	about: string | null
}

export const ElTypes: Record<ElType, ElData> = {
	[am]: {
		name: "Alkali Metals",
		colour: "#754344",
		about: "Chemistry",
	},
	[alm]: {
		name: "Alkaline Earths",
		colour: "#8d403a",
		about: "Chemistry",
	},
	[tm]: {
		name: "Transition Metals",
		colour: "#636363",
		about: null,
	},
	[bm]: {
		name: "Basic Metals",
		colour: "#717751",
		about: "Miscellaneous",
	},
	[sm]: {
		name: "Semi-metals",
		colour: "#186251",
		about: "Physics",
	},
	[nm]: {
		name: "Non-metals",
		colour: "#10626d",
		about: "Biology",
	},
	[ha]: {
		name: "Halogens",
		colour: "#1e4f7a",
		about: "Biology",
	},
	[ng]: {
		name: "Noble Gases",
		colour: "#25366c",
		about: "History",
	},
	[lan]: {
		name: "Lanthanides",
		colour: "#535353",
		about: null,
	},
	[act]: {
		name: "Actinides",
		colour: "#434343",
		about: null,
	},
};

function newEl(symbol: string, name: string, relativeMass: number, type: ElType) {
	return {
		symbol,
		name,
		relativeMass,
		type,
	};
}

export const selectedElements = reactive(Array<number>(118).fill(0));
export const Elements = [
	newEl("H", "Hydrogen", 1.001, nm),
	newEl("He", "Helium", 4.003, ng),

	newEl("Li", "Lithium", 6.941, am),
	newEl("Be", "Beryllium", 9.012, alm),
	newEl("B", "Boron", 10.811, sm),
	newEl("C", "Carbon", 12.011, nm),
	newEl("N", "Nitrogen", 14.001, nm),
	newEl("O", "Oxygen", 15.999, nm),
	newEl("F", "Fluorine", 18.998, ha),
	newEl("Ne", "Neon", 20.18, ng),

	newEl("Na", "Sodium", 22.99, am),
	newEl("Mg", "Magnesium", 24.305, alm),
	newEl("Al", "Aluminium", 26.9815, bm),
	newEl("Si", "Silicon", 28.0855, sm),
	newEl("P", "Phosphorus", 30.9738, nm),
	newEl("S", "Sulphur", 32.065, nm),
	newEl("Cl", "Chlorine", 35.453, ha),
	newEl("Ar", "Argon", 39.948, ng),

	newEl("K", "Potassium", 39.098, am),
	newEl("Ca", "Calcium", 40.078, alm),

	newEl("Sc", "Scandium", 44.956, tm),
	newEl("Ti", "Titanium", 47.867, tm),
	newEl("V", "Vanadium", 50.942, tm),
	newEl("Cr", "Chromium", 51.996, tm),
	newEl("Mn", "Manganese", 54.938, tm),
	newEl("Fe", "Iron", 55.845, tm),
	newEl("Co", "Cobalt", 58.9332, tm),
	newEl("Ni", "Nickel", 58.693, tm),
	newEl("Cu", "Copper", 63.546, tm),
	newEl("Zn", "Zinc", 65.38, tm),

	newEl("Ga", "Gallium", 69.723, bm),
	newEl("Ge", "Germanium", 72.64, sm),
	newEl("As", "Arsenic", 74.922, sm),
	newEl("Se", "Selenium", 78.96, nm),
	newEl("Br", "Bromine", 79.904, ha),
	newEl("Kr", "Krypton", 83.798, ng),

	newEl("Rb", "Rubidium", 85.468, am),
	newEl("Sr", "Strontium", 87.62, alm),

	newEl("Y", "Yttrium", 88.906, tm),
	newEl("Zr", "Zirconium", 91.224, tm),
	newEl("Nb", "Niobium", 92.906, tm),
	newEl("Mo", "Molybdenum", 95.96, tm),
	newEl("Tc", "Technetium", 98, tm),
	newEl("Ru", "Ruthenium", 101.07, tm),
	newEl("Rh", "Rhodium", 102.906, tm),
	newEl("Pd", "Palladium", 106.42, tm),
	newEl("Ag", "Silver", 107.868, tm),
	newEl("Cd", "Cadmium", 112.411, tm),

	newEl("In", "Indium", 114.818, bm),
	newEl("Sn", "Tin", 118.71, bm),
	newEl("Sb", "Antimony", 121.78, sm),
	newEl("Te", "Tellurium", 127.6, sm),
	newEl("I", "Iodine", 126.904, ha),
	newEl("Xe", "Xenon", 131.293, ng),

	newEl("Cs", "Caesium", 132.905, am),
	newEl("Ba", "Barium", 137.327, alm),

	newEl("La", "Lanthanum", 138.905, lan),
	newEl("Ce", "Cerium", 140.116, lan),
	newEl("Pr", "Praseodymium", 140.908, lan),
	newEl("Nd", "Neodyium", 144.242, lan),
	newEl("Pm", "Promethium", 145, lan),
	newEl("Sm", "Samarium", 150.36, lan),
	newEl("Eu", "Europium", 151.964, lan),
	newEl("Gd", "Gadolinium", 157.25, lan),
	newEl("Tb", "Terbium", 158.925, lan),
	newEl("Dy", "Dysprosium", 162.5, lan),
	newEl("Ho", "Holmium", 164.93, lan),
	newEl("Er", "Erbium", 167.359, lan),
	newEl("Tm", "Thulium", 168.934, lan),
	newEl("Yb", "Ytterbium", 173.054, lan),
	newEl("Lu", "Lutetium", 174.967, lan),

	newEl("Hf", "Hafnium", 178.49, tm),
	newEl("Ta", "Tantalum", 180.948, tm),
	newEl("W", "Tungsten", 183.84, tm),
	newEl("Re", "Rhenium", 186.207, tm),
	newEl("Os", "Osmium", 190.23, tm),
	newEl("Ir", "Iridium", 192.217, tm),
	newEl("Pt", "Platnium", 195.084, tm),
	newEl("Au", "Gold", 196.967, tm),
	newEl("Hg", "Mercury", 200.59, tm),

	newEl("Tl", "Thallium", 204.383, bm),
	newEl("Pb", "Lead", 207.2, bm),
	newEl("Bi", "Bismuth", 208.98, bm),
	newEl("Po", "Polonium", 209, sm),
	newEl("At", "Astatine", 210, ha),
	newEl("Rn", "Radon", 222, ng),

	newEl("Fr", "Francium", 223, am),
	newEl("Ra", "Radium", 226, alm),

	newEl("Ac", "Actinium", 227, act),
	newEl("Th", "Thorium", 232.038, act),
	newEl("Pa", "Protactinium", 231.036, act),
	newEl("U", "Uranium", 238.029, act),
	newEl("Np", "Neptunium", 237, act),
	newEl("Pu", "Plutonium", 244, act),
	newEl("Am", "Americium", 243, act),
	newEl("Cm", "Curium", 247, act),
	newEl("Bk", "Berkelium", 247, act),
	newEl("Cf", "Californium", 251, act),
	newEl("Es", "Einsteinium", 252, act),
	newEl("Fm", "Fermium", 257, act),
	newEl("Md", "Mandelevium", 258, act),
	newEl("No", "Nobelium", 259, act),
	newEl("Lr", "Lawrencium", 266, act),

	newEl("Rf", "Rutherfordium", 267, tm),
	newEl("Db", "Dubnium", 268, tm),
	newEl("Sg", "Seaborgium", 269, tm),
	newEl("Bh", "Bohrium", 270, tm),
	newEl("Hs", "Hassium", 269, tm),
	newEl("Mt", "Meitnerium", 278, tm),
	newEl("Ds", "Darmstadtium", 281, tm),
	newEl("Rg", "Roentgenium", 281, tm),
	newEl("Cn", "Copernicium", 285, tm),

	newEl("Nh", "Nihonium", 286, bm),
	newEl("Fl", "Flerovium", 289, bm),
	newEl("Mc", "Moscovium", 289, bm),
	newEl("Lv", "Livermorium", 293, bm),
	newEl("Ts", "Tenessine", 294, ha),
	newEl("Og", "Oganesson", 294, ng),
];