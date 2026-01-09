export default async function fetchAPI() {

    const API_url = "https://api.ebird.org/v2/data/obs/KZ/recent";
    const token = process.env.EBIRD_TOKEN;

    if (!token) {
        throw new Error("Missing EBIRD_TOKEN environment variable");
    }

    const response = await fetch(API_url, {
        method: "GET",
        headers: {
            "X-eBirdApiToken": token
        }
    });

    if (!response.ok) {
        const body = await response.text();
        throw new Error(`eBird API error ${response.status}: ${body}`);
    }

    const data = await response.json();
  
    return data;

}
