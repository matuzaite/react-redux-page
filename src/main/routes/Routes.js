import React from "react";
import NavBar from "../../modules/Nav/components/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../../views/Home";
import PostsPage from "../../views/PostsPage";
import ToDoList from "../../modules/ToDo/components/List";
import UserList from "../../modules/Users/components/List";

const Routes = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/postlist" exact component={PostsPage} />
          <Route path="/todolist" exact component={ToDoList} />
          <Route path="/userlist" exact component={UserList} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Routes;
