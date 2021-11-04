import React from "react";
import "./styles.scss";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <ul className="options">
        <li>
          <NavLink
            activeStyle={{ borderWidth: "2px" }}
            className="home"
            exact
            to="/"
          >
            matuzaite
          </NavLink>
        </li>
        <li>
          <NavLink
            className="option"
            activeStyle={{
              borderColor: "orange",
            }}
            to="/postlist"
          >
            Post List
          </NavLink>
        </li>
        <li>
          <NavLink
            className="option"
            activeStyle={{ borderColor: "orange" }}
            to="/todolist"
          >
            To Do List
          </NavLink>
        </li>
        <li>
          <NavLink
            className="option"
            activeStyle={{ borderColor: "orange" }}
            to="userlist"
          >
            User List
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
