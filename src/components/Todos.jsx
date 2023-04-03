// import React from 'react';
// import { connect } from 'react-redux';
// import { getTodos } from '../redux/actions/todoActions';
// const Todos = ({ getTodos }) => {
//     React.useEffect(() => {
//         getTodos();
//     }, []);
//     return <div>Todos</div>;
// };

// export default connect(null, { getTodos })(Todos);

import React from 'react';
import { connect } from 'react-redux';
import { get } from '../redux/actions/todoActions';
import axios from 'axios';
const Todos = ({ dispatch }) => {
    // React.useEffect(() => {
    //     axios.get('https://jsonplaceholder.typicode.com/todos?_limit=3').then(({ data }) => {
    //         dispatch(get(data));
    //     });
    // }, []);
    return <div>Todos</div>;
};

export default connect()(Todos);
