import React, { useState } from "react";
import styles from "../styles/Tracklist.module.css";
import Track from "./Track";

function Playlist() {
    const [playlist, setPlaylist] = useState([]);

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