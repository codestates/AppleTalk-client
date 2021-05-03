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
    axios
      .get(`${server}/friends/list/${this.props.sessionId}`)
      .then((response) => {
        this.setState = {
          friends: [...this.state.friends, response.friends],
        };
      });
  }
  render() {
    return (
      <div>
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
