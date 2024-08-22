import React, { useState } from "react";
import styles from "../styles/pages/Login.module.scss";
import api from "../utils/api";
import { useNavigate } from "react-router-dom";
import SuccessDialog from "../components/SuccessDialog";
import { useAuth } from "../components/AuthContext"; // Import the context
const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const [showDialog, setShowDialog] = useState(false);
  const navigate = useNavigate();
  const { setUsername } = useAuth(); // Destructure setUsername from context

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  // const handleLogin = async () => {
  //   // Handle login logic here
  //   try {
  //     const res = await api.post('/auth/login', { email, password });
  //     console.log('login successful:', res.data);
  //     // Optionally redirect or display a success message
  //   } catch (error) {
  //     console.error('Login failed:',error);
  //     // Optionally display error messages
  //   }
  //   console.log('Logging in with:', { email, password });
  // };

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // setUsername(email);
        const data = await response.json(); // Parse the JSON response
        login(data.username, data.token);
        // const { username } = data; // Extract the username from the response
        // setUsername(username); // Set the username in your app's state
        setShowDialog(true);
        setTimeout(() => {
          setShowDialog(false);
          // Store username in state or context
          // Assuming `setUsername` is available in your app's context or global state
          navigate("/");
        }, 2000); // Show dialog for 2 seconds then redirect
      } else {
        const error = await response.json();
        alert("Registration failed: " + error.message);
      }
    } catch (error) {
      alert("An error occurred: " + error);
    }
  };

  const handleGoogleSignIn = () => {
    // Handle Google sign-in logic here
    console.log("Signing in with Google");
  };

  const handleFacebookSignIn = () => {
    // Handle Facebook sign-in logic here
    console.log("Signing in with Facebook");
  };

  // setShowDialog(true);
  const handleCloseDialog = () => {
    setShowDialog(false);
    navigate("/"); // Redirect to Home after closing the dialog
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
      <a className={styles.register} href="/register">
        Not a user? Register here
      </a>
      {showDialog && (
        <SuccessDialog message="Login Successful" onClose={handleCloseDialog} />
      )}
      <div className={styles.socialLoginContainer}>
        <button onClick={handleGoogleSignIn} className={styles.googleButton}>
          Sign in with Google
        </button>
        <button
          onClick={handleFacebookSignIn}
          className={styles.facebookButton}
        >
          Sign in with Facebook
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
