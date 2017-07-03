import './styles/index.css';
import './styles/normalize.css';

import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';

import { store } from './store';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<h1>I am the login</h1>
	, document.getElementById('root'));
registerServiceWorker();

// Store State Model {
// 	businesses: [
// 		{
// 			name:,
// 			price:,
// 			rating:,
// 			distance:
// 		},
// 		{
// 			name:,
// 			price:,
// 			rating:,
// 			distance:
// 		}
// 	],
// 	user: {
// 		location:,
// 		foodTypes: []
// 	},
	// fetching:
// }