import { useContext } from "react";
import styles from "./Sessions.module.css";
import DataContext from "../../contexts/DataContext";
import Icon from "../../components/Icon/Icon";
import Button from "../../components/Button/Button";
import showToast from "../../components/Toast/Toast";
import Session from "./Session/Session";

const Sessions = () => {
  const { data, changeCurrentSessionId, addSession } = useContext(DataContext);

  const handleAddSession = async () => {
    await addSession();
    showToast("New session created");
  };

  return (
    <div className={styles.main}>
      <div className={styles.navbar}>
        <Button
          isPrimary
          shrinks
          title="Add Application"
          onClick={() => handleAddSession()}
          style={{ marginLeft: "auto" }}
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
              <Session key={session.id} session={session} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Sessions;
