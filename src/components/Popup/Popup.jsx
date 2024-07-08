import { useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./Popup.module.css";
import Icon from "../Icon/Icon";
import { motion, AnimatePresence } from "framer-motion";

const Popup = ({ children, isOpen, fullscreen = false, onClose, title }) => {
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

  const stopPropagation = (e) => e.stopPropagation();

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.main}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          onClick={onClose}
        >
          <motion.div
            className={`${styles.window} ${
              fullscreen ? styles.fullscreen : ""
            }`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            onClick={stopPropagation}
          >
            <div className={styles.titlebar}>
              <div className={styles.titleContainer}>
                <h1 className={styles.title}>{title}</h1>
              </div>
              <button className={styles.closeButton} onClick={onClose}>
                <Icon icon={"close"} />
              </button>
            </div>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.getElementById("popup-root")
  );
};

export default Popup;
