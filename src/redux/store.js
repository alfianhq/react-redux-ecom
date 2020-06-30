import {createStore, applyMiddleware} from 'redux';
import {persistStore} from 'redux-persist';
import logger from 'redux-logger';

// karena sudah di export default maka namanya bisa apa saja
import rootReducer from './root-reducer';

// middleware bisa banyak, karena baru satu loger saja
const middlewares = [logger];

// create store => from beberapa reducer and beberapa midleware
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

export default {store, persistor};
