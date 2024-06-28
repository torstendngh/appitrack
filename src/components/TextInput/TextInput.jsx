import styles from "./TextInput.module.css";

const TextInput = ({placeholder, label, onChange, required = false}) => {
  return (
    <div className={styles.main}>
        <span className={styles.label}>{label}{!!required && <span className={styles.required}>*</span>}</span>
        <input type="text" placeholder={placeholder || label} onChange={onChange}/>
    </div>
  );
};

export default TextInput;