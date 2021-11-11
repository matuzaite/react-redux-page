import React, { useEffect } from "react";
import "./styles.scss";
import { useParams } from "react-router-dom";
import Card from "../Card";
import { useDispatch, useSelector } from "react-redux";
import { displayUser } from "../../../Users/actions";

const Details = () => {
  const { id } = useParams();

  const user = useSelector((state) => state.users);

  const dispatch = useDispatch();

  console.log(user);

  useEffect(() => {
    dispatch(displayUser(id));
  }, [dispatch, id]);

  return (
    <div className="user-info-container">
      <Card user={user} />
    </div>
  );
};

export default Details;
