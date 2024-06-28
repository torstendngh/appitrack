import DesktopTabBar from "./DesktopTabBar/DesktopTabBar";
import MobileTabBar from "./MobileTabBar/MobileTabBar";
import styles from "./Sidebar.module.css";

const Sidebar = ({}) => {
  return (
    <>
      <DesktopTabBar/>
      <MobileTabBar/>
    </>
  );
};

export default Sidebar;
