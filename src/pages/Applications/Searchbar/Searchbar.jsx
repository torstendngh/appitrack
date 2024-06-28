import Icon from "../../../components/Icon/Icon";
import styles from "./Searchbar.module.css";

const Searchbar = ({onChange, value}) => {
  return (
    <div className={styles.main}>
      <Icon icon={"magnifyingGlass"} />
      <input type="search" placeholder="Search.." onChange={onChange} value={value}/>
    </div>
  );
};

export default Searchbar;
