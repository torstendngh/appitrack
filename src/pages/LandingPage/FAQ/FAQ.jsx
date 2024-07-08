import Foldout from "../../../components/Foldout/Foldout";
import styles from "./FAQ.module.css";

const FAQ = ({}) => {
  return (
    <div className={styles.main}>
      <h1 className={styles.title}>FAQ</h1>
      <div className={styles.content}>
        <Foldout label={"Is it free?"}>No</Foldout>
        <Foldout label={"Does the Calendar sync?"}>Yes</Foldout>
        <Foldout label={"Does the Calendar sync?"}>Yes</Foldout>
        <Foldout label={"Does the Calendar sync?"}>Yes</Foldout>
      </div>
    </div>
  );
};

export default FAQ;
