import React, { useState, useContext } from "react";
import { useTranslation } from "react-i18next";
import menuicon from "../assets/img/menu@3x.png";
import closebtn from "../assets/img/close@3x.png";
import naviList from "../assets/data/naviList.json";
import "./Navi.css";
function Navi() {
  const { t } = useTranslation();
  const [navOpen, setNav] = useState(false);
  const toggleNav = () => {
    setNav(navOpen => !navOpen);
  };

  const scorllToItem = () => {
    // window.scrollTo({ top: 760, behavior: "smooth" });
  };
  return (
    <>
      <div className={!navOpen ? "navi-container navi-container-close" : "navi-container navi-container-open"}>
        {!navOpen && (
          <span className="navi-icon navi-menu">
            <img src={menuicon} width="50px" alt="" onClick={toggleNav}></img>
          </span>
        )}
        {navOpen && (
          <span className="navi-icon navi-close">
            <img src={closebtn} width="50px" alt="" onClick={toggleNav}></img>
          </span>
        )}
        {navOpen && (
          <div className="navi-list">
            {naviList.data.map((elem, idx) => {
              return (
                <>
                  <div key={idx} className="navi-item">
                    {elem}
                  </div>
                </>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
export default Navi;
