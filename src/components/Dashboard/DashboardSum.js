import React from "react";

import "./Dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVoteYea, faBell } from "@fortawesome/free-solid-svg-icons";
import HeaderImg from "../../Assets/Asset26.svg";

export default function DashboardSum() {
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
          <div className="dashRight">
            <div className="electionIcs">
              <div id="electionSum">Election Summary</div>
            </div>
          </div>
          <div className="dashRightDownS">
            <div className="dashLeaders">
              <h2>LeaderBoards</h2>
              <div className="leaders">
              <img src={HeaderImg} alt="headerImg" style={{ width: 20, marginRight:60 }} />
              <div className="candName" style={{marginRight:60 }}>Canditate 1</div>
              <div className="candVote" style={{marginRight:60 }}>1234</div>
              </div>
              <hr style={{ width: 300 }}/>

              <div className="leaders">
              <img src={HeaderImg} alt="headerImg" style={{ width: 20, marginRight:60 }} />
              <div className="candName" style={{marginRight:60 }}>Canditate 1</div>
              <div className="candVote" style={{marginRight:60 }}>1234</div>
              </div>
              <hr style={{ width: 300 }}/>

              <div className="leaders">
              <img src={HeaderImg} alt="headerImg" style={{ width: 20, marginRight:60 }} />
              <div className="candName" style={{marginRight:60 }}>Canditate 1</div>
              <div className="candVote" style={{marginRight:60 }}>1234</div>
              </div>
              <hr style={{ width: 300 }}/>
              
              <div className="leaders">
              <img src={HeaderImg} alt="headerImg" style={{ width: 20, marginRight:60 }} />
              <div className="candName" style={{marginRight:60 }}>Canditate 1</div>
              <div className="candVote" style={{marginRight:60 }}>1234</div>
              </div>
              <hr style={{ width: 300 }}/>
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
