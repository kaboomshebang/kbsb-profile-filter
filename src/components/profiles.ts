// use a template instead of multiple createElement
const template = document.createElement('template');
template.innerHTML = `
<style>
	.profilesWrapper {
		max-width: -var(--max-width, 800px);
		margin: 0 auto;
		text-align: center;
	}
</style>

<div class="profilesWrapper">
	<kbsb-profile name="Fred" job="Designer" active></kbsb-profile>
	<kbsb-profile name="Hans" job="Developer"></kbsb-profile>
	<kbsb-profile name="John" job="Manager"></kbsb-profile>
	<kbsb-profile name="Vic" job="Engineer" active></kbsb-profile>
</div>
`;

// create a class for the element
class Profiles extends HTMLElement {
	constructor() {
		// always call super first in constructor
		super();

		// create a shadow root
		const shadow = this.attachShadow({ mode: 'open' });
		shadow.appendChild(template.content.cloneNode(true));
	}
}

// Define the new element
customElements.define('kbsb-profiles', Profiles);
