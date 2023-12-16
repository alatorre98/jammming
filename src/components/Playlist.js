import React from "react";
import styles from "../styles/Tracklist.module.css";
import Track from "./Track";

function Playlist() {
    return (
        <div className={styles.tralistContainer}>
            <h2>Playlist</h2>
            <hr></hr>
            <ul>
                <Track />
                <Track />
                <Track />
                <Track />
                <Track />
                <Track />
            </ul>
            <div className={styles.saveContainer}>
                <button className={styles.saveButton}>Save To Spotify</button>
            </div>
            
        </div>
    )
};

export default Playlist;