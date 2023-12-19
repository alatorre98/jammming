import React, { useState } from "react";
import styles from "./App.module.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Tracklist from "./components/Tracklist";
import Playlist from "./components/Playlist";

function App() {
  const [songAdd, setSongAdd] = useState({});
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (newResults) => {
    setSearchResults(newResults);
  };

  const handleAdd = (newSong) => {
    setSongAdd(newSong); 
  };

  return (
    <div className={styles.appContainer}>
      <Header />
      <SearchBar onSearch={handleSearch} />
      <div className={styles.listContainer}>
        <Tracklist onAdd={handleAdd} songList={searchResults} />
        <Playlist newSong={songAdd} />
      </div>
      
    </div>
      
  );
}

export default App;
