import React from 'react';
import '../Css/Login.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
const server = process.env.REACT_APP_SERVER_URL;

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userid: '',
      password: '',
    };
    this.handleLoginBtn = this.handleLoginBtn.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleLoginBtn() {
    if (this.state.userid.length === 0) {
      alert('아이디 입력해주세요!');
    } else if (this.state.password.length === 0) {
      alert('비밀번호 입력해 주세요!');
    } else {
      axios
        .post(`${server}/user/login`, {
          userid: this.state.userid,
          password: this.state.password,
        })
        .then((response) => {
          if (response.status === 200) {
            this.props.handleLogin(response.data.id, response.data.user_id);
          } else if (response.status === 401) {
            alert('없는 아이디 또는 비밀번호 오류!');
          }
        });
    }
  }

  handleInput = (key) => (event) => {
    this.setState({
      [key]: event.target.value,
    });
  };
  render() {
    return (
      <div className="loginBox">
        <table id="logintable">
          <tbody>
            <tr>
              <td>ID</td>
              <td>
                <input
                  className="userid"
                  type="text"
                  onChange={this.handleInput('userid')}
                />
              </td>
            </tr>
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
            <tr className="login">
              <td></td>
              <td>
                <button onClick={this.handleLoginBtn}>Login</button>
              </td>
            </tr>
            <tr className="login">
              <td></td>
              <td>
                <Link to="./user">
                  <button>Sign In</button>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Login;
