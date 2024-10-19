import React, { useState } from 'react';
import styles from './loginForm.module.css'; // Import the CSS module
import { useNavigate} from 'react-router-dom';
import axios from 'axios';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const Navigate=useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Basic validation
    if (!username || !password) {
      setError('Username and password are required');
      return;
    }
    try{
      const prom=await axios.post("http://localhost:3005/login",{username,password});
      const token=prom.data;
  console.log(token);
      localStorage.setItem('jwt',token);
      Navigate('/Home');
    }
      catch{
        console.log('login not made');
      }
    } 

  return (
    <div className={styles.App}>
      
      <form onSubmit={handleSubmit} className={styles.loginForm}>
        <div className={styles.formGroup}>
          <h2 style={{color:"black",textAlign:"center"}}>LOGIN</h2>
          <label htmlFor="username" className={styles.formGroupLabel}>Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={styles.formGroupInput}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password" className={styles.formGroupLabel}>Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.formGroupInput}
            required
          />
        </div>
        {error && <p className={styles.errorMessage}>{error}</p>}
        <button type="submit" className={`${styles.button} ${styles.buttonHover}`}>Login</button>
      </form>
    </div>
  );
}

export default LoginForm;

