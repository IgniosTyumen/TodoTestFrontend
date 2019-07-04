import React from "react"

import {getTodos} from "../../redux/TodoListReducer";
import {connect} from "react-redux"
import TodoList from "./TodoList";

class TodoListContainer extends React.Component {


    componentDidMount() {
        this.props.getTodos();
    }


    render() {
        console.log(this.props);
        return (
            <TodoList {...this.props}/>
        );
    };
}

const mapDispatchToProps = {
    getTodos
};

const mapStateToProps = (state) => ({
    todos: state.todo.todos,
    todosCount: state.todo.todosCount
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer);
