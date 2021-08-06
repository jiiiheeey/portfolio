import React, { useState, useEffect } from "react";
import "./Home.css";
function Home() {
  const boxText = "안녕 안녕 개발자 손지혜입니다.";
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);
  const [goBtn, setGoBtn] = useState(false);
  const [position, setPosition] = useState(0);
  const [topBar, setTopBar] = useState(false);
  useEffect(() => {
    //   typing 효과
    const interval = setInterval(() => {
      setText(text + boxText[count]);
      setCount(count + 1);
    }, 150);
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
    console.log(window.scrollY);
    setPosition(window.scrollY);
    window.scrollY > 250 ? setTopBar(true) : setTopBar(false);
  };
  let positionBar;
  position > 200 ? (positionBar = position) : (positionBar = 350);

  return (
    <>
      <div className="home">
        <div className={topBar ? "home-header-bar home-header-bar-top" : "home-header-bar"} style={{ marginTop: positionBar }}>
          <div className="header-bar-text">{text}</div>

          {!topBar && (
            <div className="header-bar-go-button">
              <div className="icon">
                <i class="fas fa-angle-double-down"></i>
              </div>
            </div>
          )}
        </div>
        <div className="home-body">
          <div className="home-body-ad">광고입니다</div>
          <div className="home-body-profile">profile</div>
          <div className="home-body-carousel">carousel</div>
          <div className="home-body-project">project</div>
          <div className="home-body-certi">certi</div>
          <div className="home-footer">Footer</div> <div className="home-footer">Footer</div> <div className="home-footer">Footer</div>{" "}
          <div className="home-footer">Footer</div> <div className="home-footer">Footer</div> <div className="home-footer">Footer</div>{" "}
          <div className="home-footer">Footer</div> <div className="home-footer">Footer</div> <div className="home-footer">Footer</div>{" "}
          <div className="home-footer">Footer</div> <div className="home-footer">Footer</div> <div className="home-footer">Footer</div>{" "}
          <div className="home-footer">Footer</div>
          <div className="home-footer">Footer</div> <div className="home-footer">Footer</div> <div className="home-footer">Footer</div>{" "}
          <div className="home-footer">Footer</div> <div className="home-footer">Footer</div> <div className="home-footer">Footer</div>{" "}
          <div className="home-footer">Footer</div> <div className="home-footer">Footer</div> <div className="home-footer">Footer</div>{" "}
          <div className="home-footer">Footer</div> <div className="home-footer">Footer</div> <div className="home-footer">Footer</div>{" "}
          <div className="home-footer">Footer</div> <div className="home-footer">Footer</div>
          <div className="home-footer">Footer</div> <div className="home-footer">Footer</div> <div className="home-footer">Footer</div>{" "}
          <div className="home-footer">Footer</div> <div className="home-footer">Footer</div> <div className="home-footer">Footer</div>{" "}
          <div className="home-footer">Footer</div> <div className="home-footer">Footer</div> <div className="home-footer">Footer</div>{" "}
          <div className="home-footer">Footer</div> <div className="home-footer">Footer</div> <div className="home-footer">Footer</div>{" "}
          <div className="home-footer">Footer</div> <div className="home-footer">Footer</div>
          <div className="home-footer">Footer</div>
          <div className="home-footer">Footer</div> <div className="home-footer">Footer</div> <div className="home-footer">Footer</div>{" "}
          <div className="home-footer">Footer</div> <div className="home-footer">Footer</div> <div className="home-footer">Footer</div>{" "}
          <div className="home-footer">Footer</div> <div className="home-footer">Footer</div> <div className="home-footer">Footer</div>{" "}
          <div className="home-footer">Footer</div> <div className="home-footer">Footer</div> <div className="home-footer">Footer</div>{" "}
          <div className="home-footer">Footer</div>
          <div className="home-footer">Footer</div> <div className="home-footer">Footer</div> <div className="home-footer">Footer</div>{" "}
          <div className="home-footer">Footer</div> <div className="home-footer">Footer</div> <div className="home-footer">Footer</div>{" "}
          <div className="home-footer">Footer</div> <div className="home-footer">Footer</div> <div className="home-footer">Footer</div>{" "}
          <div className="home-footer">Footer</div> <div className="home-footer">Footer</div> <div className="home-footer">Footer</div>{" "}
          <div className="home-footer">Footer</div> <div className="home-footer">Footer</div>
          <div className="home-footer">Footer</div> <div className="home-footer">Footer</div> <div className="home-footer">Footer</div>{" "}
          <div className="home-footer">Footer</div> <div className="home-footer">Footer</div> <div className="home-footer">Footer</div>{" "}
          <div className="home-footer">Footer</div> <div className="home-footer">Footer</div> <div className="home-footer">Footer</div>{" "}
          <div className="home-footer">Footer</div> <div className="home-footer">Footer</div> <div className="home-footer">Footer</div>{" "}
          <div className="home-footer">Footer</div> <div className="home-footer">Footer</div>
          <div className="home-footer">Footer</div>
        </div>
      </div>
    </>
  );
}
export default Home;
