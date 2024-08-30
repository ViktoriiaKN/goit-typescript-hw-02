export interface Image {
  urls: {
    regular: string;
  };
  alt_description: string;
}

export interface ImageModalProps {
  modalImage: Image | null;
  closeModal: () => void;
}
