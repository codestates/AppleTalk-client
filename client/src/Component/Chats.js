import React, { useEffect, useState } from 'react';
import '../Css/Chats.css';

const Chats = ({ room, userid, friendsid, history }) => {
  const [roomInfo, setRoomInfo] = useState(room);
  const handleBtn = () => {
    history.push({
      pathname: '/chattingRoom',
      datas: {
        myid: userid,
        friendId: friendsid,
      },
    });
  };
  return (
    <div className="room">
      <div className="room-name">{roomInfo}</div>
      <button className="room-enter-btn" onClick={handleBtn}>
        ENTER
      </button>
    </div>
  );
};

export default Chats;
