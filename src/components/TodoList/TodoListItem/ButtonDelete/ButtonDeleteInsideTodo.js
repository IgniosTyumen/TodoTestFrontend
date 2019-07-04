import React from "react"
import style from "./ButtonDeleteInsideTodo.module.css"

export const ButtonDeleteInsideTodo = () => {

    var buttonStyle = style["button-style"] + ` ` + style.icon;
  return(
    <li>
        <input type="button" value="Удалить" className={buttonStyle}/>
    </li>
  );
};