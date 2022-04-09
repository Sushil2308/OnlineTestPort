import React, { Component } from "react";
import auth from "./localStorage";

class Logout extends Component {
  componentDidMount() {
    auth.logOut();
    window.location = `/login`;
  }
  render() {
    return "";
  }
}
export default Logout;
