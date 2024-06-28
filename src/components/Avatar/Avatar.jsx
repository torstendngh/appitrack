import { useContext } from "react";
import Icon from "../Icon/Icon";
import styles from "./Avatar.module.css";
import AuthContext from "../../contexts/AuthContext";

const Avatar = ({}) => {

  const {currentUser} = useContext(AuthContext)

  return (
    <div className={styles.main}>
      {!!currentUser ? <img src={currentUser.photoURL} alt={`${currentUser.displayName}'s profile`} /> : <Icon icon={"user_filled"} />}
    </div>
  );
};

export default Avatar;
