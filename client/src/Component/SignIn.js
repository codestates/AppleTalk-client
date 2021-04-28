import React from 'react';
import { Link } from 'react-router-dom';
import '../Css/SignIn.css';

class SignIn extends React.Component {
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
            <tr>
              <td>PASSWORD Check</td>
              <td>
                <input className="password" type="password" />
              </td>
            </tr>
            <tr>
              <td>Mobile</td>
              <td>
                <input className="mobile" type="text" />
              </td>
            </tr>
            <tr>
              <td>Email</td>
              <td>
                <input className="email" type="text" />
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
