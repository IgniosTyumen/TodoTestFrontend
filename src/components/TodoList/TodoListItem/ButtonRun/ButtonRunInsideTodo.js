import React from "react"
import style from "./ButtonRunInsideTodo.module.css"

export const ButtonRunInsideTodo = () => {

    var buttonStyle = style["button-style"] + ` ` + style.icon;
  return(
    <li>
        <input type="button" value="Удалить" className={buttonStyle}/>
    </li>
  );
};