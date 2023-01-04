import React, { Component } from "react";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="hero">
        <div className="heroLeft">
          <div className="heroText">
            <h4>Be a Part of Decision</h4>
            <h1>
              Vote <span id="voteTxt">Today.</span>
            </h1>
            <h3>
              An online voting that will replace the <br /> centralized voting
              system
            </h3>
          </div>
          <div className="heroBtn">
            <div id="regBtn">Register</div>
            <div id="logBtn">Login</div>
          </div>
        </div>
        <div className="heroRight"></div>
      </div>
    );
  }
}
