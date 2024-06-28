import Icon from "../../Icon/Icon";
import styles from "./Tab.module.css";
import { NavLink } from "react-router-dom";

const Tab = ({ label, icon, to }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive ? `${styles.isActive} ${styles.main}` : styles.main
      }
      to={to}
    >
      <Icon icon={icon} />
      {label}
    </NavLink>
  );
};

export default Tab;
