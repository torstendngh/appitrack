import styles from "./Pricing.module.css";
import Tier from "./Tier/Tier";

const features = [
    { feature: "200 applications", proFeature: "Unlimited applications", free: true, pro: true },
    { feature: "Create, edit, manage applications", free: true, pro: true },
    { feature: "Organize applications into sessions", free: true, pro: true },
    { feature: "Interview calendar", free: true, pro: true },
    { feature: "Contacts manager", free: true, pro: true },
    { feature: "Basic support", proFeature: "Priority support", free: true, pro: true },
    { feature: "Job application templates", free: true, pro: true },
    { feature: "Job search tips", free: true, pro: true },
    { feature: "Community forum", free: true, pro: true },
    { feature: "Basic analytics", proFeature: "Advanced analytics", free: true, pro: true },
    { feature: "Custom tags and notes", free: true, pro: true },
    { feature: "Sync calendar with Google Calendar", free: false, pro: true },
    { feature: "Customizable templates", free: false, pro: true },
    { feature: "Skill development resources", free: false, pro: true },
    { feature: "Personal branding tools", free: false, pro: true },
    { feature: "Interview preparation", free: false, pro: true },
    { feature: "Priority job alerts", free: false, pro: true },
    { feature: "Cloud storage", free: false, pro: true },
    { feature: "Custom notifications", free: false, pro: true },
    { feature: "Goal setting", free: false, pro: true },
    { feature: "Support the developers", free: false, pro: true },
];

const generateFeatures = (tier) => {
    return features.map(({ feature, proFeature, free, pro }) => ({
        feature: tier === "free" ? feature : (proFeature || feature),
        hasFeature: tier === "free" ? free : pro
    }));
};

const freeTierFeatures = generateFeatures("free");
const proTierFeatures = generateFeatures("pro");

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
                    description={"Advanced features for advanced users and support the developers."}
                    price={"4,99"}
                    isPrimary
                    features={proTierFeatures}
                />
            </div>
        </div>
    );
};

export default Pricing;
