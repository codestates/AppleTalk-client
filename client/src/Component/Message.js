import React from 'react';

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: this.props.message,
      key: this.props.idx,
    };
  }
  render() {
    return <div>{this.state.message}</div>;
  }
}

export default Message;
