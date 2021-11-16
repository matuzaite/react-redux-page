import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserTodos } from "../../actions";
import ToDo from "../../../ToDo/components/ToDo";
import "./styles.scss";

const Todos = ({ user }) => {
  const dispatch = useDispatch();
  const details = useSelector((state) => state.details);

  useEffect(() => {
    dispatch(fetchUserTodos(user.id));
  }, [dispatch, user.id]);

  return (
    <div className="user-todos-container">
      <ul className="user-todos">
        {details.map((todo) => (
          <ToDo todo={todo} key={todo.id} />
        ))}
      </ul>
    </div>
  );
};

export default Todos;
