import React from "react"
import style from "./ButtonImportant.module.css"

export const ButtonImportant = () => {
    var buttonStyle = style["button-style"];
  return(
    <li>
        <input type="button" value="Важные" className={buttonStyle}/>
    </li>
  );
};