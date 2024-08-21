import React, { useState } from 'react';
import styles from '../styles/pages/Login.module.scss'; // Reuse the same styles as LoginPage

const RegisterPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleRegister = () => {
    // Handle registration logic here
    console.log('Registering with:', { username, email, password });
  };

  return (
    <div className={styles.loginContainer}>
      <h2 className={styles.title}>Register</h2>
      <div className={styles.inputContainer}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
          className={styles.input}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          className={styles.input}
        />
      </div>
      <button onClick={handleRegister} className={styles.loginButton}>
        Register
      </button>
      <a className={styles.register} href='/login'>Already have an account? Login here</a>
    </div>
  );
};

export default RegisterPage;
