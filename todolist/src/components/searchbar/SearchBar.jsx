import React, { useState } from "react";
import "./searchbar.css";

const SearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");

  const handleChange = (e) => {
    setSearchText(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="searchbar_container">
      <input
        type="text"
        className="search_input"
        placeholder="Search tasks..."
        value={searchText}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
