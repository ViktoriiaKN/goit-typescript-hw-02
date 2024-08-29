import styles from "./ImageCard.module.css";
import { ImageCardProps } from "./ImageCard.types";

const ImageCard: React.FC<ImageCardProps> = ({ image, handleImageClick }) => {
  return (
    <div className={styles.imageCard}>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        onClick={() => handleImageClick(image)}
      />
    </div>
  );
};

export default ImageCard;
