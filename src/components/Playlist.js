import React, { useState, useEffect } from "react";
import styles from "../styles/Tracklist.module.css";
import Track from "./Track";

function Playlist({newSong}) {
    const [playlist, setPlaylist] = useState([]);
    const [playlistName, setPlaylistName] = useState('');
    const [savedPlaylist, setSavedPlaylist] = useState({
        name: "",
        songs: []
    });

    useEffect(() => {
        if(Object.keys(newSong).length !== 0 && 
        newSong !== playlist[0]){
            setPlaylist((prevList) => [newSong, ...prevList])
        }
    }, [newSong]);

    const handleDelete = (removeSongIdx) => {
        setPlaylist((prevList) => 
            playlist.filter((song, index) => removeSongIdx !== index)
        );
    };

    const handleChange = (e) => {
        setPlaylistName(e.target.value);
    }

    const handleSave = () => {
        if(!playlist.length || !playlistName){
            alert('You need a name or songs in your playlist');
        } else {
            setSavedPlaylist((prevList) => {
                return {
                    name: playlistName,
                    songs: playlist
                }});
                setPlaylist([]);
                setPlaylistName("");
        }
    }

    useEffect(() => {
        console.log(savedPlaylist);
    }, [savedPlaylist]);

    return (
        <div className={styles.tralistContainer}>
            <input 
                placeholder="Name your playlist..."
                name="playlist"
                id="playlist"
                value={playlistName}
                onChange={handleChange}
                maxLength="20"
                type="text"
                className={styles.playlistInput}
            />
            <hr></hr>
            <ul>
                {!playlist.length && <h2>Add some jams...</h2>}
                {playlist.map((song, idx) => 
                    <Track 
                        key={idx}
                        songIdx={idx}
                        sign={false}
                        songList={song}
                        onDelete={handleDelete}
                    />
                )}
            </ul>
            <div className={styles.saveContainer}>
                <button onClick={handleSave} className={styles.saveButton}>Save To Spotify</button>
            </div>
            
        </div>
    )
};

export default Playlist;