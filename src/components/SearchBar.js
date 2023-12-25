import React, { useEffect, useState } from "react";
import styles from "../styles/SearchBar.module.css";
import { searchQuery } from "./searchResults.js";

function SearchBar(props) {
    const [searchText, setSearchText] = useState("");
    const [songs, setSongs] = useState([]);

    const handleChange = (e) => {
        setSearchText(e.target.value);
    }

    const handleSearch = async() => {
        try {
            const result = await searchQuery(props.token, searchText);
            setSongs(result.tracks.items);
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if(searchText) {
            props.onSearch(songs);
        } 
    }, [songs]);

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