import React from "react";
import { Link } from "react-router-dom";
import "../Css/SignIn.css";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userid: "",
      password: "",
      passwordC: "",
      mobile: "",
      email: "",
      idcheckmessage: "",
      errorMessage: "",
    };

    this.inputHandler = this.inputHandler.bind(this);
    this.handleSearchid = this.handleSearchid.bind(this);
  }

  inputHandler = (key) => (event) => {
    this.setState({
      [key]: event.target.value,
    });
    if (key === "passwordC") {
      setTimeout(() => {
        if (this.state.password === this.state.passwordC) {
          this.setState({ errorMessage: "ooooo" });
        } else if (this.state.password !== this.state.passwordC) {
          this.setState({ errorMessage: "xxxx" });
        }
      }, 100);
      setTimeout(() => {
        if (this.state.passwordC.length === 0) {
          this.setState({ errorMessage: "" });
        }
      }, 200);
    }
  };

  handleSearchid() {
    // id 중복 검사 axios 이용하여 작성
  }

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
                  onChange={this.inputHandler("userid")}
                  onBlur={this.handleSearchid}
                />
              </td>
            </tr>
            <tr>
              <td>PASSWORD</td>
              <td>
                <input
                  className="password"
                  type="password"
                  onChange={this.inputHandler("password")}
                />
              </td>
            </tr>
            <tr>
              <td>PASSWORD Check</td>
              <td>
                <input
                  className="passwordc"
                  type="password"
                  onChange={this.inputHandler("passwordC")}
                />
                <div>
                  {this.state.errorMessage !== ""
                    ? this.state.errorMessage
                    : ""}
                </div>
              </td>
            </tr>
            <tr>
              <td>Mobile</td>
              <td>
                <input
                  className="mobile"
                  type="text"
                  onChange={this.inputHandler("mobile")}
                />
              </td>
            </tr>
            <tr>
              <td>Email</td>
              <td>
                <input
                  className="email"
                  type="text"
                  onChange={this.inputHandler("email")}
                />
              </td>
            </tr>
            <tr className="SignIn">
              <td></td>
              <td>
                <Link to="/">
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

export default SignIn;
