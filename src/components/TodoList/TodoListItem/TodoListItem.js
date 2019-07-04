import React from "react"
import style from "./TodoListItem.module.css"
import {ButtonImportantInsideTodo} from "./ButtonImportant/ButtonImportantInsideTodo";
import {ButtonDeleteInsideTodo} from "./ButtonDelete/ButtonDeleteInsideTodo";
import {ButtonRunInsideTodo} from "./ButtonRun/ButtonRunInsideTodo";



const TodoListItem = (props) =>{

    var buttonBlockStyle = style["button-block"] + ` ` + (props.important ? style["is-important"]:style["is-regular"]);
    var mainBlockStyle = style["todo-list-item"] + ` ` + (props.important ? style["is-important"]:style["is-regular"]);
    var textStyle = style["text-block"];
    var textStyleBlock = style["text-block-main"];

    debugger;
    return(

        <div className={mainBlockStyle}>
            <div className={textStyleBlock}>
                <span className={textStyle}>{props.label}</span>
            </div>
            <div className={buttonBlockStyle}>
                <ButtonRunInsideTodo/>
                <ButtonImportantInsideTodo important={props.important}/>
                <ButtonDeleteInsideTodo/>
            </div>

        </div>
    );
};

export default TodoListItem;