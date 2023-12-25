import React, { useState, useEffect } from "react";
import styles from "./App.module.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Tracklist from "./components/Tracklist";
import Playlist from "./components/Playlist";
import { getAccessToken } from "./components/searchResults";

function App() {
  const [songAdd, setSongAdd] = useState({});
  const [searchResults, setSearchResults] = useState([]);
  const [tokenInfo, setTokenInfo] = useState("");

  useEffect(() => {
      const fetchToken = async() => {
          try {
              const result = await getAccessToken();
              if(result){
                  setTokenInfo(result.access_token);
              }
          }
          catch (error) {
              console.log(error);
          }
      }
      fetchToken();
  }, []);

  const handleSearch = (newResults) => {
    setSearchResults(newResults);
  };

  const handleAdd = (newSong) => {
    setSongAdd(newSong); 
  };

  return (
    <div className={styles.appContainer}>
      <Header />
      <SearchBar onSearch={handleSearch} token={tokenInfo}/>
      <div className={styles.listContainer}>
        <Tracklist onAdd={handleAdd} songList={searchResults} />
      <Playlist newSong={songAdd} />
      </div>
      
    </div>
      
  );
}

export default App;
