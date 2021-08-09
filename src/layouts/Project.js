import React, { useState, useContext } from "react";
import { useTranslation } from "react-i18next";
import "./Project.css";
import kakaoWork from "../assets/img/kakaowork.png";
import projectList from "../assets/data/projectList.json";
function Project() {
  const { t } = useTranslation();

  return (
    <>
      <div className="project-container">
        {projectList.data.map((elem, idx) => {
          return (
            <>
              <div key={idx} className="project-box">
                {/* <img src={elem.src} width="500px" alt=""></img> */}
                <div className="project-item">{elem.title}</div>
                <div className="project-item">{elem.desc}</div>
                <div className="project-item">{elem.gubun}</div>
                <div className="project-item">{elem.insight}</div>
                <div className="project-item">{elem.technology}</div>
                <div className="project-item">{elem.period}</div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
export default Project;
