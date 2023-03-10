import React, { Component } from "react";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";



export default class Home extends Component {
  render() {
    return (
      <div className="hero">
        <div className="heroLeft">
          <div className="heroText">
            <h4>Be a Part of Decision</h4>
            <h1 style={{ overflow: "hidden" }}>
              Vote <span id="voteTxt">Today.</span>
            </h1>
            <h3>
              An online voting that will replace the <br /> centralized voting
              system
            </h3>
          </div>

          <div className="heroBtn">
            <h4><FontAwesomeIcon icon={faArrowRight} /> Do you like to be a part of the outcome</h4>
            <br />
            <div id="regBtn">Connect Wallet</div>
          </div>
        </div>
        <div className="heroRight"></div>
      </div>
    );
  }
}
