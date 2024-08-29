import ReactModal from "react-modal";
import styles from "./ImageModal.modal.css";
import { ImageModalProps } from "./ImageModal.types";

ReactModal.setAppElement("#root");

const ImageModal: React.FC<ImageModalProps> = ({ modalImage, closeModal }) => {
  if (!modalImage) return null;

  return (
    <ReactModal
      isOpen={!!modalImage}
      onRequestClose={closeModal}
      contentLabel="Image Modal"
      className={styles.modal}
      overlayClassName={styles.overlay}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.75)",
        },
      }}
    >
      <div style={{ position: "relative" }}>
        <button onClick={closeModal} className={styles.closeButton}>
          Close
        </button>
        <img
          src={modalImage.urls.regular}
          alt={modalImage.alt_description}
          className={styles.image}
        />
      </div>
    </ReactModal>
  );
};

export default ImageModal;
