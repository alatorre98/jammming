import React, { useEffect, useState } from "react";
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

    const pressEnter = (e) => {
        if(e.key === "Enter"){
            handleSearch();
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
                onKeyDown={pressEnter}
             />
             <button className={styles.searchButton} onClick={handleSearch}>
                Search
             </button>
        </div>
    )
};

export default SearchBar;