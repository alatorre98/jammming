import React, { useState, useEffect } from "react";
import styles from "../styles/Tracklist.module.css";
import Track from "./Track";
import { createPlaylist } from "../components/searchResults";

function Playlist({newSong, username, token}) {
    const [playlist, setPlaylist] = useState([]);
    const [playlistName, setPlaylistName] = useState('');
    const [tracksURI, setTracksURI] = useState([]);
    const [savedPlaylist, setSavedPlaylist] = useState({
        name: "",
        songs: []
    });

    useEffect(() => {
        if(Object.keys(newSong).length !== 0 && 
        newSong !== playlist[0]){
            setPlaylist((prevList) => [newSong, ...prevList]);
            setTracksURI((prevTracks) => [newSong.uri, ...prevTracks]);
        }
    }, [newSong]);

    const handleDelete = (removeSongIdx) => {
        setPlaylist((prevList) => 
            playlist.filter((song, index) => removeSongIdx !== index)
        );
        setTracksURI((prevTracks) => 
            tracksURI.filter((track, index) => removeSongIdx !== index)
        );
    };

    const handleChange = (e) => {
        setPlaylistName(e.target.value);
    }

    const createUserPlaylist = async() => {
        try {
            const spotifyPlaylist = await createPlaylist(token, username, savedPlaylist.songs, savedPlaylist.name);
            console.log(spotifyPlaylist);
        }
        catch (error) {
            console.log(error);
        }
    }

    const handleSave = () => {
        if(!playlist.length || !playlistName){
            alert('You need a name or songs in your playlist');
        } else {
            setSavedPlaylist((prevList) => {
                return {
                    name: playlistName,
                    songs: tracksURI
                }
            });
        }
    }

    useEffect(() => {
        setPlaylist([]);
        setPlaylistName("");
        setTracksURI([]);
        createUserPlaylist();
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
                        key={song.uri}
                        songIdx={idx}
                        sign={false}
                        songList={song}
                        isPlaylist={true}
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