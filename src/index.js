import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from "./components/AppHeader/AppHeader";
import SearchPanel from "./components/SearchPanel/SearchPanel";
import styles from "./index.module.css"
import {NewTodo} from "./components/NewTodo/NewTodo";
import store from "./redux/reduxStore"
import {Provider} from "react-redux";
import TodoListContainer from "./components/TodoList/TodoListContainer";


const App = () => {

    const todoData = [
        {label: "Drink coffee", important: false, id: 1},
        {label: "Make awesome app", important: true, id: 2},
        {label: "Have a lunch", important: false, id: 3},

    ];

    var headerSplitter = styles["header-splitter"];

    return (
        <Provider store={store}>
                <AppHeader className={styles["app-header"]}/>

            <div className={styles["content"]}>
                <div className={headerSplitter}>
                    <NewTodo/>
                <SearchPanel/>
                </div>
                <TodoListContainer/>
            </div>
        </Provider>
    );
};


ReactDOM.render(<App/>, document.getElementById('root'));

