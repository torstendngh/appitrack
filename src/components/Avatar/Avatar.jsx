import Icon from "../Icon/Icon";
import styles from "./Avatar.module.css";

const Avatar = ({ src, onClick, alt = "Settings" }) => {
  return (
    <button className={styles.main} onClick={onClick}>
      {!!src ? <img src={src} alt={alt} /> : <Icon icon={"user_filled"} />}
    </button>
  );
};

export default Avatar;
