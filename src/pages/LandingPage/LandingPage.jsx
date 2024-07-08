import styles from "./LandingPage.module.css";
import screenshotApplicationsScreen from "../../assets/images/screenshot_applications_screen.png";
import Logo from "../../components/Logo/Logo";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";
import Navbar from "./Navbar/Navbar";
import Pricing from "./Pricing/Pricing";
import FAQ from "./FAQ/FAQ";
import Icon from "../../components/Icon/Icon";

const LandingPage = ({}) => {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className={styles.main}>
        <div className={styles.centerLayout}>
          <span className={styles.logo}>
            <Logo size={32} />
            <span>applyups</span>
          </span>
          <span className={styles.badge}><Icon icon={"sparkles_16px_filled"}/> Generous Free Version</span>
          <h1 className={styles.bigTitle}>
            Organize your
            <br />
            Applications
          </h1>
          <div className={styles.buttonContainer}>
            {!!currentUser ? (
              <Button isPrimary onClick={() => navigate("/dashboard")}>
                Dashboard
              </Button>
            ) : (
              <Button isPrimary onClick={() => navigate("/login")}>
                Get Started
              </Button>
            )}
            <Button>Pricing</Button>
          </div>
          <div className={styles.bigImage}>
            <img src={screenshotApplicationsScreen} alt="" />
          </div>
          <div className={styles.miniFeatures}>
            <div className={styles.miniFeature}>
              <Icon icon={"securityCheck_32px"} />
              <span className={styles.title}>Secure</span>
              <span className={styles.description}>Google Login</span>
            </div>
            <div className={styles.miniFeature}>
              <Icon icon={"chartRelationship_32px"} />
              <span className={styles.title}>All In One Solution</span>
              <span className={styles.description}>
                Organize Applications and Contacts
              </span>
            </div>
            <div className={styles.miniFeature}>
              <Icon icon={"cloud_32px"} />
              <span className={styles.title}>Web-Based</span>
              <span className={styles.description}>
                Data stored in the cloud, no app needed
              </span>
            </div>
          </div>
        </div>
        <div className={styles.content}>
          <Pricing />
          <FAQ />
          <div></div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
