import { takeEvery, put, call } from 'redux-saga/effects';
import * as types from '../types/todo';
import * as api from '../apis/todo';
import * as actions from '../actions/todoActions';
function* getTodos() {
    try {
        const response = yield call(api.getTodos);
        yield put(actions.getTodosSucess(response.data));
    } catch (error) {
        console.log(error);
        yield put(actions.getTodosFailure(error.message));
    }
}

function* getTodo(action) {
    try {
        const response = yield call(api.getTodo, action.payload);
        yield put(actions.getTodoSucess(response.data));
    } catch (error) {
        console.log(error);
        yield put(actions.getTodoFailure(error.message));
    }
}
function* todoSaga() {
    yield takeEvery(types.GET_TODOS_START, getTodos);
    yield takeEvery(types.GET_TODO_START, getTodo);
}
export default todoSaga;
