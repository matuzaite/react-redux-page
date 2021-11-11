import React from "react";
import NavBar from "../../modules/Nav/components/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../../views/Home";
import PostsPage from "../../views/PostsPage";
import ToDoList from "../../modules/ToDo/components/List";
import Details from "../../modules/Details/components/Details";
import UserList from "../../modules/Users/components/List";

const Routes = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/postlist" exact component={PostsPage} />
        <Route path="/todolist" exact component={ToDoList} />
        <Route path="/userlist" exact component={UserList} />
        <Route path="/userlist/:id" exact component={() => <Details />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
