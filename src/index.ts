import data from './data.json';

// location of prof data
const url: string = 'data.json';

// a map of all the unique skills
// value represents the filter state // default false (inactive)
const skills = new Map<string, boolean>();

type skill = {
	id: number;
	name: string;
	active: boolean;
};

class Filter {
	skills: skill[];
	active: boolean;

	constructor(skills: skill[], state: boolean) {
		this.skills = skills;
		this.active = state;
	}
}

// define a Dev type according to the expected json structure
type Dev = {
	userId: number;
	name: string;
	skills: string[];
	color: string;
	roles: string;
};

class Developer {
	person: Dev;
	visible: boolean;

	constructor(d: Dev) {
		this.person = d;
		this.visible = true;
	}
}

// create an async function that fetches json
// fetchData() returns a promise
async function fetchData(url: string) {
	// use try catch instead of .catch()
	try {
		const res = await fetch(url);
		const data = await res.json();
		//// return await res.json();
		// you can return the function and use .then() outside the function
		// or instead just continue with the program logic

		createDevs(await data.developers);
		createFilter(await data.developers);
	} catch (err) {
		console.log('Error:', err);
	}
}

// start execution
fetchData(url);

const fltr: Filter = { skills: [], active: false };
const devs: Developer[] = [];

async function createDevs(jsonData: Dev[]) {
	jsonData.forEach((e) => {
		devs.push(new Developer(e));
	});
}

async function createFilter(jsonData: Dev[]) {
	jsonData.forEach((e: Dev) => {
		e.skills.forEach((sk: string) => {
			skills.set(sk, false);
		});
	});
	console.log('fdfdsfdsfdfd', skills);
}

async function addFilters(skills: Map<string, boolean>) {
	let skls: skill[] = [];
	let id: number = 0;
	console.log('T1', skills);
	// convert map of unique skills to skill[]
	for (let test of skills) {
		console.log('TETS', test);
	}

	let test = skills.entries();
	console.log('T3', test);
	for (let [skl, act] of skills.entries()) {
		console.log('TTEST');
		console.log('T2', skl, act);
		fltr.skills.push({ id: id, name: skl, active: act });
		id++;
	}
}

addFilters(skills);

console.log(fltr);
console.log('Devs: ', devs);
console.log('SKILLS', skills);
