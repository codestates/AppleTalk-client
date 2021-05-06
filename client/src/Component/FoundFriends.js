import React from 'react';
import axios from 'axios';
import '../Css/FoundFriends.css';

const server = process.env.REACT_APP_SERVER_URL;

class FriendsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myid: '',
      friendsInfo: '',
    };
    this.handleOnClick = this.handleOnClick.bind(this);
  }
  async handleOnClick() {
    await axios.post(`${server}/friend/add`, {
      userid: this.state.myid,
      friendid: this.state.friendsInfo.id,
    });
    this.props.reload(this.state.myid);
  }
  componentDidMount() {
    this.setState({
      myid: this.props.sessionId,
      friendsInfo: this.props.friendsInfo,
    });
  }
  render() {
    return (
      <div className="found-friends-wrap">
        <div className="found-friends-Box">
          <div className="found-friends-userId">
            {this.state.friendsInfo.user_id}
          </div>
          <button
            className="found-friends-chatBtn"
            onClick={this.handleOnClick}
          >
            ADD
          </button>
        </div>
      </div>
      // <div className="friendsBox">
      //   <div className="userId">{this.state.friendsInfo.user_id}</div>
      //   <button className="chatBtn" onClick={this.handleOnClick}>
      //     친구추가
      //   </button>
      // </div>
    );
  }
}

export default FriendsList;
