// Create a class for the element
class Message extends HTMLElement {
	constructor() {
		// Always call super first in constructor
		super();

		// Create a shadow root
		const shadow = this.attachShadow({ mode: 'open' });

		// Create wrapper
		const wrapper = document.createElement('div');
		wrapper.setAttribute('class', 'wrapper');

		const info = document.createElement('span');
		info.setAttribute('class', 'filterName');

		// Take attribute content and put it inside the info span
		const text = this.getAttribute('data-text');
		info.textContent = text;

		wrapper.appendChild(info);

		// Create some CSS to apply to the shadow dom
		const style = document.createElement('style');
		console.log('Style connected:', style.isConnected);

		style.textContent = `
        .wrapper {
			position: relative;
        }

        .info {
			position: relative;
        }
		`;

		// Attach the created elements to the shadow dom
		shadow.appendChild(style);
		shadow.appendChild(wrapper);
		wrapper.appendChild(info);
		console.log('Style connected:', style.isConnected);
	}
}

// Define the new element
customElements.define('kbsb-message', Message);
