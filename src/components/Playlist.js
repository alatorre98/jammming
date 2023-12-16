import React from "react";
import styles from "../styles/Tracklist.module.css"

function Playlist() {
    return (
        <div className={styles.tralistContainer}>
            <h2>Playlist</h2>
            <hr></hr>
            <ul>
                <h3>Test</h3>
                <h3>Test</h3>
                <h3>Test</h3>
                <h3>Test</h3>
            </ul>
            <div className={styles.saveContainer}>
                <button className={styles.saveButton}>Save To Spotify</button>
            </div>
            
        </div>
    )
};

export default Playlist;