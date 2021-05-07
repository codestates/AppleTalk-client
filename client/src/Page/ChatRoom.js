import React from 'react';
import Message from '../Component/Message';
import axios from 'axios';
import io from 'socket.io-client';
import '../Css/ChatRoom.css';

let socket;
const server = process.env.REACT_APP_SERVER_URL;

class ChatRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      roomNum: '',
      message: '',
      logData: [],
      newMessage: [],
    };
    this.handleInputMessage = this.handleInputMessage.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleOutClick = this.handleOutClick.bind(this);
  }
  //방 접속 구현
  async componentWillMount() {
    // socket = io('http://localhost:8888/testnamespace');
    let roomNum;
    await axios
      .post(`${server}/chat/makeroom`, {
        userid: this.props.location.datas.myid,
        friendid: this.props.location.datas.friendId,
      })
      .then((response) => {
        roomNum = response.data.roomid;
      });
    await axios
      .get(`${server}/chat/chatlist?roomid=${roomNum}`)
      .then((response) => {
        this.setState({
          logData: [...this.state.logData, ...response.data.data],
          roomNum: response.data.data.room_id,
        });
      });

    socket = io(`${server}/${roomNum}`);
    await socket.emit('join', roomNum);
    socket.on('message', (obj) => {
      this.setState({
        newMessage: [...this.state.newMessage, obj],
      });
    });
  }
  handleInputMessage(event) {
    this.setState({
      message: event.target.value,
    });
  }
  handleBtnClick() {
    let message = this.state.message;
    let obj = {
      content: message,
      user_id: this.props.location.datas.myid,
      room_id: this.state.roomNum,
    };
    socket.emit('message', obj);
  }
  handleOutClick() {
    socket.disconnect();
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="chatroom-wrap">
        <div className="message-output-area">
          {this.state.newMessage.map((message, idx) => (
            <Message
              myid={this.props.location.datas.myid}
              message={message.content}
              writer={message.user_id}
              key={idx}
            />
          ))}
          {this.state.logData.map((message, idx) => (
            <Message
              myid={this.props.location.datas.myid}
              message={message.content}
              writer={message.user_id}
              key={idx}
            />
          ))}
        </div>

        <div className="message-input-area">
          <input
            className="message-inputbox"
            type="text"
            onChange={this.handleInputMessage}
          />
          <button className="message-send-btn" onClick={this.handleBtnClick}>
            SEND
          </button>
          <button className="exit-room-btn" onClick={this.handleOutClick}>
            EXIT
          </button>
        </div>
      </div>
    );
  }
}

export default ChatRoom;
