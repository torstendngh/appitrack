import { useContext, useEffect } from "react";
import Icon from "../../components/Icon/Icon";
import styles from "./Login.module.css";
import AuthContext from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = ({}) => {

  const {loginWithGoogle, currentUser} = useContext(AuthContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (currentUser) {
      navigate("/dashboard/applications")
    }
  }, [currentUser])

  return (
    <div className={styles.main}>
      <div className={styles.window}>
        <h1 className={styles.logo}>appitrack</h1>
        <span className={styles.description}>Login to synchronise application data</span>
        <button className={styles.googleButton} onClick={loginWithGoogle}>
          <Icon icon={"googleLogo"}/>
          Login with Google</button>
      </div>
    </div>
  );
};

export default Login;