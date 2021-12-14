const footerCss = `
.footer {
    position: relative;
    width: 100%;
}

.footer-container {
    max-width: 1200px;
    margin: 0 auto;
}

.footer div {
    padding: 0.3rem 0;
}

.footer div div a {
    display: block;
    width: 230px;
	color: black;
}

.footer-text {
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
    }
}
`;

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

		footer.appendChild(footerContainer);

		// Create some CSS to apply to the shadow dom
		const style = document.createElement('style');

		style.textContent = footerCss;

		// Attach the created elements to the shadow dom
		shadow.appendChild(style);
		shadow.appendChild(footer);
	}
}

// Define the new element
customElements.define('kbsb-footer', Footer);
