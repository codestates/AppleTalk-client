import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Chats from '../Component/Chats';
import '../Css/ChatList.css';

const server = process.env.REACT_APP_SERVER_URL;

const ChatList = (props) => {
  const [chatLists, setChatLists] = useState([]);

  useEffect(() => {
    axios
      .get(`${server}/chat/roomlist?userId=${props.location.sessionid}`)
      .then((response) => {
        setChatLists(response.data.roomList);
      });
  }, []);

  return (
    <div className="chatList">
      {chatLists.map((room, idx) => (
        <Chats
          room={room.roomname}
          friendsid={room.friend_id}
          userid={room.user_id}
          history={props.history}
          key={idx}
        />
      ))}
    </div>
  );
};
export default ChatList;
