import axios from 'axios';
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
