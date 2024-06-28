import { useState } from "react";
import StatusButton from "../../../components/StatusButton/StatusButton";
import styles from "./Application.module.css";
import ApplicationPopup from "../../../components/ApplicationPopup/ApplicationPopup";

const Application = ({ data }) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const onClickHandler = (e) => {
    setIsPopupVisible(true);
    console.log("application clicked");
  };
  return (
    <>
      <button className={styles.main} onClick={onClickHandler}>
        <div className={styles.textContainer}>
          <p className={styles.job}>{data.job}</p>
          <p className={styles.company}>{data.company}</p>
          <div className={styles.detailsContainer}>
            <p>Applied on 23.04.2024</p>
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <StatusButton status={data.status} />
        </div>
      </button>

      <ApplicationPopup
        isOpen={isPopupVisible}
        data={data}
        onClose={() => setIsPopupVisible(false)}
      />
    </>
  );
};

export default Application;
