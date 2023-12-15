import React, { useState } from "react";
import styles from "../styles/SearchBar.module.css";

function SearchBar(props) {
    const [searchText, setSearchText] = useState("");

    const handleChange = (e) => {
        const value = e.target.value;

        setSearchText((prevText) => value);
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
             <button onClick={props.onSearch(searchText)}>
                Search
             </button>
        </div>
    )
};

export default SearchBar;