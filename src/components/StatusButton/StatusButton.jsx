import Icon from "../Icon/Icon";
import styles from "./StatusButton.module.css";
import applicationStatus from "../../constants/applicationStatuses";
import { useState } from "react";
import Popup from "../Popup/Popup";
import SelectionPopup from "./SelectionPopup/SelectionPopup";

const StatusButton = ({ data }) => {
  const [isActive, setIsActive] = useState(false);
  const onClickHandler = (e) => {
    e.stopPropagation();
    setIsActive((x) => !x)
  }
  return (
    <>
      <button
        type="button"
        className={styles.main}
        onClick={onClickHandler}
        style={{ color: applicationStatus[data.status].color }}
      >
        {applicationStatus[data.status].label}
        <Icon icon={applicationStatus[data.status].icon} />
      </button>
      <SelectionPopup isOpen={isActive} data={data} onClose={() => setIsActive(false)}/>
    </>
  );
};

export default StatusButton;
