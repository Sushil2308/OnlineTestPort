import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./login";
import LogOut from "./logout";
import dataAuth from "./localStorage";
import Redirect from "./redirect";
import Nav from "./navBar";
import TestPortal from "../testComp/mainComp";
import QuizList from "./quizlist";

class Display extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Nav />
        <Switch>
          <Route path="/login" component={Login} />
          <Route
            path="/logout"
            component={
              dataAuth.isLogin() && dataAuth.isLogin().data ? LogOut : Redirect
            }
          />

          <Route
            path="/quizlist"
            component={
              dataAuth.isLogin() && dataAuth.isLogin().data
                ? QuizList
                : Redirect
            }
          />
           <Route
            path="/liveportal"
            component={
              dataAuth.isLogin() && dataAuth.isLogin().data
                ? TestPortal
                : Redirect
            }
          />

          <Route path="/" component={QuizList} />
        </Switch>
      </div>
    );
  }
}
export default Display;
