import React from "react";
import './styles.css';
import Logo from '.././Assets/screens/Logo.svg';

export default function Navbar() {
  return (
    <div className="Navbar">
      <div className="navlist">
        <div className="navLeft">
          <img src={Logo} style={{width:100}} alt="logo" />
        </div>
        <div className="navRight">
          <div className="navRightItem">How to Vote</div>
          <div className="navRightItem">Contact</div>
          <div className="navRightItem registerBtn">Connect Wallet</div>
        </div>
      </div>
    </div>
  );    
}
                                      
