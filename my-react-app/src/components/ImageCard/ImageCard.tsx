import styles from "./ImageCard.module.css";
import { ImageCardProps } from "./ImageCard.types"; // Імпорт типів

const ImageCard: React.FC<ImageCardProps> = ({ image, handleImageClick }) => {
  return (
    <div className={styles.imageCard}>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        onClick={() => handleImageClick(image)} // Передаємо зображення при кліку
      />
    </div>
  );
};

export default ImageCard;
