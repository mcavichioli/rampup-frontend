import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './cart-products/reducer';

let store;
// eslint-disable-next-line no-undef
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    store = createStore(rootReducer, composeWithDevTools());
} else {
    store = createStore(rootReducer);
}

export default store;