const footerTemplate = document.createElement('template');

const footerLinks = [
	{
		label: 'Attribution:',
		url: 'https://thenounproject.com/icon/person-856455/',
		content: 'Person by Knut M. Synstad from NounProject.com',
	},
	{
		label: 'Webfonts by:',
		url: 'https://fontcdn.toolforge.org/',
		content: 'FontCDN',
	},
	{
		label: 'Created by:',
		url: 'https://www.fredsnyder.net/',
		content: 'Fred Snyder',
	},
];

footerTemplate.innerHTML = `
<style>
	.footer {
		position: relative;
		width: 100%;
	}

	.footer-container {
		max-width: var(--max-width, 1200px);
		margin: 0 auto;
	}

	.button {
		all: unset;
		display: none;
	}

	.footer div {
		padding: 0.3rem 0;
	}

	.footer div div a {
		display: block;
		width: 230px;
		color: black;
	}

	.text {
		font-size: 0.75rem;
		color: grey;
	}

	@media only screen and (min-width: 400px) {
		.footer div div a {
			width: 350px;
		}
	}

	@media only screen and (min-height: 700px) {
		.footer {
			position: fixed;
			bottom: 0;
			left: 0;
			padding: 0.5rem;
			background-color: rgb(245, 245, 245);
			transition: bottom 1s;
		}

		.footer[down] {
			bottom: -400px;
		}

		.button {
			display: block;
			position: fixed;
			bottom: 150px;
			left: calc(50% - 35px);
			width: 50px;
			padding: 10px;
			border-radius: 10px;
			transform: rotate(180deg);
			cursor: pointer;
			transition: transform 100ms, bottom 1s;
			background-color: rgb(245, 245, 245);
		}

		.footer[down] .button {
			position: fixed;
			top: unset;
			bottom: 5px;
			transform: rotate(0deg);
		}
	}
</style>
<footer class="footer text">
	<img class="button" src="/src/images/arrow.svg" up/>
	<div class="footer-container"></div>
</footer>
`;

// Create a class for the element
class Footer extends HTMLElement {
	constructor() {
		// Always call super first in constructor
		super();

		// Create a shadow root
		const shadow = this.attachShadow({ mode: 'open' });
		shadow.appendChild(footerTemplate.content.cloneNode(true));

		const footerContainer = this.shadowRoot!.querySelector('.footer-container');

		footerLinks.forEach((e) => {
			const footerLink = document.createElement('div');

			const linkLabel = document.createElement('span');
			linkLabel.innerText = e.label;

			const link = document.createElement('a');
			link.setAttribute('href', e.url);
			link.setAttribute('target', '_blank');
			link.setAttribute('rel', 'noopener noreferrer');
			link.innerText = e.content;

			footerLink.appendChild(linkLabel);
			footerLink.appendChild(link);

			footerContainer!.appendChild(footerLink);
		});
	}

	toggleFooter() {
		this.shadowRoot!.querySelector('.footer')!.toggleAttribute('down');
	}

	connectedCallback() {
		setTimeout(() => this.toggleFooter(), 1000);
		const footerBtn = this.shadowRoot!.querySelector('.button');
		footerBtn!.addEventListener('click', () => this.toggleFooter());
	}
}

// Define the new element
customElements.define('kbsb-footer', Footer);
