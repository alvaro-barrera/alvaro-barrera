// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './global.css';

import Badge from './components/Badge';
import BadgeNew from './pages/BadgeNew';
import Badges from './pages/Badges';
import App from './components/App'

const firstName =  'Álvaro';
const lastName =  'Barrera';


const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
// ReactDOM.render(<Badge 
//     firstName={firstName} 
//     lastName={lastName} 
//     ></Badge>, container);
// ReactDOM.render(<BadgeNew></BadgeNew>,container);
// ReactDOM.render(<Badges></Badges>,container);
ReactDOM.render(<App></App>,container);

