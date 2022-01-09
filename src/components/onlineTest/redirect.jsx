import React, { Component } from "react";
import "./style.css";
class Redirect extends Component {
  render() {
    return (
      <div className="container container-height d-flex flex-column justify-content-center align-items-center">
        <img
          src="https://createsigns.co.nz/wp-content/uploads/2016/12/UNAUTHORIZED_ENTRY_L.png"
          className="img-fluid width-height"
          alt="Loading"
        />
        <h2 className="text-center text-uppercase">
          For Using This <strong>Login</strong> First.
          <br /> Either Contact your Controler
        </h2>
      </div>
    );
  }
}
export default Redirect;
