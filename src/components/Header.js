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
      {loggedIn &&<button onClick={handleLogout}>Logout</button>}
  
      <h1>Welcome</h1>
    </div>
  );
}

export default Header;
