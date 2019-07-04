import React from "react"
import {ButtonAll} from "./ButtonAll/ButtonAll";
import {ButtonActive} from "./ButtonActive/ButtonActive";
import {ButtonImportant} from "./ButtonImportant/ButtonImportant";
import style from "./ButtonBlock.module.css"

export const ButtonBlock = () => {
    var blockStyle =  style["button-block"];
    return (
        <ul className={blockStyle}>
            <ButtonAll/>
            <ButtonActive/>
            <ButtonImportant/>
        </ul>
    );
};