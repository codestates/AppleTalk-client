import React from 'react';
import Message from '../Component/Message';

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
  handleInputMessage(event) {
    this.setState({
      message: event.target.value,
    });
  }
  handleBtnClick(message) {
    this.setState({
      messageList: [...this.state.messageList, this.state.message],
    });
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
