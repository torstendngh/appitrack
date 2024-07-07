import styles from "./Pricing.module.css";
import Tier from "./Tier/Tier";

const freeTierFeatures = [
    {
        feature: "200 applications",
        hasFeature: true
    },
    {
        feature: "Create, edit, manage applications",
        hasFeature: true
    },
    {
        feature: "Organise applications into sessions",
        hasFeature: true
    },
    {
        feature: "Interview calendar",
        hasFeature: true
    },
    {
        feature: "Contacts manager",
        hasFeature: true
    },
    {
        feature: "Basic support",
        hasFeature: true
    },
    {
        feature: "Sync calendar with Google Calendar",
        hasFeature: false
    },
    {
        feature: "Support the developers",
        hasFeature: false
    },
]

const proTierFeatures = [
    {
        feature: "Unlimited applications",
        hasFeature: true
    },
    {
        feature: "Create, edit, manage applications",
        hasFeature: true
    },
    {
        feature: "Organise applications into sessions",
        hasFeature: true
    },
    {
        feature: "Interview calendar",
        hasFeature: true
    },
    {
        feature: "Contacts manager",
        hasFeature: true
    },
    {
        feature: "Priority support",
        hasFeature: true
    },
    {
        feature: "Sync calendar with Google Calendar",
        hasFeature: true
    },
    {
        feature: "Support the developers",
        hasFeature: true
    },
]

const Pricing = ({}) => {
  return (
    <div className={styles.main}>
        <h1 className={styles.title}>Pricing</h1>
        <div className={styles.thirdsContainer}>
            <Tier
                title={"Free"}
                description={"For anyone who needs a simple application tracker tool. Free forever."}
                price={"0,-"}
                features={freeTierFeatures}
                isActive
            />
            <Tier
                title={"Pro"}
                description={"Advanced features for advanced users and support the developers. "}
                price={"4,99"}
                isPrimary
                features={proTierFeatures}
            />
        </div>
    </div>
  );
};

export default Pricing;