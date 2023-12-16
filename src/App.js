import React, { useState } from "react";
import styles from "./App.module.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Tracklist from "./components/Tracklist";
import Playlist from "./components/Playlist";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [songAdd, setSongAdd] = useState({});

  const handleSearch = (newSearch) => {
    setSearchValue(newSearch);
  };

  const handleAdd = (newSong) => {
    setSongAdd(newSong);
  };

  return (
    <div>
      <Header />
      <SearchBar onSearch={handleSearch} />
      <div className={styles.listContainer}>
        <Tracklist onAdd={handleAdd} />
        <Playlist />
      </div>
      
    </div>
      
  );
}

export default App;
