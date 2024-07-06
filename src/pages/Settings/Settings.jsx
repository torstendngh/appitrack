import { useContext } from "react";
import Icon from "../../components/Icon/Icon";
import styles from "./Settings.module.css";
import DataContext from "../../contexts/DataContext";
import AuthContext from "../../contexts/AuthContext";
import Foldout from "../../components/Foldout/Foldout";
import Avatar from "../../components/Avatar/Avatar";
import Button from "../../components/Button/Button";

const Settings = ({}) => {
  const { data } = useContext(DataContext);
  const { currentUser, logout } = useContext(AuthContext);
  return (
    <div className={styles.main}>
      <div className={styles.list}>
        <h1 className={styles.title}>Settings</h1>
        <span className={styles.description}>
          Customize your experience by managing account details, and setting
          session options on the Settings page.
        </span>
        <div className={styles.subtitleContainer}>
          <Icon icon={"account"} />
          <h2 className={styles.subtitle}>Account</h2>
        </div>
        <div className={styles.userContainer}>
          <Avatar />
          <span className={styles.name}>{currentUser?.displayName}</span>
          <Button onClick={logout}>Logout</Button>
        </div>
        <div className={styles.subtitleContainer}>
          <Icon icon={"data"} />
          <h2 className={styles.subtitle}>Data</h2>
        </div>
        <div>
          <Button>Export Data</Button>
        </div>
        <div className={styles.subtitleContainer}>
          <Icon icon={"bug"} />
          <h2 className={styles.subtitle}>Debug</h2>
        </div>

        <Foldout label={"Current User"}>
          <div className={styles.code}>
            const currentUser =&nbsp;
            {JSON.stringify(currentUser, null, 2)}
          </div>
        </Foldout>

        <Foldout label={"User Data"}>
          <div className={styles.code}>
            const data =&nbsp;
            {JSON.stringify(data, null, 2)}
          </div>
        </Foldout>
      </div>
    </div>
  );
};

export default Settings;
