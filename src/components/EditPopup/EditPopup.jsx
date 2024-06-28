import styles from "./EditPopup.module.css";
import Popup from "../Popup/Popup";
import TextInput from "../TextInput/TextInput"

const EditPopup = ({ onClose }) => {
  return (
    <Popup>
      <div className={styles.main}>
        <div className={styles.titlebar}>
          <div className={styles.titleContainer}>
            <h1 className={styles.title}>Edit</h1>
          </div>
          <button className={styles.closeButton} onClick={() => onClose()}>
            <Icon icon={"close"} />
          </button>
        </div>
        <TextInput/>
      </div>
    </Popup>
  );
};

export default EditPopup;
