import './styles/css/index.css';
import './styles/css/normalize.css';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import configureStore from './store';
import registerServiceWorker from './registerServiceWorker';

async function init() {
	const store = await configureStore();
	ReactDOM.render(
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
		, document.getElementById('root'));
	registerServiceWorker();
}

init();

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