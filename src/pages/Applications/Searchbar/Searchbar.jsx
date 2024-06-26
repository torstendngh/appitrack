import Icon from "../../../components/Icon/Icon";
import styles from "./Searchbar.module.css";

const Searchbar = ({}) => {
  return (
    <div className={styles.main}>
      <Icon icon={"magnifyingGlass"} />
      <input type="search" placeholder="Search.." />
    </div>
  );
};

export default Searchbar;
