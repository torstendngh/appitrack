// Toast.js
import React, { useEffect, useState, useRef } from 'react';
import styles from'./Toast.module.css';
import { createPortal } from 'react-dom';
import { createRoot } from 'react-dom/client';
import Icon from '../Icon/Icon';

const Toast = ({ message, onClose }) => {
  const [remainingTime, setRemainingTime] = useState(3000);
  const timerRef = useRef(null);
  const hoverRef = useRef(false);

  useEffect(() => {
    const updateTimer = () => {
      if (!hoverRef.current) {
        setRemainingTime((prev) => prev - 100);
      }
    };

    timerRef.current = setInterval(updateTimer, 100);

    return () => clearInterval(timerRef.current);
  }, []);

  useEffect(() => {
    if (remainingTime <= 0) {
      onClose();
    }
  }, [remainingTime, onClose]);

  const handleMouseEnter = () => {
    hoverRef.current = true;
    setRemainingTime((prev) => prev + 1000);
  };

  const handleMouseLeave = () => {
    hoverRef.current = false;
  };

  return (
    <div className={styles.main} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Icon icon={"tick_filled"}/>
      <span>{message}</span>
    </div>
  );
};

const ToastPortal = ({ message, onClose }) => {
  return createPortal(
    <Toast message={message} onClose={onClose} />,
    document.body
  );
};

let toastRoot = null;

const showToast = (message) => {
  if (!toastRoot) {
    const div = document.createElement('div');
    document.body.appendChild(div);
    toastRoot = createRoot(div);
  }

  const handleClose = () => {
    if (toastRoot) {
      toastRoot.unmount();
      toastRoot = null;
    }
  };

  toastRoot.render(<ToastPortal message={message} onClose={handleClose} />);
};

export default showToast;
