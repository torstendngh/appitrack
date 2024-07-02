import styles from "./LandingPage.module.css";
import screenshotApplicationsScreen from "../../assets/images/screenshot_applications_screen.png"
import Logo from "../../components/Logo/Logo";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";

const LandingPage = ({}) => {
    const {currentUser} = useContext(AuthContext)
    const navigate = useNavigate()
  return (
    <div className={styles.main}>
        <div className={styles.centerLayout}>
            <span className={styles.logo}><Logo size={32}/><span>applyups</span></span>
            <h1 className={styles.bigTitle}>Organize your<br />Applications</h1>
            <div className={styles.buttonContainer}>
                <Button>Pricing</Button>
                {
                    !!currentUser ?
                    <Button isPrimary onClick={() => navigate("/dashboard")}>Dashboard</Button>
                    :
                    <Button isPrimary onClick={() => navigate("/login")}>Login</Button>
                }
            </div>
            <div className={styles.bigImage}>
                <img src={screenshotApplicationsScreen} alt="" />
            </div>
        </div>
    </div>
  );
};

export default LandingPage;