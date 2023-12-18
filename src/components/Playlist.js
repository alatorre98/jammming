import React, { useState, useEffect } from "react";
import styles from "../styles/Tracklist.module.css";
import Track from "./Track";

function Playlist({newSong}) {
    const [playlist, setPlaylist] = useState([]);

    useEffect(() => {
        if(Object.keys(newSong).length !== 0){
            setPlaylist((prevList) => [newSong, ...prevList])
        }
    }, [newSong]);

    console.log(playlist);

    return (
        <div className={styles.tralistContainer}>
            <h2>Playlist</h2>
            <hr></hr>
            <ul>
                {!playlist.length && <h2>Add some jams...</h2>}
            </ul>
            <div className={styles.saveContainer}>
                <button className={styles.saveButton}>Save To Spotify</button>
            </div>
            
        </div>
    )
};

export default Playlist;