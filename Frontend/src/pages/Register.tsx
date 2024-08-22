import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/pages/Login.module.scss"; // Reuse the same styles as LoginPage
import api from "../utils/api";
import SuccessDialog from "../components/SuccessDialog";
const RegisterPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const navigate = useNavigate();

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  // const handleRegister = () => {
  //   // Handle registration logic here
  //   console.log('Registering with:', { username, email, password });
  // };
  // const handleRegister = async () => {
  //   try {
  //     const res = await api.post('/auth/register', { username, email, password });
  //     console.log('Registration successful:', res.data);
  //     // Optionally redirect or display a success message
  //   } catch (error) {
  //     console.error('Registration failed:',error);
  //     // Optionally display error messages
  //   }
  // };

  const handleRegister = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });

      if (response.ok) {
        setIsDialogOpen(true);
      } else {
        const error = await response.json();
        alert("Registration failed: " + error.message);
      }
    } catch (error) {
      alert("An error occurred: " + error);
    }
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    navigate("/login"); // Redirect to Home after closing the dialog
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
      <a className={styles.register} href="/login">
        Already have an account? Login here
      </a>
      {isDialogOpen && (
        <SuccessDialog
          message="User Registered Successfully"
          onClose={handleCloseDialog}
        />
      )}
    </div>
  );
};

export default RegisterPage;
