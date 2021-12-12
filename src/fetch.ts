declare module 'fetch' {
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
		} catch (err) {
			console.log('Error:', err);
		}
	}

	export default fetchData;
	// alternative
	// export = fetchData;
}
