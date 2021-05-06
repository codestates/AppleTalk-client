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
      message: '',
      messageList: [],
    };
    this.handleInputMessage = this.handleInputMessage.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleOutClick = this.handleOutClick.bind(this);
  }
  //방 접속 구현
  async componentWillMount() {
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
          messageList: [...this.state.messageList, ...response.data.data],
        });
      });

    socket = io(`${server}/${roomNum}`);
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
  handleOutClick() {
    socket.emit('disconnection', this.props.location.datas.myid);
    this.props.history.push('/');
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
        <button onClick={this.handleOutClick}>방나가기</button>
        {this.state.messageList.map((message, idx) => (
          <Message
            myid={this.props.location.datas.myid}
            message={message.content}
            writer={message.user_id}
            key={idx}
          />
        ))}
      </div>
    );
  }
}

export default ChatRoom;
