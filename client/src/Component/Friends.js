import React from 'react';
import axios from 'axios';
import '../Css/FriendsList.css';

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
    this.handleDeleteBtn = this.handleDeleteBtn.bind(this);
    this.handleChatBtn = this.handleChatBtn.bind(this);
  }
  componentDidMount() {
    this.setState({
      myid: this.props.sessionId,
      friendsInfo: this.props.friendsInfo,
    });
  }
  async handleChatBtn() {
    this.props.history.push({
      pathname: '/chattingRoom',
      datas: {
        myid: this.state.myid,
        friendId: this.state.friendsInfo.friend_id,
      },
    });
  }
  async handleDeleteBtn() {
    await axios.post(`${server}/friend/remove/`, {
      userid: this.state.myid,
      friendid: this.state.friendsInfo.friend_id,
    });
  }
  render() {
    return (
      <div className="friendsBox">
        <div className="userId">{this.state.friendsInfo.user_name}</div>
        <button className="chatBtn" onClick={this.handleChatBtn}>
          chat
        </button>
        <div className="delete" onClick={this.handleDeleteBtn}>
          x
        </div>
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
