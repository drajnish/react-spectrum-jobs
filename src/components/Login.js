import React, { Component } from "react";

import { Validators } from "../utilities/Validator";
import InputField from "./InputField/index";
import Dropdown from "./Dropdown/index";
import Button from "./Button/index";
import { Route, Link } from "react-router-dom";

export default class App extends Component {
  state = {
    password: "",
    email: "",
    message: "",
    acceptance: false,
  };

  handleChange = (key) => (value) => {
    this.setState({ [key]: value });
  };

  handleClick = (event) => {
    event.preventDefault();
    alert("Button Clicked");
  };

  render() {
    const { text, password, message, acceptance, number, email } = this.state;

    return (
      <div className="App">
        <section class="login">
          <h1>Login</h1>
          <form action="#" className="login-form" id="loginForm">
            <InputField
              value={email}
              placeholder="username@email.com"
              inputClass="form-input"
              labelClass="details-form-label"
              type="email"
              label="Enter your email"
              validators={[
                {
                  check: Validators.required,
                  message: "this field is required",
                },
              ]}
              onChange={this.handleChange("email")}
            />

            <InputField
              value={password}
              placeholder="********"
              inputClass="form-input"
              labelClass="details-form-label"
              type="password"
              label="Password"
              validators={[
                {
                  check: Validators.required,
                  message: "this field is required",
                },
              ]}
              onChange={this.handleChange("password")}
            />
            <Button onClick={this.handleClick} value="Create Account" />
            <Link to="/Signup">Don't have account? Signup</Link>
          </form>
        </section>
      </div>
    );
  }
}