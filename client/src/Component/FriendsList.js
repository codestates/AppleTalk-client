import React, { useState } from "react";
import "../Css/FriendsList.css";
// import axios from "axios";

class FriendsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  imgUploader() {
    // const [imageUrl, setImageUrl] = useState("디폴트 이미지 주소");
    // const setFile = (e) => {
    //   if (e.target.files[0]) {
    //     const img = new FormData();
    //     img.append("file", e.target.files[0]);
    //     axios
    //       .post("url", img)
    //       .then((res) => {
    //         setImageUrl(res.data);
    //       })
    //       .catch((err) => {
    //         console.error(err);
    //       });
    // };
    // 프로필 이미지
  }

  render() {
    return (
      <div className="friendsBox">
        <div className="profileImg">프사</div>
        <div className="userId">userId</div>
        <button className="chatBtn">chat</button>
      </div>
    );
  }
}

export default FriendsList;
