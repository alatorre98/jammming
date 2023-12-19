import React, { useState } from "react";
import styles from "../styles/SearchBar.module.css";
import { songs } from "../playlistData.js";

function SearchBar(props) {
    const [searchText, setSearchText] = useState("");

    const handleChange = (e) => {
        setSearchText(e.target.value);
    }

    const handleSearch = () => {
        if(searchText) {
            props.onSearch(songs);
        } 
    }

    return (
        <div className={styles.searchContainer}>
            <input
                placeholder="What's your jam?" 
                maxLength="23"
                name="search"
                type="text"
                value={searchText}
                onChange={handleChange}
             />
             <button className={styles.searchButton} onClick={handleSearch}>
                Search
             </button>
        </div>
    )
};

export default SearchBar;