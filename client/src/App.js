import React from 'react';
import NavBar from './Component/NavBar';
import Footer from './Component/Footer';
import './App.css';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navTitle: '',
    };
    this.setNavTitle = this.setNavTitle.bind(this);
  }
  setNavTitle(title) {
    this.setState({ navTitle: title });
  }
  render() {
    return (
      <div>
        <NavBar navTitle={this.state.navTitle} />
        <Footer setNavTitle={this.setNavTitle} />
      </div>
    );
  }
}

export default App;
