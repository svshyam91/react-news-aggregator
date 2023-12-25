import axios from 'axios';

import { API_KEY } from '../constants/ApiKey';

const NewsApiService = {
    async fetchTopHeadlines() {
        const res = await axios.get(
            `https://newsapi.org/v2/top-headlines?country=${COUNTRY_CODE.INDIA}&apiKey=${API_KEY}`
        );
        return res.data;
    },
};

const COUNTRY_CODE = {
    INDIA: 'in',
};
