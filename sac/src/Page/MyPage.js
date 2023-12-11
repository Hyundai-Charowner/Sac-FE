import React from "react";
import '../styles/MyPage.css';
import Header from "../components/Header/Header";
import MyNavi from "../components/MyPage/MyNavi";

function MyPage() {

  return (
    <div className="App">
      <div className="navi">
        <Header />
      </div>
      <div className="body">
        <MyNavi />
      </div>
    </div>
  );
}

export default MyPage;

