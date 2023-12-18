import React, { useState, useEffect } from "react";
import styles from "../styles/Track.module.css";

function Track({sign, songList, onAdd}) {
    const [songInfo, setSongInfo] = useState({});

    useEffect(() => {
        setSongInfo({
            title: songList.title,
            artist: songList.artist,
            album: songList.album
        });
    }
    , []);

    const handleClick = () => {
        onAdd(songInfo);
    };

    return (
        <li className={styles.track}>
            <div className={styles.songInfo}>
                <div>
                    <h3>{songList.title}</h3>
                    <p>{songList.artist} | {songList.album} </p>
                </div>
                <div className={styles.signContainer}> 
                    <p 
                        className={styles.songAction}
                        onClick={handleClick}
                        >
                            {sign ? '+' : '-'}
                    </p>
                </div>
            </div>
            <hr className={styles.songSeparator}></hr>
        </li>
        
    )
};

export default Track;