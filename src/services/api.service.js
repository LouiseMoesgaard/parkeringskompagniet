const baseUrl = "https://api.coingecko.com/api/v3";

export default {

    get: async ()=>{
        const response = await fetch(baseUrl + `/coins/list`);
        return await response.json();
    }
}
