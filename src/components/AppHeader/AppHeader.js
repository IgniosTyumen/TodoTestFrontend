import React from 'react';
import TodoCounter from "./TodoCounter/TodoCounter";
import styles from "./AppHeader.module.css"


const AppHeader = () => {
    return (
        <>
            <h1 className={styles["app-name"]}>My todo list</h1>
            <TodoCounter className={styles["todos-counter"]}/>

        </>
    );
};

export default AppHeader;