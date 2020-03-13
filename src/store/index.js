import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './cart-products/reducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'cart-products',
    storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer)

let store;
// eslint-disable-next-line no-undef
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    store = createStore(persistedReducer, composeWithDevTools());
} else {
    store = createStore(persistedReducer);
}

const persistor = persistStore(store);

export {store, persistor};