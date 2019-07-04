import React from "react"
import style from "./ButtonActive.module.css"

export const ButtonActive = () => {

    var buttonStyle = style["button-style"];
  return(
    <li>
        <input type="button" value="Активные" className={buttonStyle}/>
    </li>
  );
};