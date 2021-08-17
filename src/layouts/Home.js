import React, { useState, useEffect, Profiler, useDebugValue } from "react";
import Project from "../layouts/Project";
import "./Home.css";
import Myphoto from "../assets/img/profile_jihye.jpg";
import Profile from "../assets/data/profile.json";
import Carousel from "../layouts/Carousel";
function Home() {
  const headLineText = "Welcome";
  const boxText = "개발자 손지혜의 홈페이지";
  const [typingText, setTypingText] = useState("");
  const [count, setCount] = useState(0);
  const [goBtn, setGoBtn] = useState(false);
  // const [position, setPosition] = useState({ currentY: 0, headerBarY: 0 });
  const [topBar, setTopBar] = useState(false);
  // const [positionBar, setPositionBar] = useState(300);
  const [scrollUp, setScrollUp] = useState(false);
  const [prevScroll, setPrevScroll] = useState(0);

  useEffect(() => {
    //   typing 효과
    const interval = setInterval(() => {
      setTypingText(typingText + boxText[count]);
      setCount(count + 1);
    }, 120);
    if (count === boxText.length) {
      clearInterval(interval);
      setGoBtn(true);
    }
    return () => clearInterval(interval);
  });
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [prevScroll]);

  const onScroll = () => {
    prevScroll > window.scrollY ? setScrollUp(true) : setScrollUp(false);

    // let headerBarYPoint = headerBarHeight + document.getElementById("header-bar").getBoundingClientRect().top;

    // window.scrollY > headerBarYPoint ? setTopBar(true) : setTopBar(false);
    // window.screenY > headerBarYPoint ? setPositionBar(window.scrollY) : setPosition(300);
    // setPosition({ currentY: window.scrollY, headerBarY: headerBarHeight + document.getElementById("header-bar").getBoundingClientRect().top });
    // position.currentY > position.headerBarY ? setTopBar(true) : setTopBar(false);
    setPrevScroll(window.scrollY);
  };

  const onClickGoButton = () => {
    // let headerBarHeight = document.getElementById("header-bar").getBoundingClientRect().height;

    let bodyYPoint = document.getElementById("body").getBoundingClientRect().top;
    window.scrollTo({ top: bodyYPoint, left: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="home">
        {scrollUp && <div className="home-header-bar-top">{headLineText}</div>}
        <div className="home-header-bar" id="header-bar">
          <div className="header-bar-text">{typingText}</div>

          {!topBar && (
            <div className="header-bar-go-button">
              {goBtn && (
                <div className="click-icon" onClick={onClickGoButton}>
                  CLICK <i class="fas fa-angle-double-down"></i>
                </div>
              )}
            </div>
          )}
        </div>
        <div className="home-body" id="body">
          <div className="home-body-introduce">
            <div className="home-body-ad">
              광고입니다
              <div>광고내용내용내용</div>
            </div>
            <div className="home-body-profile">
              <img className="home-body-profile-img" src={Myphoto} width="200px" alt=""></img>
              <div className="home-body-profile-text">
                <div className="home-body-profile-text-name">{Profile.name}</div>
                <div>좌우명 {Profile.desc}</div>
                <div>이메일 {Profile.email}</div>
                <div>연락처 {Profile.mobile}</div>
              </div>
            </div>
          </div>
          <div className="home-body-carousel">
            <Carousel />
          </div>
          <div className="home-body-project">
            <Project />
          </div>
          <div className="home-body-certi">certi</div>
          <div className="home-footer">Footer</div>
        </div>
      </div>
    </>
  );
}
export default Home;
