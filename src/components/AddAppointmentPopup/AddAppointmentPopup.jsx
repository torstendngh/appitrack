import styles from "./AddAppointmentPopup.module.css";
import Popup from "../Popup/Popup";

const AddAppointmentPopup = ({ onClose, isOpen }) => {
  return (
    <Popup
      className={styles.main}
      onClose={onClose}
      isOpen={isOpen}
      title={"New Appointment"}
    >
      <input type="datetime" name="" id="" />
    </Popup>
  );
};

export default AddAppointmentPopup;
