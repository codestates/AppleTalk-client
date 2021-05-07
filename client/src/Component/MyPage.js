import axios from 'axios';
import React from 'react';
import '../Css/MyPage.css';

const server = process.env.REACT_APP_SERVER_URL;

class MyPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trashpassword: '',
      password: '',
      mobile: '',
      email: '',
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmitBtn = this.handleSubmitBtn.bind(this);
  }
  componentDidMount() {
    axios
      .get(`${server}/user/info?sessionid=${this.props.location.userid}`)
      .then((response) => {
        this.setState({
          trashpassword: response.data.password,
          mobile: response.data.mobile,
          email: response.data.email,
        });
      });
  }

  handleInput = (key) => (event) => {
    this.setState({
      [key]: event.target.value,
    });
  };
  handleSubmitBtn() {
    if (this.state.trashpassword === this.state.password) {
      alert('이미 사용중인 password입니다');
    } else if (this.state.mobile.length === 0) {
      alert('핸드폰 번호를 입력해 주세요');
    } else if (this.state.email.length === 0) {
      alert('E-mail을 입력해 주세요');
    } else {
      axios
        .post(`${server}/user/change`, {
          userid: this.props.location.userid,
          password: this.state.password,
          mobile: this.state.mobile,
          email: this.state.email,
        })
        .then((response) => {
          if (response.status === 200) {
            alert('수정 완료! 로그아웃 되었습니다!');
            this.props.location.handleLogOut();
            this.props.history.push('/');
          }
        });
    }
  }
  render() {
    return (
      <div className="myPageBox">
        <section className="myPage-form">
          <h1>My Page</h1>
          <form action="">
            <div className="int-area">
              <input
                onChange={this.handleInput('password')}
                type="password"
                name="pw
              "
                id="pw"
                autoComplete="off"
                required
              ></input>
              <label htmlFor="pw">Password</label>
            </div>

            <div className="myPage-int-area">
              <input
                onChange={this.handleInput('mobile')}
                type="text"
                name="Mobile
              "
                value={this.state.mobile}
                id="Mobile"
                autoComplete="off"
                required
              ></input>
              <label htmlFor="pw">Mobile</label>
            </div>

            <div className="myPage-int-area">
              <input
                onChange={this.handleInput('email')}
                type="text"
                name="Email
              "
                value={this.state.email}
                id="Email"
                autoComplete="off"
                required
              ></input>
              <label htmlFor="Email">Email</label>
            </div>
          </form>

          <div className="myPage-caption">
            <button onClick={this.handleSubmitBtn}>Modify</button>
          </div>
          <div className="myPage-caption">
            <button
              onClick={() => {
                this.props.location.handleLogOut();
                this.props.history.push('/');
              }}
            >
              Logout
            </button>
          </div>
        </section>
      </div>

      // <div>
      //   <div className="myPageBox">
      //     <table id="myPageTable">
      //       <tbody>
      //         <tr>
      //           <td>PASSWORD</td>
      //           <td>
      //             <input
      //               className="password"
      //               type="password"
      //               onChange={this.handleInput('password')}
      //             />
      //           </td>
      //         </tr>
      //         <tr>
      //           <td>Mobile</td>
      //           <td>
      //             <input
      //               className="mobile"
      //               type="text"
      //               onChange={this.handleInput('mobile')}
      //               value={this.state.mobile}
      //             />
      //           </td>
      //         </tr>
      //         <tr>
      //           <td>Email</td>
      //           <td>
      //             <input
      //               className="email"
      //               type="text"
      //               onChange={this.handleInput('email')}
      //               value={this.state.email}
      //             />
      //           </td>
      //         </tr>
      //         <tr className="Modify">
      //           <td></td>
      //           <td>
      //             <button onClick={this.handleSubmitBtn}>Modify</button>
      //           </td>
      //         </tr>
      //       </tbody>
      //     </table>
      //   </div>
      // </div>
    );
  }
}

export default MyPage;
