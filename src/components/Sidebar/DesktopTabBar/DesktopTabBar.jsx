import { useNavigate } from "react-router-dom";
import styles from "./DesktopTabBar.module.css";
import Tab from "./Tab/Tab";

const DesktopTabBar = ({}) => {
  const navigate = useNavigate();
  return (
    <nav className={styles.main}>
      <h1 onClick={() => navigate("/")}>applyups</h1>
      <Tab
        to={"/dashboard/applications"}
        icon={"applications"}
        iconActive={"applications_filled"}
        label={"Applications"}
      />
      <Tab
        to={"/dashboard/calendar"}
        icon={"calendar"}
        iconActive={"calendar_filled"}
        label={"Calendar"}
      />
      {/* <Tab to={"/files"} icon={"files"} label={"Files"} /> */}
      <Tab
        to={"/dashboard/sessions"}
        icon={"sessions"}
        iconActive={"sessions_filled"}
        label={"Sessions"}
      />
      <Tab
        to={"/dashboard/contacts"}
        icon={"contacts"}
        iconActive={"contacts_filled"}
        label={"Contacts"}
      />
      <div className={styles.bottomSection}>
        <Tab
          to={"/dashboard/help"}
          icon={"help"}
          iconActive={"help_filled"}
          label={"Help"}
        />
        <Tab
          to={"/dashboard/settings"}
          icon={"settings"}
          iconActive={"settings_filled"}
          label={"Settings"}
        />
      </div>
    </nav>
  );
};

export default DesktopTabBar;
