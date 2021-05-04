import React from 'react';
import Friends from '../Component/Friends';
import axios from 'axios';
const server = process.env.REACT_APP_SERVER_URL;

class FriendsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
    };
  }
  componentDidMount() {
    let sessionId;
    if (this.props.location) {
      sessionId = this.props.location.sessionid;
    } else {
      sessionId = this.props.sessionId;
    }
    axios.get(`${server}/friends/list/${sessionId}`).then((response) => {
      this.setState = {
        friends: [...this.state.friends, response.friends],
      };
    });
  }
  render() {
    return (
      <div className="FriendsList">
        {this.state.friends.map((friendsInfo, idx) => (
          <Friends
            sessienId={this.props.sessienId}
            friendsInfo={friendsInfo}
            key={idx}
          />
        ))}
      </div>
    );
  }
}

export default FriendsList;
