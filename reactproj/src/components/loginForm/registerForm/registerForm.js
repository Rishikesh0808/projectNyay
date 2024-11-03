import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './registerForm.module.css'; // Import the same CSS module as LoginForm

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Correctly spelled 'navigate'

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Basic validation
    if (!username || !password || !email) {
      setError('Username, email, and password are required');
      return;
    }

    try {
      const response = await axios.post("http://localhost:3005/register", { username, email, password });
      console.log("registered");
      navigate('/login'); // Correctly spelled 'navigate'
    } catch {
      setError('Registration failed'); // Handle registration failure
      console.log('Not registered');
    }
  };

  return (
    <div className={styles.App}>
      <div className={styles.container}>
        <h1 className={styles.heading}>NYAY</h1>
        <form onSubmit={handleSubmit} className={styles.loginForm}>
          <div className={styles.formGroup}>
            <h2 style={{ color: "black", textAlign: "center" }}>Register</h2>
            <label htmlFor="email" className={styles.formGroupLabel}>Email:</label>
            <input
              type="email"
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
          <div className={styles.buttoncontainer}>
            <button type="submit" className={`${styles.button} ${styles.buttonHover}`}>Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
