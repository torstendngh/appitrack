import { useContext, useEffect } from "react";
import Icon from "../../components/Icon/Icon";
import styles from "./Login.module.css";
import AuthContext from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import Logo from "../../components/Logo/Logo";
import Button from "../../components/Button/Button";

const Login = ({}) => {
  const { loginWithGoogle, currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      navigate("/dashboard/applications");
    }
  }, [currentUser]);

  return (
    <div className={styles.main}>
      <div className={styles.window}>
        <div className={styles.imageContainer}></div>
        <div className={styles.contentContainer}>
          <h1 className={styles.logo} onClick={() => navigate("/")}>
            <Logo size={32} />
            <span>applyups</span>
          </h1>
          <h2 className={styles.title}>Login</h2>
          <span className={styles.description}>
            Login to synchronise
            <br />
            application data
          </span>
          <Button onClick={loginWithGoogle}>
            <Icon icon={"googleLogo"} />
            Login with Google
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
