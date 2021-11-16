import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./styles.scss";
import ToDo from "../ToDo";
import { fetchToDos } from "../../actions";

const ToDoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const [complete, setComplete] = useState(todos);

  useEffect(() => {
    dispatch(fetchToDos());
  }, [dispatch]);

  useEffect(() => {
    setComplete(todos);
  }, [todos]);

  const handleClick = (e) => {
    const mappedList = complete.map((todo) =>
      e.target.id == todo.id ? { ...todo, completed: !todo.completed } : todo
    );
    setComplete(mappedList);
  };

  return (
    <div className="todos-container">
      <div className="todos-body">
        <h1>TO DO LIST</h1>
        <ul className="todo-list">
          {complete.map((todo) => {
            return <ToDo toggleTodo={handleClick} key={todo.id} todo={todo} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default ToDoList;
