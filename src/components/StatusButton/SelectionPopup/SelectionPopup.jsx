import Popup from "../../Popup/Popup";
import styles from "./SelectionPopup.module.css";
import applicationStatuses from "../../../constants/applicationStatuses";
import Icon from "../../Icon/Icon";

const SelectionPopup = ({currentStatus, onClose}) => {
  return (
    <Popup>
      <div className={styles.main}>
        <div className={styles.titlebar}>
          <div className={styles.titleContainer}>
            <h1>Select Status</h1>
            <span>Select the new status for the job "" at "". It will be added to the history automatically.</span>
          </div>
          <button className={styles.closeButton} onClick={() => onClose()}>
            <Icon icon={"close"}/>
          </button>
        </div>
        <div className={styles.list}>
          {Object.keys(applicationStatuses).map((key) => (
            <div className={styles.status} style={{color: applicationStatuses[key].color}}>
              <Icon icon={applicationStatuses[key].icon} />
              {applicationStatuses[key].label}
              <div style={{flex: 1}}></div>
              {
                currentStatus == key &&
                <Icon icon={"tick_filled"}/>
              }
            </div>
          ))}
        </div>
      </div>
    </Popup>
  );
};

export default SelectionPopup;
