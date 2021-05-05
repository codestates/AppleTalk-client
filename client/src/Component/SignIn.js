import React from 'react';
import axios from 'axios';
import '../Css/SignIn.css';

const server = process.env.REACT_APP_SERVER_URL;
class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userid: '',
      username: '',
      password: '',
      passwordC: '',
      email: '',
      mobile: '',
      errorMessage: '',
    };
    this.inputHandler = this.inputHandler.bind(this);
    this.handleSubmitBtn = this.handleSubmitBtn.bind(this);
    //this.test = this.test.bind(this);
  }
  inputHandler = (key) => (event) => {
    this.setState({
      [key]: event.target.value,
    });
    if (key === 'passwordC') {
      setTimeout(() => {
        if (this.state.password === this.state.passwordC) {
          this.setState({ errorMessage: 'ooooo' });
        } else if (this.state.password !== this.state.passwordC) {
          this.setState({ errorMessage: 'xxxx' });
        }
      }, 100);
      setTimeout(() => {
        if (this.state.passwordC.length === 0) {
          this.setState({ errorMessage: '' });
        }
      }, 200);
    }
  };

  handleSubmitBtn() {
    if (this.state.userid.length === 0) {
      alert('아이디를 입력해 주세요');
    } else if (
      this.state.password.length === 0 ||
      this.state.password.length === 0
    ) {
      alert('비밀번호를 입력해 주세요');
    } else if (this.state.mobile.length === 0) {
      alert('핸드폰번호를 입력해 주세요');
    } else if (this.state.email.length === 0) {
      alert('E-mail을 입력해 주세요');
    } else if (this.state.username.length === 0) {
      alert('닉네임을 입력해 주세요!');
    } else {
      axios
        .post(`${server}/user/signup`, {
          userid: this.state.userid,
          username: this.state.username,
          password: this.state.password,
          email: this.state.email,
          mobile: this.state.mobile,
        })
        .then((response) => {
          if (response.status === 201) {
            alert('회원가입을 환영합니다!');
            this.props.history.push('/');
          } else {
            alert('다시작성해 주세요!');
          }
        });
    }
  }

  render() {
    return (
      <div className="signinBox">
        <table id="signinTable">
          <tbody>
            <tr>
              <td>ID</td>
              <td>
                <input
                  className="userid"
                  type="text"
                  onChange={this.inputHandler('userid')}
                  // onBlur={this.test}
                />
              </td>
            </tr>
            <tr>
              <td>PASSWORD</td>
              <td>
                <input
                  className="password"
                  type="password"
                  onChange={this.inputHandler('password')}
                />
              </td>
            </tr>
            <tr>
              <td>PASSWORD Check</td>
              <td>
                <input
                  className="passwordC"
                  type="password"
                  onChange={this.inputHandler('passwordC')}
                />
                <div>
                  {this.state.errorMessage !== ''
                    ? this.state.errorMessage
                    : ''}
                </div>
              </td>
            </tr>
            <tr>
              <td>NickName</td>
              <td>
                <input
                  className="Nickname"
                  type="text"
                  onChange={this.inputHandler('username')}
                />
              </td>
            </tr>
            <tr>
              <td>Mobile</td>
              <td>
                <input
                  className="mobile"
                  type="text"
                  onChange={this.inputHandler('mobile')}
                />
              </td>
            </tr>
            <tr>
              <td>Email</td>
              <td>
                <input
                  className="email"
                  type="text"
                  onChange={this.inputHandler('email')}
                />
              </td>
            </tr>
            <tr className="SignIn">
              <td></td>
              <td>
                <button onClick={this.handleSubmitBtn}>Sign In</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default SignIn;
