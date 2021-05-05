import React, { useEffect, useState } from 'react';

const Chats = ({ room }) => {
  const [roomInfo, setRoomInfo] = useState(room);

  return (
    <div className="room">
      {roomInfo}
      <button>입장하기</button>
    </div>
  );
};

export default Chats;
