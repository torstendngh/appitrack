import { useContext } from "react";
import styles from "./Sessions.module.css";
import DataContext from "../../contexts/DataContext";
import Icon from "../../components/Icon/Icon";

const Sessions = ({}) => {
  const { data, changeCurrentSessionId, addSession } = useContext(DataContext);
  const handleAddSession = async () => {
    const newSession = await addSession()
  }
  return (
    <div className={styles.main}>
      <div className={styles.navbar}>
      <button
            className={styles.addButton}
            title="Add Application"
            onClick={() => handleAddSession()}
          >
            <Icon icon={"add_filled"} />
            <span className={styles.text}>New Session</span>
          </button>
      </div>
      <div className={styles.listContainer}>
        <div className={styles.list}>
          <h1 className={styles.title}>Sessions</h1>
          <span className={styles.description}>
            Manage your job search with sessions, archiving completed searches and
            starting fresh with each new job hunt.
          </span>
          {data?.sessions.map(session => (
            <button key={session.id} className={styles.session} onClick={() => changeCurrentSessionId(session.id)}>
              <div className={styles.textContainer}>
                <span className={styles.name}>{session.id}</span>
                <span className={styles.total}>Applications: {session.applications.length}</span>
              </div>
              {data?.currentSessionId == session.id && (
                <span className={styles.active}>Currently Active</span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sessions;
