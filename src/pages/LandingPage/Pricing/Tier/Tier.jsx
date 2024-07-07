import Button from "../../../../components/Button/Button";
import Icon from "../../../../components/Icon/Icon";
import styles from "./Tier.module.css";

const Tier = ({ title, description, price, isPrimary = false, features, isActive }) => {
  return (
    <div className={styles.main}>
      {
        isPrimary &&
        <div className={styles.badge}>
          <span>RECOMENDED</span>
        </div>
      }
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
      <div className={styles.priceContainer}>
        <span className={styles.price}>{price}</span>
        <span className={styles.priceUndertitle}> /month</span>
      </div>
      <Button isPrimary={isPrimary} isDisabled={isActive}>{isActive ? "Selected" : "Subscribe"}</Button>
      <div className={styles.featuresContainer}>
        {features.map((feature, index) =>
          feature.hasFeature ? (
            <div
              key={index}
              className={`${styles.feature} ${styles.hasFeature}`}
            >
              <Icon icon={"tick"} />
              {feature.feature}
            </div>
          ) : (
            <div key={index} className={styles.feature}>
              <Icon icon={"horizontalLine"} />
              {feature.feature}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Tier;
