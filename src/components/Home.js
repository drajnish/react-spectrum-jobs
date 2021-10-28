import React, { Component } from "react";

import "./FormStyles.css";
import { Route, Link } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <nav>
            <ul className="navbar">
              <li>
                <Link to="/react-spectrum-jobs">Home</Link>
              </li>
              <li>
                <Link to="/Login">Login</Link>
              </li>
              <li>
                <Link to="/Signup">Signup</Link>
              </li>
              <li>
                <Link to="/UserDetail">User Detail</Link>
              </li>
            </ul>
          </nav>
        </header>
        <section className="main-section">
          <div className="employer">
            <Link to="/">
              <span className="main-heading">Employer</span>
            </Link>
          </div>
          <div className="job-seeker">
            <Link to="/Candidate">
              <span className="main-heading">Candidate</span>
            </Link>
          </div>
        </section>
      </div>
    );
  }
}
