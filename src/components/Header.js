import React from 'react';
import { useAuth } from '../services/AuthService';
import Button from '@mui/material/Button';
import './header.css';

function Header() {
  const { loggedIn,setLoggedIn } = useAuth();
  const handleLogout = () => {
    setLoggedIn(false);
  };

 

  return (
    <div style={{height:"70px",display:"flex",justifyContent:"space-between",alignItems:"center",backgroundColor:"#eeeeee", boxshadow:"black",paddingLeft:"30px",paddingRight:"30px"}}>
      <h1 style={{color:"black"}}>Rick and Morty</h1>
      {loggedIn && < Button  variant="contained" onClick={handleLogout}>Logout</Button>}
    </div>
  );
}

export default Header;
