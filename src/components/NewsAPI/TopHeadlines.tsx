import React, { useEffect, useState } from 'react';

import NewsApiService from '../../services/NewsApiService';
import NewsApiParser from '../../parsers/NewsApiParser';
import NewsContainer from '../NewsContainer';
import { INewsItem } from '../NewsItem';

const TopHeadlines = () => {
    const [newsArticles, setNewsArticles] = useState<INewsItem[]>([]);

    useEffect(() => {
        async function getTopHeadlines() {
            try {
                const res = await NewsApiService.fetchTopHeadlines();
                if (res.status === 'ok') {
                    const articles = NewsApiParser.parse(res.articles);
                    setNewsArticles(articles);
                }
            } catch (error: any) {}
        }
        getTopHeadlines();
    }, []);
    return <NewsContainer heading='Top Headlines' articles={newsArticles} />;
};

export default TopHeadlines;
