import styles from "./TextInput.module.css";

const TextInput = ({placeholder, label, onChange}) => {
  return (
    <div className={styles.main}>
        <span className={styles.label}>{label}</span>
        <input type="text" placeholder={placeholder || label} onChange={onChange}/>
    </div>
  );
};

export default TextInput;