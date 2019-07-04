import React from "react"
import styles from "./TodoCounter.module.css"


const TodoCounter = ({todosCount = 0, todosCountImportant = 0}) => {

    var spanClassNamesImportant= styles.content +` ` +styles.important;
    var spanClassesRegular = styles.content;
    var rootClasses = styles.root;
    var invisibleClass = styles.invisible;

    return(
      <div className={rootClasses}>
          <span className={spanClassesRegular}>У вас {todosCount} задач, из них </span>
          <span className={invisibleClass}>&nbsp;</span>
          <span className={spanClassNamesImportant}>{(todosCountImportant)} важных</span>
      </div>
    );
};

export default TodoCounter;