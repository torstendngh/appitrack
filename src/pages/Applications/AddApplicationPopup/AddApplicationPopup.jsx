import styles from "./AddApplicationPopup.module.css";
import Popup from "../../../components/Popup/Popup";
import Icon from "../../../components/Icon/Icon";
import TextInput from "../../../components/TextInput/TextInput";

const AddApplicationPopup = ({ onClose }) => {
  return (
    <Popup>
      <div className={styles.main}>
        <div className={styles.titlebar}>
          <div className={styles.titleContainer}>
            <h1>Create New Application</h1>
            <span>
              Create a new application to save the current status, notes and the
              history
            </span>
          </div>
          <button className={styles.closeButton} onClick={() => onClose()}>
            <Icon icon={"close"} />
          </button>
        </div>
        <div className={styles.content}>
          <TextInput label={"Company"} />
          <TextInput label={"Job Title"} />
          <span>Extra information</span>
          <TextInput label={"Job Posting Link"} />
          <TextInput label={"Notes"} />
          <button className={styles.createButton}>
            <Icon icon={"tick_filled"} />
            Create
          </button>
        </div>
      </div>
    </Popup>
  );
};

export default AddApplicationPopup;
