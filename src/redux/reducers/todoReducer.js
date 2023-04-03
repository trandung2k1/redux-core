import * as types from '../types/todo';
const initialState = {
    todos: [],
    todo: {},
    loading: false,
    error: false,
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO': {
            // console.log(action.payload);
            return {
                ...state,
                todos: [...state.todos, action.payload],
            };
        }
        case 'GET_TODOS': {
            // console.log(action.payload);
            return {
                ...state,
                todos: [...state.todos, ...action.payload],
            };
        }
        case types.GET_TODOS_START:
            return {
                ...state,
                loading: true,
            };
        case types.GET_TODOS_SUCCESS:
            return {
                ...state,
                loading: false,
                todos: action.payload,
            };
        case types.GET_TODOS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case types.GET_TODO_START:
            return {
                ...state,
                loading: true,
            };
        case types.GET_TODO_SUCCESS:
            return {
                ...state,
                loading: false,
                todo: action.payload,
            };
        case types.GET_TODO_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default todoReducer;
