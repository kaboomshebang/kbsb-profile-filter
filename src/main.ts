// store data as .ts file and export constant
import data from './data/data';

// import app logic
import appLogic from './app/app';
appLogic(data);

// global styles
import './style.css';

// import webcomponents
import './components/filterButton';
import './components/navBar';
import './components/footer';
import './components/footerShebang';
import './components/profile';
import './components/profiles';

const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `
<kbsb-profiles></kbsb-profiles>
`;
