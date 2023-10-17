import React from 'react';
import Header from './components/Header';
import MainPage from './views/MainPage';
import { AuthProvider } from './services/AuthService';


function App() {

  return (
    <AuthProvider>
      <div className="App">
        <Header />
       
        <MainPage />
      </div>
    </AuthProvider>
  );
}

export default App;

