import axios from 'axios';
// Redux core
export const addTodo = (data) => (dispatch) => {
    dispatch({
        type: 'ADD_TODO',
        payload: data,
    });
};

// export function getTodos() {
//     return async function (dispatch) {
//         const res = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=3');
//         dispatch({
//             type: 'GET_TODOS',
//             payload: res.data,
//         });
//     };
// }

export const get = (data) => {
    return {
        type: 'GET_TODOS',
        payload: data,
    };
};

//Use redux saga middleware
export const getTodosStart = () => {
    return {
        type: 'GET_TODOS_START',
    };
};
export const getTodosSucess = (payload) => {
    // console.log(payload);
    return {
        type: 'GET_TODOS_SUCCESS',
        payload,
    };
};
export const getTodosFailure = () => {
    return {
        type: 'GET_TODOS_FAILURE',
    };
};

export const getTodoStart = () => {
    return {
        type: 'GET_TODO_START',
    };
};
export const getTodoSucess = (payload) => {
    return {
        type: 'GET_TODO_SUCCESS',
        payload,
    };
};
export const getTodoFailure = () => {
    return {
        type: 'GET_TODO_FAILURE',
    };
};
