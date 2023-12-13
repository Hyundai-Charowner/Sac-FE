import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
import Write from "./Page/Write";
import MyPage from "./Page/MyPage";
import TopicLookAround from "./Page/TopicLookAround";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/write" element={<Write />} />
        <Route path="/myPage" element={<MyPage />} />
        <Route path="/topic-look-around" element={<TopicLookAround />} />
      </Routes>
    </Router>
  );
}

export default App;
