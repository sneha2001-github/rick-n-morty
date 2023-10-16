import React , { useState,useRef,useEffect}from 'react';
import { useAuth } from '../services/AuthService';
import './login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setLoggedIn } = useAuth();
    const emailInputRef = useRef();
  
    const handleLogin = () => {
      if (email.includes('@') && password.length >= 7) {
        setLoggedIn(true);
      }
    };

    useEffect(() => {
        emailInputRef.current.focus();
      }, []);

  return (
    <div>

<div className='form'> 
      <input className='input'
        type="text"
        ref={emailInputRef}
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input className='input'
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button  className ='button'onClick={handleLogin}>Login</button>
      </div>
    </div>
    
  );
}

export default Login