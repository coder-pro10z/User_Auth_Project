import React,{useState} from 'react'
import Button from '../components/Button'
import styles from '../styles/pages/Login.module.scss'


const handleLogin= () =>{
    // console.log('Logging in with:', { email, password });
    alert("Login");
}
const LoginPage: React.FC=()=>{
return(
    <Button onClick={handleLogin} className={styles.loginButton}> Login</Button>
)
};

export default LoginPage