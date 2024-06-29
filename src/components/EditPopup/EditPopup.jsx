import styles from "./EditPopup.module.css";
import Popup from "../Popup/Popup";
import TextInput from "../TextInput/TextInput"
import Icon from "../Icon/Icon";
import Button from "../Button/Button";

const EditPopup = ({ onClose, isOpen, label }) => {
  return (
    <Popup isOpen={isOpen}>
      <div className={styles.main}>
        <div className={styles.titlebar}>
          <div className={styles.titleContainer}>
            <h1 className={styles.title}>Edit</h1>
          </div>
          <button className={styles.closeButton} onClick={() => onClose()}>
            <Icon icon={"close"} />
          </button>
        </div>
        <div className={styles.content}>
          <TextInput label={label}/>
          <div className={styles.buttonContainer}>
            <Button>Cancel</Button>
            <Button isPrimary>Save</Button>
          </div>
        </div>
      </div>
    </Popup>
  );
};

export default EditPopup;
