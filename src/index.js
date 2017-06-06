import './styles/index.css';
import './styles/normalize.css';

import { HashRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';

import { fetchLocationError, fetchLocationSuccess } from './actions';
import { store } from './store';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

let loc = {
    "lat": 51.0,
    "lng": -0.1
};
let loc2 = {
    "lat": 15.0,
    "lng": -0.8
};

ReactDOM.render(
	<HashRouter>
		<App />
	</HashRouter>
	, document.getElementById('root'));
registerServiceWorker();

store.dispatch(fetchLocationSuccess(loc));
store.dispatch(fetchLocationSuccess(loc2));
store.dispatch(fetchLocationError('an error occurred'));

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