const url: string = 'data.json';

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
	const res = await fetch(url);
	return await res.json();
}

// call fetchData and handle the promise
// chain two .then() methods to get the json data
fetchData(url)
	.then((e) => e)
	.then((e) => {
		//! do you have to call a function to get the data out of the promise?
		createDev(e.developers);
	});

let devs: Developer[] = [];

function createDev(data: Dev[]) {
	data.forEach((e) => {
		devs.push(new Developer(e));
	});
}

console.log('Devs: ', devs);
