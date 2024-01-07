import React, { useState, useEffect } from "react";
import styles from "../styles/Track.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { faCirclePause } from "@fortawesome/free-solid-svg-icons";

function Track({sign, songList, onAdd, onDelete, songIdx, isPlaylist}) {
    const [songInfo, setSongInfo] = useState({});
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {       
        if (isPlaylist) {
            setSongInfo({
                title: songList.title,
                artist: songList.artist,
                album: songList.album,
                uri: songList.uri
            })
        }
        else {
            setSongInfo({
                title: songList.name,
                artist: songList.artists[0].name,
                album: songList.album.name,
                uri: songList.uri,
                preview: songList.preview_url
            })
        }
    }
    , [songList]);

    const handleClick = () => {
      if(sign) {
        onAdd(songInfo)
      } else if (!sign) {
        onDelete(songIdx)
      }
        
    };

    const handlePlay = () => {
        // Toggle the state first
        setIsPlaying(!isPlaying);
    };

    return (
        <li className={styles.track}>
            <div className={styles.songInfo}>
                <div>
                    <h3>{songInfo.title}
                        {!isPlaylist && 
                            <FontAwesomeIcon 
                                icon={isPlaying ? faCirclePause : faCirclePlay} 
                                className={styles.playPause}
                                onClick={handlePlay}
                            />
                        }
                    </h3>
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