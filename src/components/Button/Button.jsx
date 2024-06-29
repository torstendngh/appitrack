import styles from "./Button.module.css";

const Button = ({
  children,
  isPrimary = false,
  title = null,
  onClick,
  shrinks = false,
  style,
  type = "button",
  className,
}) => {
  return (
    <button
      className={`${styles.main} ${isPrimary ? styles.primary : ""} ${
        shrinks ? styles.shrinks : ""
      } ${className}`}
      title={title}
      onClick={onClick}
      style={style}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
