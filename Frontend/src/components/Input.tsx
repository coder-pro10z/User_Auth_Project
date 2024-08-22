import React from "react";
import styles from "../styles/Input.module.scss";

//defining interface to pass multiple Props such as type?,value,onChange,classname?,placeholder?
interface InputProps {
  type?: string;
  value: string;
  //Defines a function type for handling change events on <input> elements.
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => null;
  className?: string;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({
  type = "text",
  value,
  onChange,
  placeholder,
  className,
}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`${styles.input} ${className}`}
    />
  );
};

export default Input;
