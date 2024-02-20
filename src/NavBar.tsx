import { useState } from "react";
import SearchIcon from "./search-icon.tsx";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const [isSearchVisible, setSearchVisible] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  const toggleSearch = () => {
    setSearchVisible(!isSearchVisible);
  };

  const handleSearch = () => {
    console.log("Searching for:", searchValue);
    // Perform search functionality here
    toggleSearch();
    navigate(`/?q=${searchValue}`);
    window.location.reload();
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <>
      <div className="navbar">
        <a href="/swapps-books/" className="link">
          <h1>SWAPPS BOOKS</h1>
        </a>
        <SearchIcon className="search-icon" onClick={toggleSearch} />
      </div>
      {isSearchVisible && (
        <div className="search-field">
          <input
            type="text"
            placeholder="Search books..."
            value={searchValue}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
          />
          <button className="search-button" onClick={handleSearch}>
            Search
          </button>
        </div>
      )}
    </>
  );
}
