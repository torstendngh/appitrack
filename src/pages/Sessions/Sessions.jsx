import styles from "./Sessions.module.css";

const Sessions = ({}) => {
  return (
    <div className={styles.main}>
        <div className={styles.list}>
            <h1 className={styles.title}>Sessions</h1>
            <span className={styles.description}>Manage your job search with sessions, archiving completed searches and starting fresh with each new job hunt.</span>
        </div>
    </div>
  );
};

export default Sessions;