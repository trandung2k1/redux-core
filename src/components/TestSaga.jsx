import React from 'react';
import { connect } from 'react-redux';
import * as types from '../redux/types/todo';
const TestSaga = ({ dispatch }) => {
    React.useEffect(() => {
        dispatch({
            type: types.GET_TODOS_START,
        });
        dispatch({
            type: types.GET_TODO_START,
            payload: 1,
        });
    }, []);
    return (
        <div>
            <h1>TestSaga</h1>
        </div>
    );
};

export default connect()(TestSaga);
