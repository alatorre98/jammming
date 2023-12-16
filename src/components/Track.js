import React from "react";
import styles from "../styles/Track.module.css";

function Track() {
    return (
        <li className={styles.track}>
            <div className={styles.songInfo}>
                <div>
                    <h3>Test Track</h3>
                    <p>Test Artist | Test Album</p>
                </div>
                <div className={styles.plusContainer}> 
                    <p className={styles.addSong}>+</p>
                </div>
            </div>
            <hr className={styles.songSeparator}></hr>
        </li>
        
    )
};

export default Track;