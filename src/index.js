import './styles/index.css';
import './styles/normalize.css';

import { HashRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<HashRouter>
		<App />
	</HashRouter>
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
// 	user: [
// 		location:,
// 		tastes:
// 	]
// }