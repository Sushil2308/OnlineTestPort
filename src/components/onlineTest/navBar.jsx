import React, { Component } from "react";
import { Link } from "react-router-dom";
import dataAuth from "./localStorage";
import "./style.css";
class Nav extends Component {
  state = {};
  render() {

    return (
      <div className="jumbotrons">
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <Link className="navbar-brand ml-1" >
          MockTest
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent1"
          aria-controls="navbarSupportedContent1"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent1">
          <ul className="navbar-nav col-11 ">
           
            <li className="nav-item active">
              <Link className="nav-link" to="/quizlist">
                Quizes 
              </Link>
            </li>
            
            {/* <li className="nav-item active">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            {dataAuth.isLogin()?
            <li className="nav-item active">
              <Link className="nav-link " to="/progress">
                Progress 
              </Link>
            </li>
              :""} */}
          </ul>
          <div className="col-1">
          {/* {dataAuth.isLogin()  ?
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
              Logout
            </button>
            : <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">
            Login
          </button>} */}
          </div>
        </div>
      </nav>
      </div>
    );
  }
}
export default Nav;
