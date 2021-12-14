// use a template instead of multiple createElement
const filterTemplate = document.createElement('template');

filterTemplate.innerHTML = `
<style>
	.filterWrapper {
		max-width: -var(--max-width, 800px);
		margin: 20px auto 40px auto;
		text-align: center;
	}
</style>

<div class="filterWrapper">
	<kbsb-filter-button filter="Javascript" active></kbsb-filter-button>
    <kbsb-filter-button filter="Golang"></kbsb-filter-button>
    <kbsb-filter-button filter="Rust"></kbsb-filter-button>
    <kbsb-filter-button filter="Java"></kbsb-filter-button>
    <kbsb-filter-button filter="Typescript" active></kbsb-filter-button>
    <kbsb-filter-button></kbsb-filter-button>
    <kbsb-filter-button></kbsb-filter-button>
    <kbsb-filter-button></kbsb-filter-button>
    <kbsb-filter-button></kbsb-filter-button>
</div>
`;

// create a class for the element
class Filters extends HTMLElement {
	constructor() {
		// always call super first in constructor
		super();

		// create a shadow root
		const shadow = this.attachShadow({ mode: 'open' });
		shadow.appendChild(filterTemplate.content.cloneNode(true));
	}
}

// Define the new element
customElements.define('kbsb-filters', Filters);
