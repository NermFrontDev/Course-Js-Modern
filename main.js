import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { RickyMortyApp } from './src/ricky-morty/ricky-morty-app'
import imgApi from "./public/api-logo.svg";

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${imgApi}" class="logo api" alt="Api logo" />
    </a>
    <h1 id="app-title">Hello Vite!</h1>
    <div class="card">

    </div>
  </div>
`;

const element = document.querySelector('.card');

RickyMortyApp(element);