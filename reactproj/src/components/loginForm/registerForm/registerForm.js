import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import axios from 'axios';
import styles from './registerForm.module.css';

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
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
      const prom=await axios.post("http://localhost:3005/register",{username,password});
      
  
    ;
      Navigate('/');
    }
      catch{
        console.log('login not made');
      }
    } 

  return (
    <div className={styles.App}>
      <div className={styles.container} >
      <h1>NYAY</h1>
      <form onSubmit={handleSubmit} className={styles.loginForm}>
      <div className={styles.formGroup}>
          <h2 style={{color:"black",textAlign:"center"}}>Register</h2>
          <label htmlFor="username" className={styles.formGroupLabel}>email:</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.formGroupInput}
            required
          />
        </div>
        <div className={styles.formGroup}>
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
        
      
        <button type="submit"className={styles.register}>Register</button>
       
      </form>
      </div>
    </div>
  );
  
};

export default RegisterForm;
