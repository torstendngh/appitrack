import { useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./Popup.module.css";

const Popup = ({ children, isOpen, fullscreen = false, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const stopPropagation = (e) => e.stopPropagation();

  return createPortal(
    <div className={styles.main} onClick={stopPropagation}>
      <div
        className={`${styles.window} ${fullscreen ? styles.fullscreen : ""}`}
        onClick={stopPropagation}
      >
        {children}
      </div>
    </div>,
    document.getElementById("popup-root")
  );
};

export default Popup;