import React from 'react';
import '../Css/Login.css';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  render() {
    return (
      <div className="loginBox">
        <table id="logintable">
          <tbody>
            <tr>
              <td>ID</td>
              <td>
                <input className="userid" type="text" />
              </td>
            </tr>
            <tr>
              <td>PASSWORD</td>
              <td>
                <input className="password" type="password" />
              </td>
            </tr>
            <tr className="login">
              <td></td>
              <td>
                <button>Login</button>
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
