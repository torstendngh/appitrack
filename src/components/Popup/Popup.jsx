import { createPortal } from "react-dom";
import styles from "./Popup.module.css";

const Popup = ({children, isOpen}) => {
  if (!isOpen) return null;

  const stopPropagation = (e) => e.stopPropagation();

  return createPortal(
    <div className={styles.main}  onClick={stopPropagation}>
        <div className={styles.window}  onClick={stopPropagation}>
            {children}
        </div>
    </div>,
    document.getElementById('popup-root')
  );
};

export default Popup;