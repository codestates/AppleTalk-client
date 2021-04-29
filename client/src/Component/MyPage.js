import React from "react";
import "../Css/MyPage.css";

class MyPage extends React.Component {
  render() {
    return (
      <div className="myPageBox">
        <table id="myPageTable">
          <tbody>
            <tr>
              <td>PASSWORD</td>
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
            <tr className="Modify">
              <td></td>
              <td>
                <button>Modify</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default MyPage;
