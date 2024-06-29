import React, { useEffect, useRef } from "react";
import Icon from "../../components/Icon/Icon";
import Appointment from "./Appointment/Appointment";
import styles from "./Calendar.module.css";
import Button from "../../components/Button/Button";

const HeaderContainer = React.forwardRef(({ date, isToday }, ref) => (
  <div className={styles.headerContainer} ref={ref}>
    <h1 className={styles.date}>{date}</h1>
    {isToday && (
      <div className={styles.today}>
        <span>Today</span>
      </div>
    )}
    <div className={styles.line}></div>
  </div>
));

const Calendar = () => {
  const todayRef = useRef(null);

  const scrollToToday = () => {
    if (todayRef.current) {
      todayRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (todayRef.current) {
      todayRef.current.scrollIntoView({ behavior: "auto" });
    }
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.navbar}>
        <Button shrinks onClick={scrollToToday}>
          <Icon icon={"calendarToday_filled"} />
          <span className={styles.text}>Today</span>
        </Button>
      </div>
      <div className={styles.listContainer}>
        <div className={styles.list}>
          <HeaderContainer date="June 26" />
          <Appointment job={"Job Blabla"} />
          <Appointment job={"Job Blabla"} />
          <HeaderContainer date="June 27" isToday ref={todayRef} />
          <Appointment job={"Job Blabla"} />
          <Appointment job={"Job Blabla"} />
          <Appointment job={"Job Blabla"} />
          <HeaderContainer date="June 28" />
          <Appointment job={"Job Blabla"} />
          <HeaderContainer date="June 29" />
          <Appointment job={"Job Blabla"} />
          <Appointment job={"Job Blabla"} />
          <Appointment job={"Job Blabla"} />
        </div>
      </div>
    </div>
  );
};

export default Calendar;
