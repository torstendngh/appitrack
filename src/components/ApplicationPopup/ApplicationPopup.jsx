import Icon from "../Icon/Icon";
import Popup from "../Popup/Popup";
import styles from "./ApplicationPopup.module.css";
import StatusButton from "../StatusButton/StatusButton";
import { useState } from "react";
import EditPopup from "../EditPopup/EditPopup";
import Button from "../Button/Button";
import AddAppointmentPopup from "../AddAppointmentPopup/AddAppointmentPopup";

const TextContainer = ({ label, content }) => {
  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);
  return (
    <>
      <button
        className={styles.textContainer}
        onClick={() => setIsEditPopupOpen(true)}
      >
        <span className={styles.label}>{label}</span>
        <span className={styles.content}>{content}</span>
      </button>
      <EditPopup
        isOpen={isEditPopupOpen}
        onClose={() => setIsEditPopupOpen(false)}
        label={label}
      />
    </>
  );
};

const ApplicationPopup = ({ onClose, data, isOpen }) => {
  const [isAddAppointmentPopupOpen, setIsAddAppointmentPopupOpen] = useState(false)
  return (
    <>
    <Popup isOpen={isOpen} fullscreen onClose={onClose} title={"Application"}>
      <div className={styles.main}>
        <div>
          <StatusButton data={data} />
        </div>
        <div>
          <Button onClick={() => setIsAddAppointmentPopupOpen(true)}>Add Appointment</Button>
        </div>
        <div>
          Notes
          <textarea name="" id=""></textarea>
        </div>
      </div>
    </Popup>
    <AddAppointmentPopup onClose={() => setIsAddAppointmentPopupOpen(false)} isOpen={isAddAppointmentPopupOpen}/>
    </>
  );
};

export default ApplicationPopup;
