import React from 'react';
import '../Css/Footer.css';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userid: '',
      sessionid: '',
      FriendsList: 'Friends List',
      chatList: 'Chat List',
      mypage: 'Mypage',
    };
  }

  componentDidMount() {
    this.setState({
      userid: this.props.userId,
      sessionid: this.props.sessionId,
    });
  }
  render() {
    return (
      <div className="footer">
        <div
          className="friends-list-tab"
          onClick={() =>
            this.props.history.push({
              pathname: '/friendsList',
              sessionid: this.state.sessionid,
              history: this.props.history,
            })
          }
        >
          <i className="fas fa-user-friends" /> {this.state.FriendsList}
        </div>
        <div
          className="chats"
          onClick={() =>
            this.props.history.push({
              pathname: '/chatList',
              userid: this.state.userid,
              sessionid: this.state.sessionid,
              history: this.props.history,
            })
          }
        >
          <i className="fas fa-comments"></i> {this.state.chatList}
        </div>
        <div
          className="mypage"
          onClick={() =>
            this.props.history.push({
              pathname: '/mypage',
              userid: this.state.userid,
              history: this.props.history,
              handleLogOut: this.props.handleLogOut,
            })
          }
        >
          <i className="fas fa-file"></i> {this.state.mypage}
        </div>
      </div>
      // <div className="footer">
      //   <div
      //     className="friends"
      //     onClick={() =>
      //       this.props.history.push({
      //         pathname: '/friendsList',
      //         sessionid: this.state.sessionid,
      //         history: this.props.history,
      //       })
      //     }
      //   >
      //     {this.state.FriendsList}
      //   </div>
      //   <div
      //     className="chats"
      //     onClick={() =>
      //       this.props.history.push({
      //         pathname: '/chatList',
      //         userid: this.state.userid,
      //         sessionid: this.state.sessionid,
      //         history: this.props.history,
      //       })
      //     }
      //   >
      //     {this.state.chatList}
      //   </div>
      //   <div
      //     className="mypage"
      //     onClick={() =>
      //       this.props.history.push({
      //         pathname: '/mypage',
      //         userid: this.state.userid,
      //         history: this.props.history,
      //       })
      //     }
      //   >
      //     {this.state.mypage}
      //   </div>
      // </div>
    );
  }
}
export default Footer;
