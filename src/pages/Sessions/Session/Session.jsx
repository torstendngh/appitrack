import { useContext, useState } from "react";
import Button from "../../../components/Button/Button";
import Icon from "../../../components/Icon/Icon";
import styles from "./Session.module.css";
import DataContext from "../../../contexts/DataContext";
import showToast from "../../../components/Toast/Toast";
import EditPopup from "../../../components/EditPopup/EditPopup";

const Session = ({ session }) => {
  const { data, changeCurrentSessionId, removeSession, editSession } =
    useContext(DataContext);

  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);

  const acceptedJobs = session.applications.filter(
    (application) => application.status === "accepted"
  );

  const formatDate = (date) => {
    if (!date) return "--.--.----";
    const d = new Date(date);
    return d.toLocaleDateString("de-DE", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  const handleChangeSession = () => {
    changeCurrentSessionId(session.id);
    showToast("Session changed");
  };

  const handleRemoveSession = () => {
    removeSession(session.id);
  };

  return (
    <>
      <div className={styles.main}>
        <h1 className={styles.sessionName}>
          {session.name || "Session"}
          {session.id === data?.currentSessionId && (
            <span className={styles.activeTag}>Current Session</span>
          )}
        </h1>
        <div className={styles.statisticsContainer}>
          <div className={styles.statisticContainer}>
            <span className={styles.statisticTitle}>Last Updated</span>
            <span className={styles.statisticValue}>
              {formatDate(session.lastUpdated)}
            </span>
          </div>
          <div className={styles.statisticContainer}>
            <span className={styles.statisticTitle}>Created</span>
            <span className={styles.statisticValue}>
              {formatDate(session.created)}
            </span>
          </div>
          <div className={styles.statisticContainer}>
            <span className={styles.statisticTitle}>Applications</span>
            <span className={styles.statisticValue}>
              {session.applications.length}
            </span>
          </div>
        </div>
        {acceptedJobs.length > 0 && (
          <div className={styles.acceptedJobsContainer}>
            <span className={styles.statisticTitle}>
              Accepted Job{acceptedJobs.length > 1 && "s"}
            </span>
            {acceptedJobs.map((job) => (
              <div className={styles.acceptedJobContainer} key={job.id}>
                <div className={styles.acceptedJobEmblem}>
                  <Icon icon={"applicationStatus_accepted_filled"} />
                </div>
                <div className={styles.content}>
                  <span className={styles.job}>{job.jobTitle}</span>
                  <span className={styles.company}>{job.company}</span>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className={styles.buttonContainer}>
          <Button onClick={() => setIsEditPopupOpen(true)}>Edit Name</Button>
          <Button onClick={handleRemoveSession}>Delete</Button>
          {session.id !== data?.currentSessionId && (
            <Button onClick={handleChangeSession} isPrimary>
              Set Active
            </Button>
          )}
        </div>
      </div>
      <EditPopup
        value={session.name || "Session"}
        label={"Session Name"}
        isOpen={isEditPopupOpen}
        onClose={() => setIsEditPopupOpen((x) => !x)}
        onSave={(newName) => editSession(session.id, {name: newName})}
      />
    </>
  );
};

export default Session;
