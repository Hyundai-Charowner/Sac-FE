import React from "react";
import '../styles/MyPage.css';
import Header from "../components/Header/Header";
import MyNavi from "../components/MyPage/MyNavi";
import MyBody from "../components/MyPage/MyBody";

function MyPage() {

  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      <div className="my-body">
        <div className="my-body-navi">
            <MyNavi />
        </div>
        <div className="my-body-main">
            <MyBody />
        </div>
      </div>
    </div>
  );
}

export default MyPage;

