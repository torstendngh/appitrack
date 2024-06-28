import styles from "./DesktopTabBar.module.css";
import Tab from "./Tab/Tab";

const DesktopTabBar = ({}) => {
  return (
    <nav className={styles.main}>
      <h1>appitrack</h1>
      <Tab to={"/applications"} icon={"home"} iconActive={"home_filled"} label={"Applications"} />
      <Tab to={"/calendar"} icon={"calendar"} iconActive={"calendar_filled"} label={"Calendar"} />
      {/* <Tab to={"/files"} icon={"files"} label={"Files"} /> */}
      <Tab to={"/sessions"} icon={"sessions"} iconActive={"sessions_filled"} label={"Sessions"} />
      <Tab to={"/settings"} icon={"settings"} iconActive={"settings_filled"} label={"Settings"} />
    </nav>
  );
};

export default DesktopTabBar;
