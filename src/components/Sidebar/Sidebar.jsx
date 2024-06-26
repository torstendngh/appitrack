import styles from "./Sidebar.module.css";
import Tab from "./Tab/Tab";

const Sidebar = ({}) => {
  return (
    <nav className={styles.main}>
      <h1>appitrack</h1>
      <Tab isActive icon={"applications"} label={"Applications"} />
      <Tab icon={"calendar"} label={"Calendar"} />
      <Tab icon={"sessions"} label={"Sessions"} />
      <Tab icon={"settings"} label={"Settings"} />
    </nav>
  );
};

export default Sidebar;
