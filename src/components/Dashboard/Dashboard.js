import React from "react";
import "./Dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVoteYea, faBell } from "@fortawesome/free-solid-svg-icons";
import HeaderImg from "../../Assets/Asset26.svg";

export default function Dashboard() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  const handleMenuOne = () => {
    // do something
    setOpen(false);
  };

  return (
    <div className="dashboard">
      <div className="DashboardCon">
        <div className="dashLeft">
          <div className="dashLeftImage">
            <img src={HeaderImg} alt="headerImg" style={{ width: 200 }} />
          </div>
          <div className="dashLeftform">
            <form>
              USERID
              <br />
              <input
                type="text"
                id="userId"
                placeholder="1223dwfge3wd3fvbre5"
              />
              <input type="text" placeholder="active" />
              <input type="text" placeholder="accreditation" />
            </form>
          </div>
        </div>
        <div className="dashRightContent">
          <div className="dashRight">
            <div className="electionIc">
              <div id="election">
                <FontAwesomeIcon icon={faVoteYea} style={{ marginRight: 10 }} />{" "}
                Election
              </div>
              <div id="live">live</div>
            </div>
            <FontAwesomeIcon icon={faBell} />
            <div className="ringIc"></div>
          </div>
          <div className="dashRightDown">
            <div>
              <button className="canditateSec" onClick={handleOpen}>Canditate 1 Name</button>
              {open ? (
                <ul className="menu">
                  <li className="menu-item">
                    <form>
                      
                    </form>
                    <button onClick={handleMenuOne}>Menu 1</button>
                  </li>
                </ul>
              ) : null}
            </div>
            
          </div>
        </div>
      </div>
      <div className="dashImg">
        <div className="coverDashLeft"></div>
        <div className="coverDashRight"></div>
      </div>
    </div>
  );
}
