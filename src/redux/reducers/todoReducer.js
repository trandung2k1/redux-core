const initialState = {
    todos: [],
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO': {
            console.log(action.payload);
            return {
                ...state,
                todos: [...state.todos, action.payload]
            };
        }
        case 'GET_TODOS': {
            // console.log(action.payload);
            return {
                ...state,
                todos: [...state.todos, ...action.payload]
            };
        }
        default:
            return state;
    }
};

export default todoReducer;
