import React from 'react';

import TodoListItem from "./TodoListItem/TodoListItem";
import styles from "./TodoList.module.css"

const TodoList = (props) => {

    var ulStyle = styles["todo-list"];
    var elementStyle = styles.element;



    const elements = props.todos.map((item) => {
        return (
            <li key={item.id} className={elementStyle}>
                <TodoListItem label={item.name} important={item.important} />
            </li>
        );
    });

    debugger
    return (
        <ul className={ulStyle}>
            {elements}
        </ul>
    );
};

export default TodoList;