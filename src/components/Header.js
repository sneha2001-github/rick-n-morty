import React from 'react';
import { useAuth } from '../services/AuthService';
import './header.css';

function Header() {
  const { loggedIn, setLoggedIn } = useAuth();

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <div>
      <h1>Welcome</h1>
      {loggedIn && <button onClick={handleLogout}>Logout</button>}
    </div>
  );
}

export default Header;
