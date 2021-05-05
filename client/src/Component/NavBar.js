import React from 'react';
import '../Css/NavBar.css';

const NavBar = ({ history }) => {
  const handleClick = () => {
    history.push('/');
  };
  return (
    <div className="nav">
      <div className="title" onClick={handleClick}>
        Apple Talk
      </div>
    </div>
  );
};
export default NavBar;
