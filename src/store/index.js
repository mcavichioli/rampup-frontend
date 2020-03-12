import { createStore } from 'redux';

function courses(state = [], action) {
    return state;
}

const store = createStore(courses);

export default store;