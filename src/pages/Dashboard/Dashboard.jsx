import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import styles from "./Dashboard.module.css";

const Dashboard = ({}) => {
  return (
    <div className={styles.main}>
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Dashboard;
