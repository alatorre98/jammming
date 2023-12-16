import React from "react";
import styles from "../styles/Tracklist.module.css"
import Track from "./Track";

function Tracklist() {
    return (
        <div className={styles.tralistContainer}>
            <h2>Results</h2>
            <hr></hr>
            <ul>
                <Track />
                <Track />
                <Track />
                <Track />
                <Track />
                <Track />
            </ul>
            
        </div>
    )
};

export default Tracklist;