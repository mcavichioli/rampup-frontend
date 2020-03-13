import { createStore } from 'redux';

const INITIAL_STATE = {
    data: [],
};

function products(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'ADD_PRODUCTS':
            return { ...state, data: [...state.data, action]};
        default:
            return state;
    }
}

const store = createStore(products);

export default store;