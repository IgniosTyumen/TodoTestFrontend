import React from "react";
import {ButtonBlock} from "./ButtonBlock/ButtonBlock";
import style from "./SearchPanel.module.css"

const SearchPanel = () => {

    var searchPaneStyle = style["search-panel"];
    var blockStyle = style["flex-block"];
    var searchBlockStyle = style["flex-block"] + ` ` + style.divBlock;
    return (
        <div className={blockStyle}>
            <div className={searchBlockStyle}>
                <input placeholder="Поиск по названию (Протереть плюмбус)" className={searchPaneStyle}/>
                <ButtonBlock/>
            </div>
        </div>
    );
};

export default SearchPanel;