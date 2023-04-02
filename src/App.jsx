import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from './redux/actions/todoActions';
import Todos from './components/Todos';
const App = ({ todos, addTodo }) => {
    console.log(todos);
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
        </div>
    );
};
const mapStateToProps = (state) => ({ todos: state.todos });
export default connect(mapStateToProps, { addTodo })(App);
