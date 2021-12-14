const filterBtnTemplate = document.createElement('template');

filterBtnTemplate.innerHTML = `
<style>
	.filter {
		all: unset;
		padding: 10px;
		margin: 10px 5px;
		min-width: 70px;
		background-color: lightgrey;
		cursor: pointer;
		transition: background 200ms;

	}
	.filter:active {
		background-color: black !important;
		color: white;
	}
	:host([active]) .filter {
		background-color: lightslategrey;
		color: white;
	}
</style>
<button class="filter">Empty</button>
`;

// Create a class for the element
class FilterBtn extends HTMLElement {
	constructor() {
		// Always call super first in constructor
		super();

		// Create a shadow root
		const shadow = this.attachShadow({ mode: 'open' });
		shadow.appendChild(filterBtnTemplate.content.cloneNode(true));

		// Take attribute content and put it inside the info span
		if (typeof this.getAttribute('filter') === 'string') {
			shadow.querySelector('.filter')!.textContent = this.getAttribute('filter');
		}
	}
}

// Define the new element
customElements.define('kbsb-filter-button', FilterBtn);
