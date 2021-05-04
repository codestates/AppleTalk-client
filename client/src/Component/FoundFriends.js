import React, { useState } from 'react';
import axios from 'axios';
import '../Css/FriendsList.css';
import io from 'socket.io-client';
const server = process.env.REACT_APP_SERVER_URL;
// const socketServer = process.env.REACT_APP_SOCKET_URL;
// const socket = io(socketServer);

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
  }
  componentDidMount() {
    this.setState({
      myid: this.props.sessionId,
      friendsInfo: this.props.friendsInfo,
    });
  }
  render() {
    return (
      <div className="friendsBox">
        <div className="userId">{this.state.friendsInfo.user_id}</div>
        <button className="chatBtn" onClick={this.handleOnClick}>
          친구추가
        </button>
      </div>
    );
  }
}

export default FriendsList;

// imgUploader() {
//   const [imageUrl, setImageUrl] = useState("디폴트 이미지 주소");
//   const setFile = (e) => {
//     if (e.target.files[0]) {
//       const img = new FormData();
//       img.append("file", e.target.files[0]);
//       axios
//         .post("url", img)
//         .then((res) => {
//           setImageUrl(res.data);
//         })
//         .catch((err) => {
//           console.error(err);
//         });
//   };
//   프로필 이미지
// }
