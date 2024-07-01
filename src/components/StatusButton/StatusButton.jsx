import Icon from "../Icon/Icon";
import styles from "./StatusButton.module.css";
import applicationStatus from "../../constants/applicationStatuses";
import { useState } from "react";
import Button from "../Button/Button";
import StatusSelectionPopup from "../StatusSelectionPopup/StatusSelectionPopup";

const StatusButton = ({ data }) => {
  const [isActive, setIsActive] = useState(false);
  const onClickHandler = (e) => {
    e.stopPropagation();
    setIsActive((x) => !x)
  }
  return (
    <>
      <Button
        type="button"
        onClick={onClickHandler}
        style={{ color: applicationStatus[data.status].color }}
      >
        {applicationStatus[data.status].label}
        <Icon icon={applicationStatus[data.status].icon} />
      </Button>
      <StatusSelectionPopup isOpen={isActive} data={data} onClose={() => setIsActive(false)}/>
    </>
  );
};

export default StatusButton;
