import React from "react"
import styles from "./NewTodo.module.css"

export const NewTodo = () => {

    var buttonStyle = styles.button;
    var containerStyle = styles.container;
    var inputStyle = styles["input-style"];
    return(
        <div className={containerStyle}>
            <input type="button" className={buttonStyle}/>
            <input placeholder="Новое задание"  className={inputStyle}/>
        </div>
    );
};