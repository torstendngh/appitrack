import { useState } from "react";
import styles from "./Foldout.module.css";
import Icon from "../Icon/Icon";

const Foldout = ({ label, isOpenByDefault = false, children }) => {
  const [isOpen, setIsOpen] = useState(isOpenByDefault);
  return (
    <div className={styles.main}>
      <button className={styles.button} onClick={() => setIsOpen((x) => !x)}>
        <Icon icon={isOpen ? "chevronDown" : "chevronRight"} />
        {label}
      </button>
      {!!isOpen && <div className={styles.content}>{children}</div>}
    </div>
  );
};

export default Foldout;
