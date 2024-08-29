import ImageCard from "../ImageCard/ImageCard";
import styles from "./ImageGallery.module.css";
import { ImageGalleryProps } from "./ImageGallery.types";

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  handleImageClick,
}) => {
  return (
    <ul className={styles.gallery}>
      {images.map((image) => (
        <li key={image.id} onClick={() => handleImageClick(image)}>
          <ImageCard image={image} handleImageClick={handleImageClick} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
