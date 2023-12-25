const getAccessToken = async() => {
    const clientId = '7245baf792fe4bb0bdffc97e200ad8f3';
    const clientSecret = 'd241a02ac3fa4325a118ae1641d87bf3';

    const url = 'https://accounts.spotify.com/api/token';
    const options = {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/x-www-form-urlencoded'
        },
        body: `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`
    }

    try {
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

export { getAccessToken, searchQuery };