// store data as .ts file and export constant
import data from './data/profiles';

// import app logic
import appLogic from './app/app'; // or import './app/app'; ??
appLogic(data);

// global styles
import './style.css';

// import webcomponents
import './components/kaboom/navBar';
import './components/kaboom/footer';
import './components/kaboom/footerShebang';
import './components/filterBtn';
import './components/profile';
import './components/profiles';
import './components/filterBtn';
import './components/filters';

const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `
<kbsb-filters></kbsb-filters>
<kbsb-profiles></kbsb-profiles>
`;
