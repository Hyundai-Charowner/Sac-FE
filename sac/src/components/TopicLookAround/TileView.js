import React, { useState } from "react";
import "../../styles/TileView.css";

const TileView = ({ boards }) => {
  const [subscribed, setSubscribed] = useState([]);

  const handleSubscription = (index) => {
    setSubscribed((prevSubscribed) => {
      const newSubscribed = [...prevSubscribed];
      newSubscribed[index] = !newSubscribed[index]; // 토글 구독 상태
      return newSubscribed;
    });
  };

  return (
    <div className="tile-container">
      {boards.map((board, index) => (
        <div className="tile-view" key={index}>
          <div className="tile-header">
            <div
              className="tile-image"
              style={{ backgroundImage: `url(${board.image})` }}
            />
            <div className="tile-header-container">
              <div className="tile-header-title">{board.title}</div>
              <button
                className={`tile-header-button ${
                  subscribed[index] ? "subscribed" : ""
                }`}
                onClick={() => handleSubscription(index)}
              >
                {subscribed[index] ? "구독 취소" : "관심 등록"}
              </button>
            </div>
          </div>
          <div className="tile-body">
            <span className="tile-body-text">{board.content}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TileView;
