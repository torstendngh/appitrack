import Appointment from "./Appointment/Appointment";
import styles from "./Calendar.module.css";

const Calendar = ({}) => {
  return (
    <div className={styles.main}>
      <div className={styles.list}>
        <div className={styles.headerContainer}>
          <h1 className={styles.date}>June 26</h1>
        </div>
        <Appointment job={"Job Blabla"} />
        <Appointment job={"Job Blabla"} />
        <div className={styles.headerContainer}>
          <h1 className={styles.date}>June 27</h1>
          <div className={styles.today}>
            <span>Today</span>
          </div>
        </div>
        <Appointment job={"Job Blabla"} />
        <Appointment job={"Job Blabla"} />
        <Appointment job={"Job Blabla"} />
        <div className={styles.headerContainer}>
          <h1 className={styles.date}>June 28</h1>
        </div>
        <Appointment job={"Job Blabla"} />
        <div className={styles.headerContainer}>
          <h1 className={styles.date}>June 29</h1>
        </div>
        <Appointment job={"Job Blabla"} />
        <Appointment job={"Job Blabla"} />
        <Appointment job={"Job Blabla"} />
      </div>
    </div>
  );
};

export default Calendar;
