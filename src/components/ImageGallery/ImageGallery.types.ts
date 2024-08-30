import { Image } from "../App/App.types";

export interface ImageGalleryProps {
  images: Image[];
  handleImageClick: (image: Image) => void;
}
