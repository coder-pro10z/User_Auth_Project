import React from "react";
import styles from "../styles/SuccessDialog.module.scss";

interface SuccessDialogProps {
  message: string;
  onClose: () => void;
}

const SuccessDialog: React.FC<SuccessDialogProps> = ({ message, onClose }) => {
  return (
    <div className={styles.dialogOverlay}>
      <div className={styles.dialogContainer}>
        <p>{message}</p>
        <button onClick={onClose} className={styles.dialogButton}>
          OK
        </button>
      </div>
    </div>
  );
};

export default SuccessDialog;
