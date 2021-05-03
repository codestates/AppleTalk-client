import React from 'react';
import NavBar from './Component/NavBar';
import Footer from './Component/Footer';
import Login from './Component/Login';
import SignIn from './Component/SignIn';
import MyPage from './Component/MyPage';
import ChatRoom from './Page/ChatRoom';
import { Route, Switch } from 'react-router-dom';
import FriendsList from './Page/FriendsList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sessionId: '',
      isLogin: false,
      navTitle: '',
    };
    this.setNavTitle = this.setNavTitle.bind(this);
    this.isLogin = this.isLogin.bind(this);
  }
  isLogin(userid) {
    this.setState({
      isLogin: true,
      sessionId: userid,
    });
  }
  setNavTitle(title) {
    this.setState({ navTitle: title });
  }
  render() {
    return (
      <div className="container">
        <NavBar navTitle={this.state.navTitle} />
        {this.state.isLogin === true ? (
          ((<FriendsList sessionId={this.state.sessionId} />),
          (<Footer setNavTitle={this.setNavTitle} />))
        ) : (
          <Route
            path="/"
            render={() => <Login isLogin={this.isLogin} />}
            exact
          />
        )}
        <Route path="/user" component={SignIn} exact />
        {/* <Route path="/chat" component={Chat} exact /> */}
      </div>
    );
  }
}

export default App;
