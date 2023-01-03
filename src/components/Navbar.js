import React from "react";
import './styles.css';

export default function Navbar() {
  return (
    <div className="Navbar">
      <div className="navlist">
        <div className="navLeft">logo</div>
        <div className="navRight">
          <div className="navRightItem">How to Vote</div>
          <div className="navRightItem">Contact</div>
          <div className="navRightItem">Login</div>
          <div className="navRightItem registerBtn">Register</div>
        </div>
      </div>
    </div>
  );    
}
                                      
