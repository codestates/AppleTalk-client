import React, { useState } from 'react';
import NavBar from './Component/NavBar';
import Footer from './Component/Footer';
import Login from './Component/Login';
import SignIn from './Component/SignIn';
import MyPage from './Component/MyPage';
import ChatList from './Page/ChatList';
import FriendsList from './Page/FriendsList';
import { Route, useHistory } from 'react-router-dom';

const App = (props) => {
  const [sessionId, setSessionId] = useState();
  const [isLogin, setLogin] = useState(false);
  const [userId, setUserId] = useState();
  const history = useHistory();

  const handleLogin = (sessionId, userId) => {
    setSessionId(sessionId);
    setUserId(userId);
    setLogin(true);
  };

  return (
    <div className="container">
      <NavBar history={history} />
      <Route
        exact
        path="/"
        render={
          isLogin
            ? () => <FriendsList sessionId={sessionId} />
            : () => <Login handleLogin={handleLogin} />
        }
      />
      {isLogin ? (
        <Footer userId={userId} sessionId={sessionId} history={history} />
      ) : (
        ''
      )}
      <Route exact path="/chatList" component={ChatList} />
      <Route exact path="/friendsList" component={FriendsList} />
      <Route exact path="/user" component={SignIn} />
      <Route exact path="/mypage" component={MyPage} />
    </div>
  );
};

export default App;
