const INITIAL_STATE = {
    data: [],
};

export default function addProducts(state = INITIAL_STATE, action) {
    let index = 0;
    switch(action.type) {
        case 'ADD_PRODUCTS':
            return { ...state, data: [...state.data, action.product]};
        case 'REMOVE_PRODUCTS':
            index = state.data.indexOf(action.product);
            state.data.splice(index, 1);
            return { ...state, data: [...state.data]};
        default:
            return state;
    }
}
