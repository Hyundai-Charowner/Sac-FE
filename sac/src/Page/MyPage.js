import React from "react";
import '../styles/MyPage.css';
import Header from "../components/Header/Header";
import MyNavi from "../components/MyPage/MyNavi";
import MyBody from "../components/MyPage/MyBody";

function MyPage() {

  return (
    <div className="App">
      <div className="navi">
        <Header />
      </div>
      <div className="my-body">
        <MyNavi />
        <MyBody />
      </div>
    </div>
  );
}

export default MyPage;

