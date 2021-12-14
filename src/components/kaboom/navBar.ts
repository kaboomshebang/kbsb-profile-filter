// use a template instead of multiple createElement
const navTemplate = document.createElement('template');

navTemplate.innerHTML = `
<style>
	nav {
		max-width: 1200px;
		margin: 0 auto;
		padding: 1rem 0 0 0;
	}

	::slotted(img) {
		max-width: 10rem;
	}
</style>

<nav>
	<a href="https://www.kaboomshebang.com/" target="_blank" rel="noopener noreferrer">
		<slot name="logo" />
	</a>
</nav>
`;

// create a class for the element
class Navigation extends HTMLElement {
	constructor() {
		// always call super first in constructor
		super();

		// create a shadow root
		const shadow = this.attachShadow({ mode: 'open' });
		shadow.append(navTemplate.content.cloneNode(true));
	}
}

// Define the new element
customElements.define('kbsb-navbar', Navigation);
