import Icon from "../../components/Icon/Icon";
import Application from "./Application/Application";
import styles from "./Applications.module.css";
import Searchbar from "./Searchbar/Searchbar";
import { useContext, useState } from "react";
import DataContext from "../../contexts/DataContext.jsx";
import Button from "../../components/Button/Button.jsx";
import AddApplicationPopup from "../../components/AddApplicationPopup/AddApplicationPopup.jsx";

const Applications = ({}) => {
  const { data } = useContext(DataContext);
  const [isAddApplicationPopupVisible, setIsAddApplicationPopupVisible] =
    useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const currentSession = data?.sessions?.find(
    (session) => session.id === data?.currentSessionId
  );

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredApplications = currentSession?.applications?.filter(
    (application) =>
      application.jobTitle.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className={styles.main}>
        <div className={styles.navbar}>
          <Searchbar onChange={handleSearchChange} value={searchQuery} />
          <Button
            isPrimary
            shrinks
            title="Add Application"
            onClick={() => setIsAddApplicationPopupVisible(true)}
          >
            <Icon icon={"add_filled"} />
            <span className={styles.text}>Add Application</span>
          </Button>
        </div>
        <div className={styles.listContainer}>
          <div className={styles.list}>
            <h1 className={styles.title}>
              {searchQuery !== "" ? `Search: ${searchQuery}` : "Applications"}
            </h1>
            {filteredApplications?.map((application) => (
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
