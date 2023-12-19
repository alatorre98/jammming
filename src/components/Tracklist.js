import React from "react";
import styles from "../styles/Tracklist.module.css"
import Track from "./Track";

function Tracklist(props) { 

    return (
        <div className={styles.tralistContainer}>
            <h2>Results</h2>
            <hr></hr>
            <ul>
                {!props.songList.length && <h2>Look for something...</h2>}
                {props.songList.map((song, idx) => 
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