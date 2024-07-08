import Popup from "../Popup/Popup";
import styles from "./StatusSelectionPopup.module.css";
import applicationStatuses from "../../constants/applicationStatuses";
import Icon from "../Icon/Icon";
import { useContext } from "react";
import DataContext from "../../contexts/DataContext";
import showToast from "../Toast/Toast";

const StatusSelectionPopup = ({ onClose, isOpen, data }) => {
  const { updateApplicationStatus, data: databaseData } =
    useContext(DataContext);
  const handleStatusClick = async (key) => {
    onClose();
    await updateApplicationStatus(databaseData.currentSessionId, data.id, key);
    showToast(`Changed status to "${applicationStatuses[key].label}"`);
  };
  return (
    <Popup isOpen={isOpen} onClose={onClose} title={"Select Status"}>
      <div className={styles.main}>
        <span className={styles.description}>
          Select the new status for the job "{data.jobTitle}" at "{data.company}
          ". It will be added to the history automatically.
        </span>
        {Object.keys(applicationStatuses).map((key) => (
          <button
            key={key}
            className={styles.status}
            style={{ color: applicationStatuses[key].color }}
            onClick={() => handleStatusClick(key)}
          >
            <Icon icon={applicationStatuses[key].icon} />
            {applicationStatuses[key].label}
            <div style={{ flex: 1 }}></div>
            {data.status == key && <Icon icon={"tick_filled"} />}
          </button>
        ))}
      </div>
    </Popup>
  );
};

export default StatusSelectionPopup;
