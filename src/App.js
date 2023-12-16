import React, { useState } from "react";
import styles from "./App.module.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Tracklist from "./components/Tracklist";
import Playlist from "./components/Playlist";

function App() {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (newSearch) => {
    setSearchValue(newSearch);
  };

  return (
    <div>
      <Header />
      <SearchBar onSearch={handleSearch} />
      <div className={styles.listContainer}>
        <Tracklist />
        <Playlist />
      </div>
    </div>
      
  );
}

export default App;
