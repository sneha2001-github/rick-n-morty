import React from 'react';
import { useAuth } from '../services/AuthService';
import RickAndMorty from '../components/Api';
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
