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
  isDisabled = false
}) => {
  const handleClick = (e) => {
    e.stopPropagation()
    onClick(e)
  };
  return (
    <button
      className={`${styles.main} ${isPrimary ? styles.primary : ""} ${
        shrinks ? styles.shrinks : ""
      } ${className}`}
      title={title}
      onClick={handleClick}
      style={style}
      type={type}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};

export default Button;
