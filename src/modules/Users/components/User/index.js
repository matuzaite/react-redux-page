import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";

const User = ({ user }) => {
  return (
    <>
      <Link to={`userlist/${user.id}/albums`} className="user-card">
        <PersonIcon className="icon" />
        <h2>{user.name}</h2>
      </Link>
    </>
  );
};

export default User;
