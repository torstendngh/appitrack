import Avatar from "../../components/Avatar/Avatar";
import Icon from "../../components/Icon/Icon";
import Application from "./Application/Application";
import styles from "./Applications.module.css";
import Searchbar from "./Searchbar/Searchbar";
import testApplications from "../../constants/testApplications.js";
import Popup from "../../components/Popup/Popup.jsx";
import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import { useState } from "react";
import AddApplicationPopup from "./AddApplicationPopup/AddApplicationPopup.jsx";

const Applications = ({}) => {
  const [isAddApplicationPopupVisible, setIsAddApplicationPopupVisible] =
    useState(false);

  return (
    <>
      <div className={styles.main}>
        <div className={styles.navbar}>
          <Searchbar />
          <button
            className={styles.addButton}
            title="Add Application"
            onClick={() => setIsAddApplicationPopupVisible(true)}
          >
            <Icon icon={"add_filled"} />
            Add Application
          </button>
          <Avatar />
        </div>
        <div className={styles.listContainer}>
          <div className={styles.list}>
            <h1 className={styles.title}>Applications</h1>
            {testApplications.map((application, index) => (
              <Application data={application} />
            ))}
          </div>
        </div>
      </div>
      {!!isAddApplicationPopupVisible && (
        <AddApplicationPopup
          onClose={() => setIsAddApplicationPopupVisible(false)}
        />
      )}
    </>
  );
};

export default Applications;
