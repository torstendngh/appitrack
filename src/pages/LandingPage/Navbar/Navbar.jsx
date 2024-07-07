import { useContext, useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import AuthContext from "../../../contexts/AuthContext";
import Logo from "../../../components/Logo/Logo";
import Button from "../../../components/Button/Button";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const rootElement = document.getElementById('root');

    const handleScroll = () => {
      if (rootElement.scrollTop > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    rootElement.addEventListener('scroll', handleScroll);
    return () => {
      rootElement.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`${styles.main} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`${styles.logoContainer} ${!scrolled ? styles.hidden : ""}`}>
        <Logo size={24} />
        applyups
      </div>
      <div className={styles.linkContainer}>
        <a href="#features">Features</a>
        <a href="#pricing">Pricing</a>
        <a href="#faq">FAQ</a>
        <a href="#about">About</a>
        <a href="/login">{currentUser ? "Dashboard" : "Login"}</a>
      </div>
      <div className={`${styles.buttonContainer} ${!scrolled ? styles.hidden : ""}`}>
        <Button>{currentUser ? "Logout" : "Login"}</Button>
        <Button isPrimary>{currentUser ? "Dashboard" : "Sign up"}</Button>
      </div>
    </div>
  );
};

export default Navbar;