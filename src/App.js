import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import UserDetail from "./components/UserDetail";
import Candidate from "./components/Candidate";
import CandidateProfile from "./components/CandidateProfile";
import { Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route exact path="/react-spectrum-jobs" component={Home} />
      <Route exact path="/Signup" component={Signup} />
      <Route exact path="/Login" component={Login} />
      <Route exact path="/UserDetail" component={UserDetail} />
      <Route exact path="/Candidate" component={Candidate} />
      <Route exact path="/CandidateProfile" component={CandidateProfile} />
    </div>
  );
}

export default App;
