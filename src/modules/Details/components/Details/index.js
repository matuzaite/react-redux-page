import React, { useEffect } from "react";
import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { displayUser } from "../../../Users/actions";
import { NavLink, Route, useParams } from "react-router-dom";
import Card from "../Card";
import Todos from "../Todos";
import Posts from "../Posts";
import Albums from "../Albums";

const Details = () => {
  const { id } = useParams();
  const user = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(displayUser(id));
  }, [dispatch, id]);

  return (
    <div className="user-detail-container">
      <Card user={user} />
      <div className="user-detail">
        <NavLink
          className="small-nav"
          activeStyle={{ color: "#ED4C76" }}
          to={`/userlist/${id}/albums`}
        >
          Albums
        </NavLink>
        <NavLink
          className="small-nav"
          activeStyle={{ color: "#ED4C76" }}
          to={`/userlist/${id}/todos`}
        >
          Todos
        </NavLink>
        <NavLink
          className="small-nav"
          activeStyle={{ color: "#ED4C76" }}
          to={`/userlist/${id}/posts`}
        >
          Posts
        </NavLink>

        <Route
          path={`/userlist/${id}/albums`}
          component={() => <Albums user={user} />}
        />
        <Route
          path={`/userlist/${id}/todos`}
          component={() => <Todos user={user} />}
        />
        <Route
          path={`/userlist/${id}/posts`}
          component={() => <Posts user={user} />}
        />
      </div>
    </div>
  );
};

export default Details;
