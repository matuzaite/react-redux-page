import React from "react";
import "./styles.scss";
import MailOutlineSharpIcon from "@mui/icons-material/MailOutlineSharp";
import FaceSharpIcon from "@mui/icons-material/FaceSharp";
import StarIcon from "@mui/icons-material/Star";
import LocalPhoneSharpIcon from "@mui/icons-material/LocalPhoneSharp";
import PersonSharpIcon from "@mui/icons-material/PersonSharp";

const Card = ({ user }) => {
  return (
    <div className="user-info-card">
      <h1>
        <StarIcon className="m-icon star" />
        {user.id}
      </h1>
      <ul>
        <li>
          <FaceSharpIcon className="m-icon" />
          {user.name}
        </li>
        <li>
          <MailOutlineSharpIcon className="m-icon" />
          {user.email}
        </li>
        <li>
          <PersonSharpIcon className="m-icon" />
          {user.username}
        </li>
        <li>
          <LocalPhoneSharpIcon className="m-icon" />
          {user.phone}
        </li>
      </ul>
    </div>
  );
};

export default Card;
