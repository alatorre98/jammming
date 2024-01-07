import React, { useState, useEffect } from "react";
import styles from "./App.module.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Tracklist from "./components/Tracklist";
import Playlist from "./components/Playlist";
import LogIn from "./components/LogIn";
import { getAccessToken, getUser } from "./components/searchResults";

function App() {
  const [songAdd, setSongAdd] = useState({});
  const [searchResults, setSearchResults] = useState([]);
  const [tokenInfo, setTokenInfo] = useState("");
  const [logedIn, setLogedIn] = useState(false);
  const [user, setUser] = useState("");

  useEffect(() => {
      const fetchToken = async() => {
          try {
              // Get the current URL
              const currentUrl = window.location.href;
              // Create a URL object (for easier parsing)
              const urlObj = new URL(currentUrl);
              // Use URLSearchParams to get the 'code' query parameter
              const authCode = urlObj.searchParams.get('code');
              if (authCode) {
                console.log(authCode);
                const result = await getAccessToken(authCode);
                if(result){
                    setTokenInfo(result.access_token);
                }
              }
          }
          catch (error) {
              console.log(error);
          }
      }
      fetchToken();
      const authCodeURL = window.location.href;
      // change after auth is working
      if (authCodeURL.includes("code=")) {
        setLogedIn(true);
      }
  }, []);

  useEffect(() => {
    const fetchUser = async() => {
      try {
        const result = await getUser(tokenInfo);
        if (result) {
          setUser(result.id);
        }
      }
      catch (error) {
        console.log(error);
      }
    }
    fetchUser();
  }, [tokenInfo]);

  const handleSearch = (newResults) => {
    setSearchResults(newResults);
  };

  const handleAdd = (newSong) => {
    setSongAdd(newSong); 
  };

  

  return (
    <div className={styles.appContainer}>
      <Header />
      {!logedIn && <LogIn />}
      { logedIn &&
        <>
          <SearchBar onSearch={handleSearch} token={tokenInfo}/>
          <div className={styles.listContainer}>
            <Tracklist onAdd={handleAdd} songList={searchResults} />
            <Playlist newSong={songAdd} username={user} token={tokenInfo}/>
          </div> 
        </>
      }
    </div>
      
  );
}

export default App;
