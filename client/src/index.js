import './styles/index.css';
import './styles/normalize.css';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store';
import App from './components/App';
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