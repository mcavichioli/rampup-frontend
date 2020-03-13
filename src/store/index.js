import { createStore } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';

const INITIAL_STATE = {
    data: [],
};

function products(state = INITIAL_STATE, action) {
    let newData = {};
    switch(action.type) {
        case 'ADD_PRODUCTS':
            newData = { ...state, data: [...state.data, action.product]};
            // window.localStorage.setItem('cart-list', JSON.stringify(newData));
            return newData;
        default:
            return state;
    }
}

let store;

// eslint-disable-next-line no-undef
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    store = createStore(products, composeWithDevTools());
} else {
    store = createStore(products);
}

export default store;