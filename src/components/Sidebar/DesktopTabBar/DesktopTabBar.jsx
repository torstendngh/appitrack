import styles from "./DesktopTabBar.module.css";
import Tab from "./Tab/Tab";

const DesktopTabBar = ({}) => {
  return (
    <nav className={styles.main}>
      <h1>applyup</h1>
      <Tab to={"/applications"} icon={"applications"} iconActive={"applications_filled"} label={"Applications"} />
      <Tab to={"/calendar"} icon={"calendar"} iconActive={"calendar_filled"} label={"Calendar"} />
      {/* <Tab to={"/files"} icon={"files"} label={"Files"} /> */}
      <Tab to={"/sessions"} icon={"sessions"} iconActive={"sessions_filled"} label={"Sessions"} />
      <Tab to={"/settings"} icon={"settings"} iconActive={"settings_filled"} label={"Settings"} />
      <div className={styles.bottomSection}>
      <Tab to={"/help"} icon={"help"} iconActive={"help_filled"} label={"Help"} />
      </div>
    </nav>
  );
};

export default DesktopTabBar;
