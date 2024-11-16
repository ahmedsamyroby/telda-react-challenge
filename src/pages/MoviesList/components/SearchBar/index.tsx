import React, { useEffect, useState } from "react";
import { useDebounce } from "../../../../hooks/helpers/useDebounce";
type SearchBarProps = {
  setMovieName: React.Dispatch<React.SetStateAction<string>>;
};

export default function SearchBar({ setMovieName }: SearchBarProps) {
  const [searchValue, setSearchValue] = useState("");
  const debouncedSearchValue = useDebounce(searchValue);

  useEffect(() => {
    setMovieName(debouncedSearchValue);
  }, [debouncedSearchValue, setMovieName]);

  return (
    <input
      type="text"
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
      placeholder="Search for a movie..."
      className="w-full max-w-md px-4 py-2 rounded-md bg-primary text-white border-2 border-primary focus:border-accent focus:outline-none"
    />
  );
}
