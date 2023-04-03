import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from './redux/actions/todoActions';
import Todos from './components/Todos';
import TestSaga from './components/TestSaga';
const App = ({ todos, addTodo }) => {
    React.useEffect(() => {
        addTodo({
            id: 1,
            title: 'Hi',
        });
    }, []);
    return (
        <div>
            <h1>App</h1>
            <Todos />
            <TestSaga />
        </div>
    );
};
const mapStateToProps = (state) => ({ todos: state.todos });
export default connect(mapStateToProps, { addTodo })(App);
