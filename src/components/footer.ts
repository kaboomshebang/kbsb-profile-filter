import footerCss from './footer.css';

// Create a class for the element
class Footer extends HTMLElement {
	constructor() {
		// Always call super first in constructor
		super();

		// Create a shadow root
		const shadow = this.attachShadow({ mode: 'open' });

		// Create wrapper
		const footer = document.createElement('footer');
		footer.setAttribute('class', 'footer footer-text');

		const footerContainer = document.createElement('div');
		footerContainer.setAttribute('class', 'footer-container');

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

			footerContainer.appendChild(footerLink);
		});

		// Take attribute content and put it inside the info span
		// const text = this.getAttribute('data-text');
		// info.textContent = text;

		footer.appendChild(footerContainer);

		// Create some CSS to apply to the shadow dom
		const style = document.createElement('style');
		console.log('Style connected:', style.isConnected);

		style.textContent = footerCss;

		// Attach the created elements to the shadow dom
		shadow.appendChild(style);
		shadow.appendChild(footer);
		console.log('Style connected:', style.isConnected);
	}
}

// Define the new element
customElements.define('kbsb-footer', Footer);

// <img class="logo-shebang" src="https://www.kaboomshebang.com/logos/shebang_3d_for_web.svg" alt="The Kaboom Shebang">
