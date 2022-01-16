import React, { Component } from "react";
import auth from "./localStorage";
import httpRequest from "./dataFetch";
import "./login.css";
import { Link } from "react-router-dom";
import loginIcon from "./images/undraw_remotely_2j6y.svg";
class Login extends Component {
  state = {
    messagePrompt: {},
    form: { username: "", password: "" },
    error: "",
    user: {}
  };
  handleInput = (e) => {
    let Temp = e.currentTarget;
    let Copy = { ...this.state };
    Copy.form[Temp.name] = Temp.value;
    this.setState(Copy);
    if (Temp.name === "password") this.getError(Temp.value);
  };
  getError = (value) => {
    let c = { ...this.state };
    c.error = value.length >= 5 ? "" : "Enter Password Atleast 5 Character";
    this.setState(c);
  };

  async authUserForLogin(ob) {
    // let response = await httpRequest.post("/authAndSendStatus", ob);
    // console.log("response", response.data);
    // let { data } = response;
    auth.login('Token gtwyshdgssgajshhddghfg^5636372627');
    window.location = "/quizlist";
  }
  authLoginUser = () => {
    console.log("Hi")
    const { username, password } = this.state.form;
    const user = { username: username, password: password };
    console.log(user);
    if (!this.state.error) this.authUserForLogin(user);
  };
  LogoutUser = () => {
    this.Logout();
  };
  Logout() {
    auth.logOut();
    window.location = "/login";
  }
  render() {
    const { username, password } = this.state.form;
    const { error, messagePrompt } = this.state;
    console.log(this.props);
    return (
      <div className="container" style={{ marginTop: "5%" }}>
        <div className="row">
          <div className="col-md-6">
            <img src={loginIcon} alt="Image" className="img-fluid" />
          </div>
          <div className="col-md-6 contents">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="mb-4">
                  <h3>Sign In</h3>
                  <p className="mb-4">
                    This portal will help you to imporove 
                    your study style
                  </p>
                </div>

                <div className="form-group first">
                  <label for="username">Username</label>
                  <input
                    type="text"
                    value={username}
                    className="form-control"
                    id="username"
                    name="username"
                    onChange={this.handleInput}
                  />
                </div>
                <div className="form-group last mb-4">
                  <label for="password">Password</label>
                  <input
                    type="password"
                    className="form-control "
                    id="password"
                    value={password}
                    name="password"
                    onChange={this.handleInput}
                  />
                </div>

               

                <input
                  type="submit"
                  value="Log In"
                  className="btn btn-block btn-primary"
                  onClick={this.authLoginUser}
                />

                <span className="d-block text-center my-4 text-muted">
                  &mdash; or login with &mdash;
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
