import React, { useState } from 'react';
import styles from './loginForm.module.css'; // Import the CSS module
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState(''); // State for role selection
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Basic validation
    if (!username || !password || !role) {
      alert('Username, password, and role are required');
      return;
    }

    try {
      const response = await axios.post("http://localhost:3005/login", { username, password, role });
      const token = response.data;
      console.log(token);
      localStorage.setItem('jwt', token);
      navigate('/Home');
    } catch {
      console.log('Login failed');
    }
  };

  return (
    <div className={styles.App}>
      <div className={styles.container}>
        <h1>NYAY</h1>
        <form onSubmit={handleSubmit} className={styles.loginForm}>
          <div className={styles.formGroup}>
            <h2 style={{ color: "black", textAlign: "center" }}>LOGIN</h2>
            <label htmlFor="username" className={styles.formGroupLabel}>Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={styles.formGroupInput}
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
            />
          </div>
          
          {/* Radio buttons for role selection */}
          <div className={styles.formGroup}>
            <label className={styles.formGroupLabel}>Role:</label>
            <div>
              <label className={styles.label}>
                <input
                  type="radio"
                  value="Citizen"
                  checked={role === 'Citizen'}
                  onChange={(e) => setRole(e.target.value)}
                />
                Citizen
              </label>
              <label className={styles.label}>
                <input
                  type="radio"
                  value="Police"
                  checked={role === 'Police'}
                  onChange={(e) => setRole(e.target.value)}
                />
                Police
              </label>
              <label >
                <input
                  type="radio"
                  value="Admin"
                  checked={role === 'Admin'}
                  onChange={(e) => setRole(e.target.value)}
                />
                Admin
              </label>
            </div>
          </div>

          <div className={styles.buttoncontainer}>
            <button type="submit" className={`${styles.button} ${styles.buttonHover}`}>Login</button>
            <button type="button" className={styles.register} onClick={() => { navigate('register'); }}>Register</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
