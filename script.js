async function fetchAPI() {

    const API_url = "https://api.ebird.org/v2/data/obs/KZ/recent";
    const response  = await fetch(API_url);
    const data = await response.json();

    return data;
}

    module.exports = fetchAPI;