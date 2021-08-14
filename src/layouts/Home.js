import React, { useState, useEffect, Profiler, useDebugValue } from "react";
import Project from "../layouts/Project";
import "./Home.css";
import Myphoto from "../assets/img/profile_jihye.jpg";
import Profile from "../assets/data/profile.json";
import Carousel from "../layouts/Carousel";
function Home() {
  const boxText = "개발자 손지혜의 홈페이지";
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);
  const [goBtn, setGoBtn] = useState(false);
  const [position, setPosition] = useState({ currentY: 0, headerBarY: 0, headerBarHeight: 0 });
  const [topBar, setTopBar] = useState(false);

  useEffect(() => {
    //   typing 효과
    const interval = setInterval(() => {
      setText(text + boxText[count]);
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
  }, []);

  const onScroll = () => {
    setPosition(window.scrollY);
    let headerBarHeight = document.getElementById("header-bar").getBoundingClientRect().height;
    let headerBarYPoint = headerBarHeight + document.getElementById("header-bar").getBoundingClientRect().top;

    window.scrollY > headerBarYPoint ? setTopBar(true) : setTopBar(false);
  };

  const onClickGoButton = () => {
    let headerBarHeight = document.getElementById("header-bar").getBoundingClientRect().height;
    let bodyYPoint = -headerBarHeight + document.getElementById("body").getBoundingClientRect().top;
    window.scrollTo({ top: bodyYPoint, left: 0, behavior: "smooth" });
  };
  let positionBar;
  position > "50vh" ? (positionBar = position) : (positionBar = 300);
  return (
    <>
      <div className="home">
        <div className={topBar ? "home-header-bar home-header-bar-top" : "home-header-bar"} id="header-bar" style={{ marginTop: positionBar }}>
          <div className="header-bar-text">{text}</div>

          {!topBar && (
            <div className="header-bar-go-button">
              <div className="icon" onClick={onClickGoButton}>
                <i class="fas fa-angle-double-down"></i>
              </div>
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
