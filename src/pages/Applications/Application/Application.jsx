import StatusButton from "../../../components/StatusButton/StatusButton";
import styles from "./Application.module.css";

const Application = ({data}) => {
  return (
    <div className={styles.main}>
        <div className={styles.textContainer}>
            <p className={styles.job}>{data.job}</p>
            <p className={styles.company}>{data.company}</p>
            <div className={styles.detailsContainer}>
              <p>Applied on 23.04.2024</p>
            </div>
        </div>
        <div className={styles.buttonContainer}>
            <StatusButton status={data.status}/>
        </div>
    </div>
  );
};

export default Application;