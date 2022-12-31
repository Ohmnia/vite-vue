import '../style.css';
import javascriptLogo from '../src/javascript.svg';
import viteLogo from '../src/vite.svg';

import { setupCounter } from './counter.js';

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="vLogo" alt="Vite logo" id="viteLogo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="jLogo" alt="JavaScript logo" id="javascriptLogo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector('#counter'));
const javascriptLogoImg = document.querySelector('#javascriptLogo')
const viteLogoImg = document.querySelector('#viteLogo')
const appDiv = document.querySelector('#app')

const startUp = setTimeout(async () => {
  javascriptLogoImg.setAttribute('class', 'jMove')
  viteLogoImg.setAttribute('class', 'vMove')
  const endUp = setTimeout(async () =>{
    appDiv.setAttribute('class','moveUp')
    const endIt = setTimeout(async ()=>{
      javascriptLogoImg.setAttribute('class', 'jEnd')
      viteLogoImg.setAttribute('class', 'vEnd')
    },1000);
  },500);
}, 2000); 
