import React from 'react';
import '../Css/Footer.css';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      footer: 'Footer ',
    };
  }
  render() {
    return (
      <div className="footer">
        <div className="content">{this.state.footer}</div>
      </div>
    );
  }
}
export default Footer;
