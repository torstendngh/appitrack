import styles from "./AddApplicationPopup.module.css";
import Popup from "../../../components/Popup/Popup";
import Icon from "../../../components/Icon/Icon";
import TextInput from "../../../components/TextInput/TextInput";
import { useContext } from "react";
import DataContext from "../../../contexts/DataContext";

const AddApplicationPopup = ({ onClose, isOpen }) => {
  const {addApplication, data} = useContext(DataContext)

  const handleAddApplication = () => {
    addApplication(data.current)
  }
  return (
    <Popup isOpen={isOpen}>
      <div className={styles.main}>
        <div className={styles.titlebar}>
          <div className={styles.titleContainer}>
            <h1 className={styles.title}>Create New Application</h1>
            <span className={styles.description}>
              Create a new application to save the current status, notes and the
              history
            </span>
          </div>
          <button className={styles.closeButton} onClick={() => onClose()}>
            <Icon icon={"close"} />
          </button>
        </div>
        <div className={styles.content}>
          <TextInput label={"Company"} required/>
          <TextInput label={"Job Title"} required/>
          <h2 className={styles.subtitle}>Extra information</h2>
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
