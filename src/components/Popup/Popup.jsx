import styles from "./Popup.module.css";

const Popup = ({children}) => {
  return (
    <div className={styles.main}>
        <div className={styles.window}>
            {children}
        </div>
    </div>
  );
};

export default Popup;