import React from "react";
import "./styles.scss";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <ul className="options">
        <div className="nav-left">
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
        </div>
        <div className="nav-right">
          <li>
            <NavLink
              className="option"
              activeStyle={{
                borderBottom: "1px solid #ed4c76",
              }}
              to="/postlist"
            >
              Posts
            </NavLink>
          </li>
          <li>
            <NavLink
              className="option"
              activeStyle={{ borderBottom: "1px solid #ed4c76" }}
              to="/todolist"
              exact
            >
              To Dos
            </NavLink>
          </li>
          <li>
            <NavLink
              className="option"
              activeStyle={{ borderBottom: "1px solid #ed4c76" }}
              to="/userlist"
            >
              Users
            </NavLink>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default NavBar;
