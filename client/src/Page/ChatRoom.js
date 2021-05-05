import React from 'react';
import Message from '../Component/Message';
import axios from 'axios';
import io from 'socket.io-client';

let socket;
const server = process.env.REACT_APP_SERVER_URL;

class ChatRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      messageList: [],
    };
    this.handleInputMessage = this.handleInputMessage.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
  }
  //방 접속 구현
  async componentWillMount() {
    socket = io('http://localhost:8888');
    let roomNum;
    await axios
      .post(`${server}/chat/makeroom`, {
        userid: this.props.location.datas.myid,
        friendid: this.props.location.datas.friendId,
      })
      .then((response) => (roomNum = response.data.roomid.room_id));

    await socket.emit('join', roomNum);
    socket.on('message', (message) => {
      this.setState({
        messageList: [...this.state.messageList, message],
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
    socket.emit('message', message);
  }
  render() {
    return (
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <input type="text" onChange={this.handleInputMessage} />
        <button onClick={this.handleBtnClick}>메세지 전송</button>
        {this.state.messageList.map((message, idx) => (
          <Message message={message} key={idx} />
        ))}
      </div>
    );
  }
}

export default ChatRoom;
