import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initalState = {
    counter: 0,
    name: 'Lali'
};



//REDUCER
export const reducer = (state = initalState, action) =>{
    switch(action.type){
        case 'ADD_COUNTER':
        return Object.assign({}, state, {
            counter: state.counter + 1
        })
        case 'REMOVE_COUNTER':
        return Object.assign({}, state, {
            counter: state.counter - 1
        })
        case 'RESET_COUNTER':
        return Object.assign({}, state, {
            counter: 0
        })
        default:
            return state;
    }
}



//ACTIONS
export const addCounter =() => dispatch => {
    return dispatch({
        type: "ADD_COUNTER"
    });
};

export const removeCounter = () => dispatch => {
    return dispatch({
        type: 'REMOVE_COUNTER'
    })
}

export const resetCounter = () => dispatch => {
    return dispatch({
        type: 'RESET_COUNTER'
    })
}







export function initializeStore(){
    return createStore(reducer, initalState, applyMiddleware(thunk))
}

