import React from "react";
import "../Css/NavBar.css";
import { Link, withRouter } from "react-router-dom";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Apple Talk",
    };
  }

  render() {
    return (
      <div className="nav">
        <Link to="/chat">
          <div>socket IO test</div>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="title">
            {this.props.navTitle === ""
              ? this.state.title
              : this.props.navTitle}
          </div>
        </Link>
      </div>
    );
  }
}
export default withRouter(NavBar);
