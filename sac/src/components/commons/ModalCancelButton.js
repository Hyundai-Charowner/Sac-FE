// ModalCancelButton.js

import React from "react";
import "../../styles/ModalCancelButton.css";

function ModalCancelButton({ onClick }) {
    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    };

    return (
        <div className="cancel-button" onClick={handleClick}>
            닫기
        </div>
    );
}

export default ModalCancelButton;
