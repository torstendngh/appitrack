import styles from "./MobileTabBar.module.css";
import Tab from "./Tab/Tab";

const MobileTabBar = ({}) => {
  return (
    <nav className={styles.main}>
      <Tab
        to={"/applications"}
        icon={"applications"}
        iconActive={"applications_filled"}
        label={"Applications"}
      />
      <Tab
        to={"/calendar"}
        icon={"calendar"}
        iconActive={"calendar_filled"}
        label={"Calendar"}
      />
      {/* <Tab to={"/files"} icon={"files"} label={"Files"} /> */}
      <Tab
        to={"/sessions"}
        icon={"sessions"}
        iconActive={"sessions_filled"}
        label={"Sessions"}
      />
      <Tab
        to={"/settings"}
        icon={"settings"}
        iconActive={"settings_filled"}
        label={"Settings"}
      />
    </nav>
  );
};

export default MobileTabBar;
