import React from 'react';
import styles from '../styles/SuccessDialog.module.scss';

interface AlertProps {
  message: string;
  onClose: () => void;
}

const AlertBox: React.FC<AlertProps> = ({ message, onClose }) => {
  return (
    <div className={styles.dialogOverlay}>
      <div className={styles.dialogContainer}>
        <p>{message}</p>
        <button onClick={onClose} className={styles.dialogButton}>OK</button>
      </div>
    </div>
  );
};

export default AlertBox;
