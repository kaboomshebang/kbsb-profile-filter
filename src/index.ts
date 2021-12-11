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
	// use try catch instead of .catch()
	try {
		const res = await fetch(url);
		const data = await res.json();
		//// return await res.json();
		// you can return the function and use .then()
		// or instead just continue with the program logic

		createDev(data.developers);
	} catch (err) {
		console.log('Error:', err);
	}
}

// call fetchData and handle the promise
// chain two .then() methods to get the json data
fetchData(url);

let devs: Developer[] = [];

function createDev(data: Dev[]) {
	data.forEach((e) => {
		devs.push(new Developer(e));
	});
}

console.log('Devs: ', devs);
