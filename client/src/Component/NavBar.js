import React from 'react';
import '../Css/NavBar.css';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Apple Talk',
    };
  }
  render() {
    return (
      <div className="nav">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <div className="title">
            {this.props.navTitle === ''
              ? this.state.title
              : this.props.navTitle}
          </div>
        </Link>
      </div>
    );
  }
}
export default NavBar;
