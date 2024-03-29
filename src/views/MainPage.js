import React from 'react';
import { useAuth } from '../services/AuthService';
import RickAndMorty from '../services/RickandMorty';
import Login from './Login';


function MainPage() {
  const { loggedIn } = useAuth();

  return (
    <div>
      {loggedIn ? <RickAndMorty /> : <Login />}
    </div>
  );
}

export default MainPage;
