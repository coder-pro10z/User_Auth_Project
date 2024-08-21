import React from 'react';
import styles from '../styles/Button.module.scss';
interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?:string;
}

const Button: React.FC<ButtonProps> = ({ onClick, children,className }) => (
  <button
  className={`${styles.button} ${className}`}
    // className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
