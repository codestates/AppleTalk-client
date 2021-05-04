import React, { useState } from 'react';
import '../Css/FriendsList.css';
import io from 'socket.io-client';

// const socketServer = process.env.REACT_APP_SOCKET_URL;
// const socket = io(socketServer);

class FriendsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      username: this.props.username,
    };
    this.handleChatBtn = this.handleChatBtn.bind(this);
  }
  handleChatBtn() {
    // socket.emit('join', this.props.sessienId);
    // this.props.history.push('/chatRoom');
  }
  render() {
    return (
      <div className="friendsBox">
        <div className="profileImg">프사</div>
        <div className="userId">{this.state.username}</div>
        <button className="chatBtn" onClick={this.handleChatBtn}>
          chat
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
