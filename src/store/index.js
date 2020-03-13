import { createStore } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';

const INITIAL_STATE = {
    data: [],
};

function products(state = INITIAL_STATE, action) {
    let teste = {}
    switch(action.type) {
        case 'ADD_PRODUCTS':
            teste = { ...state, data: [...state.data, action.product]};
            console.log(teste);
            return teste;
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