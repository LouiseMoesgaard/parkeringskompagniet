const baseUrl = "https://api.coingecko.com/api/v3";

export default {

    getAll: async ()=>{
        const response = await fetch(baseUrl + `/coins/list`);
        return await response.json();
    },

    get: async (id)=>{
        const response = await fetch(baseUrl + `/coins/${id}`);
        return await response.json();
    },
    getChartData: async (id, currency, days) => {
        const response = await fetch(baseUrl + `/coins/${id}/market_chart?` + new URLSearchParams({
            vs_currency: currency,
            days,
        }));
        return await response.json();
    }
}
