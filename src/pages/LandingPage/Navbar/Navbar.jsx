import { useContext } from "react";
import styles from "./Navbar.module.css";
import AuthContext from "../../../contexts/AuthContext";

const Navbar = ({}) => {
    const {currentUser} = useContext(AuthContext)
  return (
    <div className={styles.main}>
        <a href="">Features</a>
        <a href="">Pricing</a>
        <a href="">FAQ</a>
        <a href="">About</a>
        <a href="/login">{!!currentUser ? "Dashboard" : "Login"}</a>
    </div>
  );
};

export default Navbar;