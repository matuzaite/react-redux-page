import React, { useEffect } from "react";
import "./styles.scss";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserAlbums } from "../../actions";

const Albums = ({ user }) => {
  const dispatch = useDispatch();
  const details = useSelector((state) => state.details);

  useEffect(() => {
    dispatch(fetchUserAlbums(user.id));
  }, [dispatch, user.id]);

  return (
    <div className="albums">
      {details.map((item) => (
        <p className="album-item" key={item.id}>
          {item.title}
        </p>
      ))}
    </div>
  );
};

export default Albums;
