import React, { useState } from 'react';
import styles from '../styles/pages/Login.module.scss';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    // Handle login logic here
    console.log('Logging in with:', { email, password });
  };

  const handleGoogleSignIn = () => {
    // Handle Google sign-in logic here
    console.log('Signing in with Google');
  };

  const handleFacebookSignIn = () => {
    // Handle Facebook sign-in logic here
    console.log('Signing in with Facebook');
  };

  return (
    <div className={styles.loginContainer}>
      <h2 className={styles.title}>Login</h2>
      <div className={styles.inputContainer}>
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
      <button onClick={handleLogin} className={styles.loginButton}>
        Login
      </button>
      <a className={styles.register} href='/register'>Not a user? Register here</a>
      <div className={styles.socialLoginContainer}>
        <button onClick={handleGoogleSignIn} className={styles.googleButton}>
          Sign in with Google
        </button>
        <button onClick={handleFacebookSignIn} className={styles.facebookButton}>
          Sign in with Facebook
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
