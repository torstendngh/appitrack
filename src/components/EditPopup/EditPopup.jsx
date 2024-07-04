import { useState, useEffect, useRef } from "react";
import styles from "./EditPopup.module.css";
import Popup from "../Popup/Popup";
import TextInput from "../TextInput/TextInput";
import Icon from "../Icon/Icon";
import Button from "../Button/Button";

const EditPopup = ({ onClose, isOpen, label, value, onSave }) => {
  const [inputValue, setInputValue] = useState(value);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleOnSave = () => {
    onSave(inputValue);
    onClose();
  };

  return (
    <Popup isOpen={isOpen} onClose={onClose}>
      <div className={styles.main}>
        <div className={styles.titlebar}>
          <div className={styles.titleContainer}>
            <h1 className={styles.title}>Edit</h1>
          </div>
          <button className={styles.closeButton} onClick={onClose}>
            <Icon icon={"close"} />
          </button>
        </div>
        <div className={styles.content}>
          <TextInput
            label={label}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            ref={inputRef}
          />
          <div className={styles.buttonContainer}>
            <Button onClick={onClose}>Cancel</Button>
            <Button isPrimary onClick={handleOnSave}>
              Save
            </Button>
          </div>
        </div>
      </div>
    </Popup>
  );
};

export default EditPopup;
