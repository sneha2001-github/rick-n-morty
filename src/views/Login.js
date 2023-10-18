import React , { useState,useRef,useEffect}from 'react';
import { useAuth } from '../services/AuthService';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
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
    <div  style={{display:"flex",justifyContent:"center" ,height:"100vh" ,alignItems:"center"}}>

<div className='form' > 


<Grid  container spacing={2} display={'flex'} flexDirection={'column'} margin={"auto"} maxWidth={"400px"} >
  <Grid  item xs={12} >
    <TextField className='input' fullWidth variant='outlined' ref={emailInputRef} id="outlined-basic" label="email"  type='text' value={email} onChange={(e) => setEmail(e.target.value)}/>
  </Grid>
  <Grid item xs={12}>
  <TextField  fullWidth variant='outlined' id="outlined-basic" label="password" type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
  </Grid>
  <Grid item xs={12}>
  <Button fullWidth variant="conatined" onClick={handleLogin}>Login</Button>
  </Grid>
  </Grid>
      </div>
    </div>
    
  );
}

export default Login