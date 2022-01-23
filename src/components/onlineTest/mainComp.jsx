import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./login";
import LogOut from "./logout";
import dataAuth from "./localStorage";
import Redirect from "./redirect";
import Nav from "./navBar";
import TestPortal from "../testComp/mainComp";
import QuizList from "./quizlist";
import About from "./about";
import Progress from "./progress";

class Display extends Component {
  render() {
    return (
      <div className="jumbotrons">
         
        <Nav />
        <Switch>
          {/* <Route path="/login" component={Login} />
          <Route
            path="/logout"
            component={
              dataAuth.isLogin() ? LogOut : Login
            }
          /> */}
          <Route
            path="/quizlist"
            component={
             QuizList
               
            }
          />
           {/* <Route
            path="/about"
            component={
              dataAuth.isLogin() 
                ? About
                : Login
            }
          /> */}
           {/* <Route
            path="/progress"
            component={
              dataAuth.isLogin() 
                ? Progress
                : Login
            }
          /> */}
           <Route
            path="/liveportal/:id"
            component={
              TestPortal
                
            }
          />

          <Route path="/" component={QuizList} />
        </Switch>
      </div>
    );
  }
}
export default Display;
