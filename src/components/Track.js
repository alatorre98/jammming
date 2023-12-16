import React, { useState } from "react";
import styles from "../styles/Track.module.css";

function Track({sign, songList}) {
    const [songInfo, setSongInfo] = useState({});

    return (
        <li className={styles.track}>
            <div className={styles.songInfo}>
                <div>
                    <h3>{songList.title}</h3>
                    <p>{songList.artist} | {songList.album} </p>
                </div>
                <div className={styles.signContainer}> 
                    <p className={styles.songAction}>{sign ? '+' : '-'}</p>
                </div>
            </div>
            <hr className={styles.songSeparator}></hr>
        </li>
        
    )
};

export default Track;