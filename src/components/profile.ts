import profileSvg from '../images/profile.svg';

// use a template instead of multiple createElement
const template = document.createElement('template');
template.innerHTML = `
<style>
	.profileWrapper {
		max-width: 300px;
		background-color: #eee;
	}
	.profileImg {
		width: 100px;
	}
</style>

<div class="profileWrapper">
    <div>
        <img class="profileImg" src="${profileSvg}" alt="Profile">
        <div>Fred</div>
    </div>
    <div>
        Developer
    </div>
</div>
`;

// create a class for the element
class Profile extends HTMLElement {
	constructor() {
		// always call super first in constructor
		super();

		// create a shadow root
		const shadow = this.attachShadow({ mode: 'open' });
		shadow.appendChild(template.content.cloneNode(true));
	}
}

// Define the new element
customElements.define('kbsb-profile', Profile);
