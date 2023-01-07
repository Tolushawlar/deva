import React from "react";
import "./Dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVoteYea, faBell } from "@fortawesome/free-solid-svg-icons";
import HeaderImg from "../../Assets/Asset26.svg";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <div className="DashboardCon">
        <div className="dashLeft">
          <div className="dashLeftImage">
            <img src={HeaderImg} alt="headerImg" style={{ width: 200 }} />
          </div>
          <div className="dashLeftform">
            <form>
              USERID<br/><input type="text" id="userId" placeholder="1223dwfge3wd3fvbre5" />
              <input type="text" placeholder="active" />
              <input type="text" placeholder="accreditation" />
            </form>
          </div>
        </div>
        <div className="dashRight">
          <div className="electionIc">
            <div id="election">
              <FontAwesomeIcon icon={faVoteYea} /> Election
            </div>
            <div id="live">live</div>
          </div>
          <FontAwesomeIcon icon={faBell} />
          <div className="ringIc"></div>
        </div>
      </div>
      <div className="dashImg">
        <div className="coverDashLeft"></div>
        <div className="coverDashRight"></div>
      </div>
    </div>
  );
}
