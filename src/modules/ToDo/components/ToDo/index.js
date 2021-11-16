import React from "react";
import "./styles.scss";

const ToDo = ({ todo, toggleTodo }) => {
  return (
    <div onClick={toggleTodo} className="todo-container">
      {
        <li className={todo.completed ? "completed" : "round-checkbox "}>
          <span
            className={
              todo.completed ? "round-checkbox completed" : "round-checkbox"
            }
          >
            <span className="arrow"></span>
          </span>
          <span className="todo-item" id={todo.id}>
            {todo.title}
          </span>
        </li>
      }
    </div>
  );
};

export default ToDo;
