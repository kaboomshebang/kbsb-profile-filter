const appLogic = (data: any) => {
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

	console.log(data.developers);

	const fltr: Filter = { skills: [], active: false };
	const devs: Developer[] = [];

	createDevs(data.developers);
	createFilter(data.developers);

	function createDevs(d: Dev[]) {
		d.forEach((e) => {
			devs.push(new Developer(e));
		});
	}

	// create the map with all the filters
	function createFilter(d: Dev[]) {
		d.forEach((e: Dev) => {
			e.skills.forEach((sk: string) => {
				skills.set(sk, false);
			});
		});
	}

	// add all the filters to the Filter object
	function addFilters(skills: Map<string, boolean>) {
		let id: number = 0;
		// convert map of unique skills to skill[]
		for (let [skl, act] of skills.entries()) {
			fltr.skills.push({ id: id, name: skl, active: act });
			id++;
		}
	}

	addFilters(skills);

	console.log('Filter obeject', fltr);
	console.log('Devs: ', devs);
	console.log('Skills', skills);
};

export default appLogic;
