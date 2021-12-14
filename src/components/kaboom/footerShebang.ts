// Create a class for the element
class FooterShebang extends HTMLElement {
	constructor() {
		// Always call super first in constructor
		super();

		// Create a shadow root
		const shadow = this.attachShadow({ mode: 'open' });

		// Create wrapper
		const img = document.createElement('img');
		img.setAttribute('class', 'logo-shebang');
		img.setAttribute('src', 'https://www.kaboomshebang.com/logos/shebang_3d_for_web.svg');
		img.setAttribute('alt', 'The Kaboom Shebang');

		// Create some CSS to apply to the shadow dom
		const style = document.createElement('style');

		style.textContent = `
		.logo-shebang {
			position: fixed;
			display: block;
			max-width: 3.5rem;
			right: 0;
			bottom: 1rem;
		}
		`;

		// Attach the created elements to the shadow dom
		shadow.appendChild(style);
		shadow.appendChild(img);
	}
}

// Define the new element
customElements.define('kbsb-footer-shebang', FooterShebang);
