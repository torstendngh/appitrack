import { useContext } from "react";
import styles from "./Sessions.module.css";
import DataContext from "../../contexts/DataContext";
import Icon from "../../components/Icon/Icon";
import Button from "../../components/Button/Button";
import showToast from "../../components/Toast/Toast";

const Sessions = ({}) => {
  const { data, changeCurrentSessionId, addSession } = useContext(DataContext);

  const handleAddSession = async () => {
    await addSession();
    showToast("New session created")
  };

  const handleChangeSession = (id) => {
    changeCurrentSessionId(id)
    showToast("Session changed")
  }

  return (
    <div className={styles.main}>
      <div className={styles.navbar}>
        <Button
          isPrimary
          shrinks
          title="Add Application"
          onClick={() => handleAddSession()}
          style={{marginLeft: "auto"}}
        >
          <Icon icon={"add_filled"} />
          <span className={styles.text}>New Session</span>
        </Button>
      </div>
      <div className={styles.listContainer}>
        <div className={styles.list}>
          <h1 className={styles.title}>Sessions</h1>
          <span className={styles.description}>
            Manage your job search with sessions, archiving completed searches
            and starting fresh with each new job hunt.
          </span>
          {data?.sessions
            .slice()
            .reverse()
            .map((session) => (
              <button
                key={session.id}
                className={styles.session}
                onClick={() => handleChangeSession(session.id)}
              >
                <div className={styles.textContainer}>
                  <span className={styles.name}>{session.id}</span>
                  <span className={styles.total}>
                    Applications: {session.applications.length}
                  </span>
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
