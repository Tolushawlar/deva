import React from "react";
import HeaderImg from "../../Assets/Asset26.svg";
import "./style.css";

export default function Login() {
  return (
    <div className="container">
      <div className="contentLeft"></div>
      <div className="AuthForm">
        <h2 className="header"> LoginPage</h2>
        <img src={HeaderImg} alt="headerImg" style={{ width: 200 }} />
        <form>
          <label>
            Public Address
            <br />
            <input type="text" name="public address" />
          </label>
          <label>
            Password
            <br />
            <input type="password" name="password" />
          </label>
          <br />
          <input className="sub" type="submit" value="Login " />
        </form>
      </div>
      <div className="contentRight"></div>
    </div>
  );
}
