import { forwardRef } from "react";
import styles from "./TextInput.module.css";

const TextInput = forwardRef(
  ({ placeholder, label, onChange, required = false, value = null }, ref) => {
    return (
      <div className={styles.main}>
        <span className={styles.label}>
          {label}
          {!!required && <span className={styles.required}>*</span>}
        </span>
        <input
          ref={ref}
          type="text"
          placeholder={placeholder || label}
          onChange={onChange}
          value={value}
        />
      </div>
    );
  }
);

export default TextInput;
