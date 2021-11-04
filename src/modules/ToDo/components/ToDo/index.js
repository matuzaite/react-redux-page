import React from "react";
import "./styles.scss";

const ToDo = ({ completed, title, toggleTodo, id }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {
          <li
            className={completed ? "completed" : ""}
            id={id}
            onClick={toggleTodo}
          >
            {title}
          </li>
        }
      </ul>
    </div>
  );
};

export default ToDo;
