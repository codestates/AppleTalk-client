import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Chats from '../Component/Chats';
const server = process.env.REACT_APP_SERVER_URL;

const ChatList = (props) => {
  const [chatLists, setChatLists] = useState([]);

  useEffect(() => {
    axios
      .get(`${server}/friend/list?userid=${props.userid}`)
      .then((response) => {
        setChatLists(response.data.friendsList);
      });
  });

  return (
    <div className="chatList">
      {chatLists.map((room, idx) => (
        <Chats room={room} key={idx} />
      ))}
    </div>
  );
};
export default ChatList;
