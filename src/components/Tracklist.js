import React from "react";
import styles from "../styles/Tracklist.module.css"
import Track from "./Track";
import { songs } from "../playlistData.js";

function Tracklist(props) { 

    return (
        <div className={styles.tralistContainer}>
            <h2>Results</h2>
            <hr></hr>
            <ul>
                {songs.map((song, idx) => 
                    <Track 
                    key={idx}
                    sign={true}
                    songList={song}
                    onAdd={props.onAdd} 
                    />
                )}
            </ul>
            
        </div>
    )
};

export default Tracklist;