// create a class for the element
class Navigation extends HTMLElement {
	constructor() {
		// always call super first in constructor
		super();

		// create a shadow root
		const shadow = this.attachShadow({ mode: 'open' });

		// create nav
		const nav = document.createElement('nav');

		// append link
		const link = document.createElement('a');
		const logoUrl = 'https://www.kaboomshebang.com/';
		link.setAttribute('href', logoUrl);
		link.setAttribute('target', '_blank');
		link.setAttribute('rel', 'noopener noreferrer');

		// append image
		const img = document.createElement('img');
		const logoImg = 'https://www.kaboomshebang.com/logos/kaboom_shebang_logo.svg';
		img.setAttribute('src', logoImg);
		img.setAttribute('class', 'logo-kaboom');
		img.setAttribute('alt', 'Kaboom Shebang');

		// append link and image to the nav element
		nav.appendChild(link);
		link.appendChild(img);

		// Create some CSS to apply to the shadow dom
		const style = document.createElement('style');

		style.textContent = `
		nav {
			max-width: 1200px;
			margin: 0 auto;
			padding: 1rem 0 0 0;
		}
		
		.logo-kaboom {
			max-width: 10rem;
		}
		`;

		// attach the styles to the shadow dom
		shadow.appendChild(style);
		// attach the top element to the shadow dom
		shadow.appendChild(nav);
	}
}

// Define the new element
customElements.define('kbsb-navbar', Navigation);
