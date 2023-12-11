import React from "react";
import '../styles/MyPage.css';
import Header from "../components/Header/Header";
import MyHead from "../components/MyPage/MyHead";

function MyPage() {

  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      <div className="body">
        <MyHead />
      </div>
    </div>
  );
}

export default MyPage;

