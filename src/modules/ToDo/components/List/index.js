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
      todo.id == e.target.id ? { ...todo, completed: !todo.completed } : todo
    );
    setComplete(() => mappedList);
  };

  return (
    <div className="todos-container">
      <div className="todos-body">
        <h1>TO DO LIST</h1>
        {complete.map((todo) => {
          return (
            <ToDo
              toggleTodo={handleClick}
              id={todo.id}
              title={todo.title}
              key={`${todo.id}${todo.body}${todo.title}`}
              completed={todo.completed}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ToDoList;
