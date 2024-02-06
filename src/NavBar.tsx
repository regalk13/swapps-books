import React, { useState } from 'react';
import SearchIcon from './search-icon.tsx'; // Import your SVG icon

export default function NavBar() {
    const [isSearchVisible, setSearchVisible] = useState(false);
    const toggleSearch = () => {
            setSearchVisible(!isSearchVisible);
    };
    return (
        <>
            <div className="navbar">
                <h1>SWAPPS BOOKS</h1>
                <SearchIcon className="search-icon" onClick={toggleSearch} />
            </div>
               {isSearchVisible && (
        <div className="search-field">
          <input type="text" placeholder="Search books..." />
        </div>
      )}
        </>
    )
}
