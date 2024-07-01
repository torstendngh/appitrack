import Icon from "../Icon/Icon";
import Popup from "../Popup/Popup";
import styles from "./ApplicationPopup.module.css";
import StatusButton from "../StatusButton/StatusButton";
import { useState } from "react";
import EditPopup from "../EditPopup/EditPopup";
import Button from "../Button/Button";

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
  return (
    <Popup isOpen={isOpen} fullscreen onClose={onClose}>
      <div className={styles.main}>
        <div className={styles.titlebar}>
          <div className={styles.titleContainer}>
            <h1 className={styles.title}>{data.company}</h1>
            <span className={styles.job}>{data.jobTitle}</span>
          </div>
          <button className={styles.closeButton} onClick={onClose}>
            <Icon icon={"close"} />
          </button>
        </div>
        <div className={styles.content}>
          <div>
            <StatusButton data={data} />
          </div>
          <div>
            <Button>Add Interview</Button>
          </div>
          <div>
            Notes
            <textarea name="" id=""></textarea>
          </div>
        </div>
      </div>
    </Popup>
  );
};

export default ApplicationPopup;
