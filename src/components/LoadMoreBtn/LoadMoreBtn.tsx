import styles from "./LoadMoreBtn.module.css";
import { LoadMoreBtnProps } from "./LoadMoreBtn.types";

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ handleLoadMore }) => {
  return (
    <div className={styles.loadMoreContainer}>
      <button onClick={handleLoadMore} className={styles.loadMoreButton}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
