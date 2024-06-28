import Icon from "../../components/Icon/Icon";
import Application from "./Application/Application";
import styles from "./Applications.module.css";
import Searchbar from "./Searchbar/Searchbar";
import { useContext, useState } from "react";
import AddApplicationPopup from "./AddApplicationPopup/AddApplicationPopup.jsx";
import DataContext from "../../contexts/DataContext.jsx";

const Applications = ({}) => {
  const { data } = useContext(DataContext);
  const [isAddApplicationPopupVisible, setIsAddApplicationPopupVisible] = useState(false);

  // Find the session with the matching session ID
  const currentSession = data?.sessions?.find(session => session.id === data?.currentSessionId);

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
            <span className={styles.text}>Add Application</span>
          </button>
        </div>
        <div className={styles.listContainer}>
          <div className={styles.list}>
            <h1 className={styles.title}>Applications</h1>
            {currentSession?.applications?.map((application) => (
              <Application key={application.id} data={application} />
            ))}
          </div>
        </div>
      </div>

      <AddApplicationPopup
        isOpen={isAddApplicationPopupVisible}
        onClose={() => setIsAddApplicationPopupVisible(false)}
      />
    </>
  );
};

export default Applications;
