import React from "react";
import styles from "../styles/Button.module.scss";
interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, className }) => (
  <button className={`${styles.button} ${className}`} onClick={onClick}>
    {children}
  </button>
);

export default Button;
