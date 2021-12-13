# Readme

Contains all the applications components.

Instead of including the styling in the component itself you can also use an style import in the component.
- Upside: you get syntax highlighting
- Downside: hot-update or hot-reload doesn't work for these styles.

```css
/* optional: put this in footer.css */
.footer {
    position: relative;
    width: 100%;
}

.footer-container {
    max-width: 1200px;
    margin: 0 auto;
}
```

```ts
// and import in the footer.ts component
import footerCss from './footer.css';
// console.log(footerCss);
```

## Read data from the DOM tag

```ts
// take attribute content and put it inside the info span
const text = this.getAttribute('data-text');
const div = document.createElement('div');
div.textContent = text;
```
