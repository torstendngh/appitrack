import Icon from "../../../components/Icon/Icon";
import styles from "./Appointment.module.css";

const Appointment = ({ job }) => {
  return (
    <div className={styles.main}>
      <span className={styles.time}>20:00</span>
      <span className={styles.job}>Company · Job Name</span>
      <div className={styles.location}>
        <Icon icon={"location_16px_filled"} />
        <span>Blabla Str. 53</span>
      </div>
    </div>
  );
};

export default Appointment;
