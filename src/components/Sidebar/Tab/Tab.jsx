import Icon from "../../Icon/Icon";
import styles from "./Tab.module.css";

const Tab = ({label, icon, isActive = false}) => {
  return (
    <button className={`${styles.main} ${isActive ? styles.isActive : ""}`}>
        <Icon icon={icon}/>
        {label}
    </button>
  );
};

export default Tab;