import axios from 'axios';
const url = `https://jsonplaceholder.typicode.com/todos`;
export const getTodos = () => axios.get(url + `?_limit=5`);
export const getTodo = (id) => axios.get(url + `/${id}`);
