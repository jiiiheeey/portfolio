import React, { useState, useContext } from "react";
import { useTranslation } from "react-i18next";
import "./Project.css";
import kakaoWork from "../assets/img/kakaowork.png";
import closeBtn from "../assets/img/close@3x.png";
import projectList from "../assets/data/projectList.json";
function Project() {
  const { t } = useTranslation();
  const [openModal, setOpenModal] = useState(false);
  const clickModal = () => {
    setOpenModal(!openModal);
  };
  const onBlurModal = () => {
    setOpenModal(false);
  };
  return (
    <div className={openModal ? "project-container project-container-openmodal" : "project-container"}>
      {openModal && (
        <div className="modal" onBlur={onBlurModal}>
          {openModal && <img src={closeBtn} className="modal-close-button" width="70px" alt="" onClick={clickModal} />}
          <h1>제목</h1>
          <h2>배운점</h2>
          <h3>느낌점</h3>
          <img src={kakaoWork} width="500px" alt="" />
        </div>
      )}
      {/* {!openModal && <div className="modal-close" />} */}
      <div className="box-container" onClick={clickModal}>
        {projectList.data.map((elem, idx) => {
          return (
            <>
              <div key={idx} className="project-box">
                <img src={elem.src} width="500px" alt="" />
                <h3 className="project-item">{elem.title}</h3>
                {/* <div className="project-item">{elem.desc}</div> */}
                <div className="project-item gubun">{elem.gubun}</div>
                {/* <div className="project-item">{elem.insight}</div> */}
                <div className="project-item">활용기술 : {elem.technology}</div>
                <div className="project-item">기간 : {elem.period}</div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
export default Project;
