import { applyMiddleware, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import { autoRehydrate, persistStore, storages } from 'redux-persist';

import { appReducer } from './reducers';

export const loggerMiddleware = createLogger();

export default function configureStore() {
	return new Promise((resolve, reject) => {
		try {
			const store = createStore(
				appReducer,
				undefined,
				compose(
					applyMiddleware(
						thunkMiddleware,
						loggerMiddleware
					),
					autoRehydrate()
				)
			);

			persistStore(
				store,
				{ storage: storages.localStorage },
				() => resolve(store)
			);
		} catch (e) {
			reject(e);
		}
	});
}

// persistStore(store).purge();