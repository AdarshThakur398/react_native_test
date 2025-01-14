import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  const handleSearchClick = () => {
    navigate('/search'); 
  };

  return (
    <div className="Navbar">
      <div className="Navbar-left">
        <ul>
          <li>Home</li>
        </ul>
      </div>
      <div className="Navbar-right">
        <ul>
          <li onClick={handleSearchClick}>Search</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
