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
    <Popup isOpen={isOpen} onClose={onClose} title={"Edit"}>
      <div className={styles.main}>
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
    </Popup>
  );
};

export default EditPopup;
