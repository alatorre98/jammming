import React, { useState, useEffect } from "react";
import styles from "../styles/Track.module.css";

function Track({sign, songList, onAdd, onDelete, songIdx, songTrack}) {
    const [songInfo, setSongInfo] = useState({});

    useEffect(() => {
        setSongInfo({
            title: songList.name,
            artist: songList.artists[0].name,
            album: songList.album.name,
            uri: songList.uri
        });
    }
    , [songList]);

    // useEffect(() => {
    //     setSongInfo({
    //         title: songList.name,
    //         artist: songList.artist,
    //         album: songList.album,
    //         uri: songList.uri
    //     });
    // }
    // , [songTrack]);

    const handleClick = () => {
      if(sign) {
        onAdd(songInfo)
      } else if (!sign) {
        onDelete(songIdx)
      }
        
    };

    return (
        <li className={styles.track}>
            <div className={styles.songInfo}>
                <div>
                    <h3>{songInfo.title}</h3>
                    <p>{songInfo.artist} | {songInfo.album} </p>
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