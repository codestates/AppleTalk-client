import React from 'react';
import '../Css/Message.css';

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: this.props.message,
      key: this.props.idx,
    };
  }
  render() {
    return (
      <div className="send-msg-area">
        <i className="icon" class="fas fa-user-circle fa-3x"></i>
        {this.props.myid === this.props.writer ? (
          <div className="send-msg">{this.state.message}</div>
        ) : (
          <div className="receive-msg">{this.state.message}</div>
        )}
      </div>
    );
  }
}

export default Message;
