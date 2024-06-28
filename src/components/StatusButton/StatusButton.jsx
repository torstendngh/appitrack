import Icon from "../Icon/Icon";
import styles from "./StatusButton.module.css";
import applicationStatus from "../../constants/applicationStatuses";
import { useState } from "react";
import Popup from "../Popup/Popup";
import SelectionPopup from "./SelectionPopup/SelectionPopup";

const StatusButton = ({ status = "draft" }) => {
  const [isActive, setIsActive] = useState(false);
  const onClickHandler = (e) => {
    e.stopPropagation();
    setIsActive((x) => !x)
  }
  return (
    <>
      <button
        stopPropagation
        className={styles.main}
        onClick={onClickHandler}
        style={{ color: applicationStatus[status].color }}
      >
        {applicationStatus[status].label}
        <Icon icon={applicationStatus[status].icon} />
      </button>
      {!!isActive && <SelectionPopup currentStatus={status} onClose={() => setIsActive(false)}/>}
    </>
  );
};

export default StatusButton;
