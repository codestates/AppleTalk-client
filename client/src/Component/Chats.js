import React, { useEffect, useState } from "react";
import "../Css/Chats.css";

const Chats = ({ room }) => {
  const [roomInfo, setRoomInfo] = useState(room);

  return (
    <div className="room">
      <div className="room-name">{roomInfo} ROOMINFO</div>
      <button className="room-enter-btn">ENTER</button>
    </div>
  );
};

export default Chats;
