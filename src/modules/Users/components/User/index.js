import React from "react";
import "./styles.scss";

const User = ({ user }) => {
  return (
    <div className="user-card">
      <h3>{user.id} </h3>
      <h2>{user.name}</h2>
    </div>
  );
};

export default User;
