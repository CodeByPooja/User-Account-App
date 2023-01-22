import React from "react";
import chatIcon from "./../../assets/message-square.svg";
import arrowIcon from "./../../assets/chevron-up.svg";

const Chats = () => {
  return (
    <div className="bg-blue-700 rounded-t-lg px-2 py-1">
      <div className="flex items-center justify-between">
        <div className="flex">
          <img
            src={chatIcon}
            style={{ transform: "rotateY(180deg)" }}
            alt="chat-icon"
          />
          <p
            className="text-xs text-white opacity-80 px-1"
            style={{ fontSize: "10px" }}
          >
            Chats
          </p>
        </div>
        <img src={arrowIcon} alt="arrow-icon" />
      </div>
    </div>
  );
};

export default Chats;
