import Icon from "../Icon/Icon";
import Popup from "../Popup/Popup";
import styles from "./ApplicationPopup.module.css";

const ApplicationPopup = ({onClose, data}) => {
  return (
    <Popup>
      <div className={styles.main}>
        <div className={styles.titlebar}>
          <div className={styles.titleContainer}>
            <h1 className={styles.title}>Application</h1>
          </div>
          <button className={styles.closeButton} onClick={() => onClose()}>
            <Icon icon={"close"} />
          </button>
        </div>
        <div className={styles.content}>
          {data.job}
          {data.company}
        </div>
      </div>
    </Popup>
  );
};

export default ApplicationPopup;
