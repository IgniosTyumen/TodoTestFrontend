import React from "react"
import style from "./ButtonImportant.module.css"
import {importantIcon} from "./warning.svg"

export const ButtonImportantInsideTodo = ( {important=false} ) => {

    var buttonStyle = style["button-style"] +` `+style.icon+ ` ` +(important? style.important : style.regular);
  return(
    <li>
        <input type="button" className={buttonStyle} value="Сделать важным"/>
    </li>
  );
};