import { applyMiddleware, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import { autoRehydrate, persistStore } from 'redux-persist';

import { appReducer } from './reducers';

export const loggerMiddleware = createLogger();

const store = createStore(
	appReducer,
	compose(
		applyMiddleware(
			thunkMiddleware,
			loggerMiddleware
		),
		autoRehydrate()
	)
);

persistStore(store);

export { store };