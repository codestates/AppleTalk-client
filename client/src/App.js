import React from 'react';
import NavBar from './Component/NavBar';
import Footer from './Component/Footer';
import './App.css';
class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <Footer />
      </div>
    );
  }
}

export default App;
