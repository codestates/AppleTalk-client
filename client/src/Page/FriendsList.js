import React from 'react';
import Friends from '../Component/Friends';
import FoundFriends from '../Component/FoundFriends';
import axios from 'axios';
const server = process.env.REACT_APP_SERVER_URL;

class FriendsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      friendId: '',
      foundInfo: '',
      sessionId: '',
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }
  componentDidMount() {
    let sessionId;
    if (this.props.location) {
      sessionId = this.props.location.sessionid;
      this.setState({ sessionId: sessionId });
    } else {
      sessionId = this.props.sessionId;
      this.setState({ sessionId: sessionId });
    }
    axios.get(`${server}/friend/list?id=${sessionId}`).then((response) => {
      this.setState({
        friends: [...this.state.friends, ...response.data],
      });
    });
  }
  handleOnChange(event) {
    this.setState({
      friendId: event.target.value,
    });
  }
  async handleOnClick() {
    await axios
      .get(`${server}/user/info?sessionid=${this.state.friendId}`)
      .then((response) =>
        this.setState({
          foundInfo: response.data,
        })
      );
  }
  render() {
    return (
      <div className="FriendsList">
        <div className="search">
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <input type="text" onChange={this.handleOnChange} />
          <button onClick={this.handleOnClick}>친구 찾기</button>
          <div className="result">
            {this.state.foundInfo === '' ? (
              ''
            ) : (
              <FoundFriends
                friendsInfo={this.state.foundInfo}
                sessionId={this.state.sessionId}
              />
            )}
          </div>
        </div>
        <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
        {this.state.friends.map((friendsInfo, idx) => (
          <Friends
            history={this.props.history}
            sessionId={this.props.sessionId}
            friendsInfo={friendsInfo}
            key={idx}
          />
        ))}
      </div>
    );
  }
}

export default FriendsList;
