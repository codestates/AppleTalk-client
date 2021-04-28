import React from 'react';
import '../Css/Footer.css';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      FriendsList: 'Friends List',
      chatList: 'Chat List',
      mypage: 'Mypage',
    };
    this.changeTitle = this.changeTitle.bind(this);
  }
  changeTitle(event) {
    this.props.setNavTitle(event.target.innerText);
  }
  render() {
    return (
      <div className="footer">
        <div className="friends" onClick={this.changeTitle}>
          {this.state.FriendsList}
        </div>
        <div className="chats" onClick={this.changeTitle}>
          {this.state.chatList}
        </div>
        <div className="mypage" onClick={this.changeTitle}>
          {this.state.mypage}
        </div>
      </div>
    );
  }
}
export default Footer;
