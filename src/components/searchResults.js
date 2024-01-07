const clientId = '7245baf792fe4bb0bdffc97e200ad8f3';
const clientSecret = 'd241a02ac3fa4325a118ae1641d87bf3';
const redirectUri = encodeURIComponent('https://meek-bonbon-c631b4.netlify.app/');
const scopes = 'user-read-private user-read-email playlist-modify-public playlist-modify-private'; // Add other scopes as needed

export const authorizationUrl = `https://accounts.spotify.com/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&scope=${encodeURIComponent(scopes)}`;

const getAccessToken = async(authorizationCode) => {
    const url = 'https://accounts.spotify.com/api/token';
    const base64Credentials = btoa(`${clientId}:${clientSecret}`);
    const options = {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/x-www-form-urlencoded',
          'Authorization': `Basic ${base64Credentials}`
        },
        body: `grant_type=authorization_code&code=${authorizationCode}&redirect_uri=${redirectUri}`
    }

    try {
        console.log(options)
        const response = await fetch(url, options);
        if(response.ok) {
            const result = await response.json();
            return result;
        }
    }
    catch (error) {
        console.log(error)
    }
};

const searchQuery = async(token, seachText) => {
    const searchArray = seachText.split(" ");
    const searchQ = searchArray.join("+");

    const url = `https://api.spotify.com/v1/search?q=${searchQ}&type=track&limit=10`;
    const options = {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }

    try {
        const response = await fetch(url, options);
        if(response.ok) {
            const result = await response.json();
            return result;
        }
    }
    catch (error) {
        console.log(error);
    }
};

const getUser = async(token) => {
    const url = 'https://api.spotify.com/v1/me';
    const options = {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }
    
    try {
        const response = await fetch(url, options);
        if (response.ok) {
            const result = await response.json();
            return result;
        }
    }
    catch (error) {
        console.log(error);
    }
};

const createPlaylist = async(token, username, tracks, playlistName) => {
    const url = "https://api.spotify.com/";
    const createURL = `v1/users/${username}/playlists`;


    const optionsForPlaylist = {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: playlistName,
            description: 'Added with Jammming',
            public: false
        })
    }

    console.log(optionsForPlaylist);

    try {
        const playlistResponse = await fetch((url + createURL), optionsForPlaylist);
        if (playlistResponse.ok) {
            const playlistResult = await playlistResponse.json();
            const addURL = `v1/playlists/${playlistResult.id}/tracks?uris=${tracks.join(',')}`;

            const optionsForTracks = {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            };

            try {
                await fetch((url + addURL), optionsForTracks);
                return playlistResult;
            }
            catch (error) {
                console.log(error);
            }
        }
    }
    catch (error) {
        console.log(error);
    }
};



export { getAccessToken, searchQuery, getUser, createPlaylist };