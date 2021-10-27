import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import UserDetail from "./components/UserDetail";
import { Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route exact path="/Signup" component={Signup} />
      <Route exact path="/Login" component={Login} />
      <Route exact path="/UserDetail" component={UserDetail} />
    </div>
  );
}

export default App;
