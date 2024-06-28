import { useContext } from "react";
import Icon from "../Icon/Icon";
import styles from "./Avatar.module.css";
import AuthContext from "../../contexts/AuthContext";

const Avatar = ({}) => {

  const {currentUser, logout} = useContext(AuthContext)

  return (
    <button className={styles.main} onClick={logout}>
      {!!currentUser ? <img src={currentUser.photoURL} alt={`${currentUser.displayName}'s profile`} /> : <Icon icon={"user_filled"} />}
    </button>
  );
};

export default Avatar;
