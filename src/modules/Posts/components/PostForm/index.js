import React, { useState } from "react";
import "./styles.scss";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { postPosts, addPost } from "../../actions";
import Button from "../Button";

const PostForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    id: "",
    body: "",
  });

  const [post, setPost] = useState({});

  const dispatch = useDispatch();

  const onContentChanged = (e) => {
    const newData = { ...post };
    newData[e.target.id] = e.target.value;
    setPost(newData);
  };

  const onSubmit = (data) => {
    if (!data) {
      return;
    } else {
      dispatch(addPost(data));
      dispatch(postPosts(post));
      reset({
        id: "",
      });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="form-container">
        <h2 className="title">Leave a post</h2>
        <label htmlFor="id">Id</label>
        <input
          id="id"
          type="number"
          defaultValue={post.id}
          name="id"
          {...register("id", {
            required: "ID missing (3-digits)",
            minLength: { value: 3, message: "Min 3-digits" },
          })}
          onChange={(e) => onContentChanged(e)}
        />
        {errors.id && <small>{errors.id.message}</small>}

        <label htmlFor="post">Your post</label>
        <textarea
          value={post.body}
          id="body"
          name="body"
          {...register("body", { required: "Post is empty" })}
          onChange={(e) => onContentChanged(e)}
        />
        {errors.body && <small>{errors.body.message}</small>}

        <Button className="submit-btn" type="submit" />
      </form>
    </>
  );
};

export default PostForm;
