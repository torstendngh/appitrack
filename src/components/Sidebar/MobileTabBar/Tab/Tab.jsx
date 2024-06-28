import Icon from "../../../Icon/Icon";
import styles from "./Tab.module.css";
import { NavLink } from "react-router-dom";

const Tab = ({ label, icon, iconActive, to }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive ? `${styles.isActive} ${styles.main}` : styles.main
      }
      to={to}
    >
      {({isActive}) => (
        <>
        <Icon icon={isActive ? iconActive : icon} />
      {label}
        </>
      )}
    </NavLink>
  );
};

export default Tab;
