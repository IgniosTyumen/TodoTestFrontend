import React from "react"
import style from "./ButtonAll.module.css"

export const ButtonAll = () => {
    var buttonStyle = style["button-style"];
    var liStyle = style["li-style"];
    return(
    <li className={liStyle}>
        <input type="button" value="Все" className={buttonStyle}/>
    </li>
  );
};