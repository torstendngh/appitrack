import Icon from "../Icon/Icon";
import Popup from "../Popup/Popup";
import styles from "./ApplicationPopup.module.css";
import StatusButton from "../StatusButton/StatusButton";
import { useState } from "react";
import EditPopup from "../EditPopup/EditPopup";

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
      <EditPopup isOpen={isEditPopupOpen} onClose={() => setIsEditPopupOpen(false)} label={label}/>
    </>
  );
};

const ApplicationPopup = ({ onClose, data, isOpen }) => {
  return (
    <Popup isOpen={isOpen}>
      <div className={styles.main}>
        <div className={styles.titlebar}>
          <div className={styles.titleContainer}>
            <h1 className={styles.title}>Application</h1>
          </div>
          <button className={styles.closeButton} onClick={onClose}>
            <Icon icon={"close"} />
          </button>
        </div>
        <div className={styles.content}>
          <TextContainer label="Company" content={data.company} />
          <TextContainer label="Job" content={data.jobTitle} />
          <TextContainer label="Last Updated" content={data.lastUpdated} />
          <StatusButton data={data} />
        </div>
      </div>
    </Popup>
  );
};

export default ApplicationPopup;
