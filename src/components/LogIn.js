import React from "react";
import { authorizationUrl } from "./searchResults";
import styles from "../styles/Tracklist.module.css";

function LogIn() {
    return (
        <div className={styles.login}>
            <button className={styles.saveButton}><a href={authorizationUrl}>Log In!</a></button>
        </div>
        
    )
};

export default LogIn;