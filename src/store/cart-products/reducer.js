const INITIAL_STATE = {
    data: [],
};

export default function addProducts(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'ADD_PRODUCTS':
            return { ...state, data: [...state.data, action.product]};
        default:
            return state;
    }
}
