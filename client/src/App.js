import React from 'react';
import NavBar from './Component/NavBar';
import Footer from './Component/Footer';
import Login from './Component/Login';
import SignIn from './Component/SignIn';
import { Route } from 'react-router-dom';

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
      <div className="container">
        <NavBar navTitle={this.state.navTitle} />
        <Login />
        <Route path="/user" component={SignIn} exact />
        <Footer setNavTitle={this.setNavTitle} />
      </div>
    );
  }
}

export default App;
