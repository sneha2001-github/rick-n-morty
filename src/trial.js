import React, { useState } from 'react';
import { useLogin, useAutoFocus } from './LoginContext';

function LoginPage() {
  const { isLoggedIn, login } = useLogin();
  const emailInputRef = useAutoFocus();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email && email.includes('@') && password.length >= 7) {
      login(email, password);
    }
  };

  return (
    <div>
      {isLoggedIn ? (
        <p>You are logged in.</p>
      ) : (
        <div>
          <input
            ref={emailInputRef}
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
}

export default LoginPage;

