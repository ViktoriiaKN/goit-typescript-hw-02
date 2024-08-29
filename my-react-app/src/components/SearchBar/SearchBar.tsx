import toast from "react-hot-toast";
import styles from "./SearchBar.module.css";
import { SearchBarProps } from "./SearchBar.types";

const SearchBar: React.FC<SearchBarProps> = ({
  query,
  onSubmit,
  handleQueryChange,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleQueryChange(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim() === "") {
      toast.error("Please, enter a search term");
      return;
    }
    onSubmit(query.trim());
    handleQueryChange("");
  };

  return (
    <header className={styles.searchBar}>
      <form onSubmit={handleSubmit} className={styles.searchForm}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={handleChange}
          className={styles.searchInput}
        />
        <button type="submit" className={styles.searchButton}>
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
