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
      .get(`${server}/user/info/${this.props.sessionId}`)
      .then((response) => response.json())
      .then((datas) => {
        this.setState({
          trashpassword: datas.password,
          mobile: datas.password,
          email: datas.email,
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
        .put(`${server}/user/update`, {
          password: this.state.password,
          mobile: this.state.mobile,
          email: this.state.email,
        })
        .then((response) => response.json())
        .then(console.log('업데이트후 후처리 해줘야함 '));
    }
  }
  render() {
    return (
      <div>
        <div className="myPageBox">
          <table id="myPageTable">
            <tbody>
              <tr>
                <td>PASSWORD</td>
                <td>
                  <input
                    className="password"
                    type="password"
                    onChange={this.handleInput('password')}
                  />
                </td>
              </tr>
              <tr>
                <td>Mobile</td>
                <td>
                  <input
                    className="mobile"
                    type="text"
                    onChange={this.handleInput('mobile')}
                    value={this.state.mobile}
                  />
                </td>
              </tr>
              <tr>
                <td>Email</td>
                <td>
                  <input
                    className="email"
                    type="text"
                    onChange={this.handleInput('email')}
                    value={this.state.email}
                  />
                </td>
              </tr>
              <tr className="Modify">
                <td></td>
                <td>
                  <button onClick={this.handleSubmitBtn}>Modify</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default MyPage;
