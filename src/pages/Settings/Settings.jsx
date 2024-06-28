import styles from "./Settings.module.css";

const Settings = ({}) => {
  return (
    <div className={styles.main}>
      <div className={styles.list}>
        <h1 className={styles.title}>Settings</h1>
        <span className={styles.description}>
        Customize your experience by managing account details, and setting session options on the Settings page.
        </span>
      </div>
    </div>
  );
};

export default Settings;
