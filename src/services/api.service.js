const baseUrl = "api.coingecko.com/api/v3";

export default {

    get: async ()=>{
        const response = await fetch(baseUrl + `/coin/list`);
        return await response.json();
    }
}
