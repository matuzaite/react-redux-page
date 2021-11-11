import React from "react";
import "./styles.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../actions";
import User from "../User";

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="user-container">
      {users.length &&
        users.map((user) => {
          return <User key={`${user.id}${user.name}`} user={user} />;
        })}
    </div>
  );
};

export default UserList;
