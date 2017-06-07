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
	<Provider store={store}>
		<HashRouter>
			<App />
		</HashRouter>
	</Provider>
	, document.getElementById('root'));
registerServiceWorker();

// Store State Model {
// 	places: [
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