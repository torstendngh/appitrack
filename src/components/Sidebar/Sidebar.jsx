import styles from "./Sidebar.module.css";
import Tab from "./Tab/Tab";

const Sidebar = ({}) => {
  return (
    <nav className={styles.main}>
      <h1>appitrack</h1>
      <Tab to={"/applications"} icon={"home"} label={"Applications"} />
      <Tab to={"/calendar"} icon={"calendar"} label={"Calendar"} />
      {/* <Tab to={"/files"} icon={"files"} label={"Files"} /> */}
      <Tab to={"/sessions"} icon={"sessions"} label={"Sessions"} />
      <Tab to={"/settings"} icon={"settings"} label={"Settings"} />
    </nav>
  );
};

export default Sidebar;
