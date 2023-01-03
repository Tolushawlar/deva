import React, { Component } from "react";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="hero">
        <div className="heroLeft">
          <div className="heroText">
            <h4>Be a Part of Decision</h4>
            <h1>Vote Today</h1>
            <h3>
              An online voting that will replace the centralize voting system
            </h3>
          </div>
          <div className="heroBtn">
            <div>Register</div>
            <div>Login</div>
          </div>
        </div>
        <div className="heroRight">
         
        </div>
      </div>
    );
  }
}
