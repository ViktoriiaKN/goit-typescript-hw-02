export interface SearchBarProps {
  query: string;
  onSubmit: (query: string) => void;
  handleQueryChange: (newQuery: string) => void;
}
