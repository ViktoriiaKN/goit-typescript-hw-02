import "../../App.css";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageModal from "../ImageModal/ImageModal";
import { useCallback, useEffect, useState } from "react";
import { fetchImages } from "../../services/api";
import { Image } from "./App.types";

function App() {
  const [query, setQuery] = useState<string>("");
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [modalImage, setModalImage] = useState<Image | null>(null);

  const handleSearch = useCallback(async (seachQuery: string) => {
    setLoading(true);
    setError(null);

    try {
      const data = await fetcImages(seachQuery);
      setImages(data.results);
      setPage(1);
    } catch (error: any) {
      if (error.response && error.response.status === 403) {
        setError(error.message);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  const handleQueryChange = (newQuery: string) => {
    setQuery(newQuery);
  };

  const handleLoadMore = async () => {
    setLoading(true);

    try {
      const data = await fetchImages(query, 5, page + 1);
      setImages((prevImages) => [...prevImages, ...data.results]);
      setPage((prevPage) => prevPage + 1);
    } catch (error: any) {
      if (error.response && error.response.status === 403) {
        setError(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleImageClick = (image: Image) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  useEffect(() => {
    if (query) {
      handleSearch(query);
    }
  }, [query, handleSearch]);

  return (
    <div>
      <SearchBar
        query={query}
        onSubmit={handleSearch}
        handleQueryChange={handleQueryChange}
      />
      {loading && <Loader />}
      {error && <ErrorMessage error={error} />}
      {images.length > 0 && (
        <ImageGallery images={images} handleImageClick={handleImageClick} />
      )}
      {images.length > 0 && !loading && (
        <LoadMoreBtn handleLoadMore={handleLoadMore} />
      )}
      {modalImage && (
        <ImageModal modalImage={modalImage} closeModal={closeModal} />
      )}
    </div>
  );
}

export default App;
