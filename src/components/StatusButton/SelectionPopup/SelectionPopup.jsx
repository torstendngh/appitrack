import Popup from "../../Popup/Popup";
import styles from "./SelectionPopup.module.css";
import applicationStatuses from "../../../constants/applicationStatuses";
import Icon from "../../Icon/Icon";
import { useContext } from "react";
import DataContext from "../../../contexts/DataContext";
import showToast from "../../Toast/Toast";

const SelectionPopup = ({onClose, isOpen, data}) => {
  const {updateApplicationStatus, data: databaseData} = useContext(DataContext)
  const handleStatusClick = async (key) => {
    onClose()
    await updateApplicationStatus(databaseData.currentSessionId, data.id, key)
    showToast(`Changed status to "${applicationStatuses[key].label}"`)
  }
  return (
    <Popup isOpen={isOpen}>
      <div className={styles.main}>
        <div className={styles.titlebar}>
          <div className={styles.titleContainer}>
            <h1 className={styles.title}>Select Status</h1>
            <span className={styles.description}>Select the new status for the job "{data.jobTitle}" at "{data.company}". It will be added to the history automatically.</span>
          </div>
          <button className={styles.closeButton} onClick={onClose}>
            <Icon icon={"close"}/>
          </button>
        </div>
        <div className={styles.list}>
          {Object.keys(applicationStatuses).map((key) => (
            <button key={key} className={styles.status} style={{color: applicationStatuses[key].color}} onClick={() => handleStatusClick(key)}>
              <Icon icon={applicationStatuses[key].icon} />
              {applicationStatuses[key].label}
              <div style={{flex: 1}}></div>
              {
                data.status == key &&
                <Icon icon={"tick_filled"}/>
              }
            </button>
          ))}
        </div>
      </div>
    </Popup>
  );
};

export default SelectionPopup;
