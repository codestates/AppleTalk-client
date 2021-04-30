import './App.css';
import './Clock.js';
//import Clock from './Clock.js';
import React from 'react';
import Tweet from './Tweet.js';
import io from 'socket.io-client';

const socket = io('http://localhost:8888');
//import Event from './test';

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <Clock />
//         <Tweet />
//         <Event />
//       </div>
//     );
//   }
// }
class App extends React.Component {
  componentWillMount() {
    socket.emit('join', 'receiver');
    socket.on('heejewake', (massage) => {
      // 클라이언트1이 누른 버튼-> 서버-> heejewake이벤트
      alert(massage); // 에서 메시지 hwi를 받는다
    });
  }
  render() {
    return (
      <div>
        <Tweet />
      </div>
    );
  }
}
// export default function App() {
//   return (
//     <div>
//       {/* <Clock /> */}
//       <Tweet />
//       {/* <Event /> */}
//     </div>
//   );
// }
export default App;
