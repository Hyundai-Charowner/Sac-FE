import React, { useState, useEffect } from "react";
import "../../styles/TileView.css";
import axiosInstance from "../../utils/api.js";

const TileView = ({ boards }) => {
  const [subscribed, setSubscribed] = useState([]);

  useEffect(() => {
    const fetchLikeList = async () => {
      try {
        const response = await axiosInstance.get("user/boards");
        const likeList = response.data;
        let stack = 0;

        // Update subscription state based on the presence of boardId in likeList
        const updatedSubscribed = boards.map((board) =>
          likeList.hasOwnProperty(board.boardId),
          stack++
        );

        console.log("likeList:", likeList);
        console.log("stack:", stack);

        setSubscribed(updatedSubscribed);
      } catch (error) {
        console.error("Failed to fetch likeList data:", error);
      }
    };

    fetchLikeList();
  }, [boards]); // Run the effect when boards change


  const handleSubscription = (index) => {
    setSubscribed((prevSubscribed) => {
      const newSubscribed = [...prevSubscribed];
      newSubscribed[index] = !newSubscribed[index]; // Toggle subscription status
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
