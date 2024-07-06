import Button from "../../../../components/Button/Button";
import Icon from "../../../../components/Icon/Icon";
import styles from "./Tier.module.css";

const Tier = ({ title, description, price, isPrimary = false, features }) => {
  return (
    <div className={styles.main}>
      {
        isPrimary &&
        <div className={styles.badge}>
          <svg width="142" height="96" viewBox="0 0 142 96" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M62.311 2.52376C64.9408 0.0189293 68.9279 -0.400141 72.0211 1.50319L85.9468 10.0722C87.744 11.1781 89.9053 11.5292 91.9601 11.0489L111.159 6.56153C115.993 5.43161 120.679 8.93186 120.966 13.8881L121.228 18.3951C121.436 21.9817 124.01 24.9897 127.521 25.7503L135.609 27.5024C142.08 28.9043 144.144 37.1128 139.105 41.4089L137.149 43.0769C133.845 45.8937 133.39 50.8317 136.125 54.2039L136.865 55.1158C140.663 59.7991 138.111 66.8412 132.195 68.0046L117.333 70.9268C114.709 71.4428 112.516 73.2364 111.489 75.7064L107.472 85.3715C105.941 89.0552 101.931 91.0482 98.0701 90.0435L78.7176 85.0071C76.8428 84.5192 74.8546 84.7281 73.1222 85.5952L55.2397 94.5451C51.6724 96.3305 47.3349 95.215 45.0715 91.9301L39.1331 83.3113C37.6155 81.1087 35.0976 79.8103 32.4231 79.8512L17.2787 80.0827C11.2495 80.1749 7.28952 73.8172 10.031 68.4465L10.5647 67.4009C12.5387 63.5338 11.0678 58.798 7.25031 56.7298L4.98977 55.505C-0.832496 52.3505 -0.520448 43.8923 5.51843 41.1754L13.0654 37.78C16.3417 36.306 18.2336 32.8287 17.6915 29.2772L17.0103 24.8143C16.2612 19.9066 20.1165 15.5087 25.08 15.6088L44.7923 16.0064C46.902 16.049 48.9432 15.2563 50.4712 13.8009L62.311 2.52376Z" fill="currentColor"/>
</svg>

          <span>RECOMENDED</span>
        </div>
      }
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
      <div className={styles.priceContainer}>
        <span className={styles.price}>{price}</span>
        <span className={styles.priceUndertitle}> /month</span>
      </div>
      <Button isPrimary={isPrimary}>Subscribe</Button>
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
