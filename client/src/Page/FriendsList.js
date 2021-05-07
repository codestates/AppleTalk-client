import React from 'react';
import Friends from '../Component/Friends';
import FoundFriends from '../Component/FoundFriends';
import axios from 'axios';
import '../Css/FriendsList.css';
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
    this.reload = this.reload.bind(this);
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
  reload(sessionId) {
    axios.get(`${server}/friend/list?id=${sessionId}`).then((response) => {
      this.setState({
        friends: [...response.data],
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
      <div className="Friends-List">
        <h1>Friends List</h1>
        <div className="linked-friends">
          {this.state.friends.map((friendsInfo, idx) => (
            <Friends
              history={this.props.history}
              sessionId={this.props.sessionId}
              friendsInfo={friendsInfo}
              key={idx}
              reload={this.reload}
            />
          ))}
        </div>

        <div className="found-friends">
          {this.state.foundInfo === '' ? (
            ''
          ) : (
            <FoundFriends
              friendsInfo={this.state.foundInfo}
              sessionId={this.state.sessionId}
              reload={this.reload}
            />
          )}
        </div>

        <div className="search">
          <input
            className="search-inputBox"
            type="text"
            onChange={this.handleOnChange}
          />
          <button className="search-inputButton" onClick={this.handleOnClick}>
            FIND
          </button>
        </div>
      </div>

      // <div className="FriendsList">
      //   <div className="search">
      //     <br />
      //     <br />
      //     <br />
      //     <br />
      //     <br />
      //     <br />
      //     <br />
      //     <input type="text" onChange={this.handleOnChange} />
      //     <button onClick={this.handleOnClick}>친구 찾기</button>
      //     <div className="result">
      //       {this.state.foundInfo === "" ? (
      //         ""
      //       ) : (
      //         <FoundFriends
      //           friendsInfo={this.state.foundInfo}
      //           sessionId={this.state.sessionId}
      //         />
      //       )}
      //     </div>
      //   </div>

      //   {this.state.friends.map((friendsInfo, idx) => (
      //     <Friends
      //       history={this.props.history}
      //       sessionId={this.props.sessionId}
      //       friendsInfo={friendsInfo}
      //       key={idx}
      //     />
      //   ))}
      // </div>
    );
  }
}

export default FriendsList;
