import React from 'react';
import '../Css/NavBar.css';

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
        <div className="title">{this.state.title}</div>
      </div>
    );
  }
}
export default NavBar;
