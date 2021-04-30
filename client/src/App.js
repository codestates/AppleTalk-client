import React from 'react';
import NavBar from './Component/NavBar';
import Footer from './Component/Footer';
import Login from './Component/Login';
import SignIn from './Component/SignIn';
import MyPage from './Component/MyPage';
import ChatRoom from './Page/ChatRoom';
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
        <Route path="/" component={Login} exact />
        <Route path="/user" component={SignIn} exact />
        <Route path="/mypage" component={MyPage} exact />
        <Route Path="/chattingRoom" render={() => <ChatRoom />} exact />
        {/* <Route path="/chat" component={Chat} exact /> */}
        <Footer setNavTitle={this.setNavTitle} />
      </div>
    );
  }
}

export default App;
