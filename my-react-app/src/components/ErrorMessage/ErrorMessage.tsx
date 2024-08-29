import styles from "./ErrorMessage.module.css";
import { ErrorMessageProps } from "./ErrorMessage.types";

const ErrorMessage: React.FC<ErrorMessageProps> = ({ error }) => {
  return (
    <div className={styles.ErrorMessage}>
      <p>{error}</p>
    </div>
  );
};

export default ErrorMessage;
