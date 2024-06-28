import styles from "./TextInput.module.css";

const TextInput = ({
  placeholder,
  label,
  onChange,
  required = false,
  value = null,
}) => {
  return (
    <div className={styles.main}>
      <span className={styles.label}>
        {label}
        {!!required && <span className={styles.required}>*</span>}
      </span>
      <input
        type="text"
        placeholder={placeholder || label}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default TextInput;
