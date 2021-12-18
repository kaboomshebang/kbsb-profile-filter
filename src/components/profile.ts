import profileSvg from '../images/profile.svg';

// use a template instead of multiple createElement
const template = document.createElement('template');
template.innerHTML = `
<style>
	.profileWrapper {
		display: inline-block;
		text-align: center;
		padding: 10px 10px;
		opacity: 0.2;
	}
	.backDrop {
		padding: 20px 20px;
		background-color: #eee;
	}
	.profileImg {
		width: 100px;
	}
	.job {
		padding: 10px 0 0 0;
	}
	.name {
		margin: 20px 0 0 0;
		padding: 5px 10px;
		border-radius: 10px;
		background-color: white;
	}
	:host([active]) .profileWrapper {
		opacity: 1;
	}
</style>

<div class="profileWrapper">
    <div class="backDrop">
        <img class="profileImg" src="${profileSvg}" alt="Profile">
        <div class="name">Fred</div>
    </div>
	<div class="job">Unknown</div>
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

		// set job attribute
		if (typeof this.getAttribute('job') === 'string') {
			//! use exclamation mark to tell TS that this attribute is definitely set
			shadow.querySelector('.job')!.innerHTML = this.getAttribute('job')!;
		} else {
			console.log('Job attr not set');
		}

		// set name attribute
		if (typeof this.getAttribute('name') === 'string') {
			shadow.querySelector('.name')!.innerHTML = this.getAttribute('name')!;
		} else {
			console.log('Name attr not set');
		}
	}
}

// Define the new element
customElements.define('kbsb-profile', Profile);
