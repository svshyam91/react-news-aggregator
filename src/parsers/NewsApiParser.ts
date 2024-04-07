import { INewsItem } from '../components/NewsItem';

const NewsApiParser = {
    parse: (articles: any) => {
        const newsItems: INewsItem[] = articles.map((article: any) => ({
            id: Date.now(),
            author: article.author,
            content: article.content,
            description: article.description,
            source: {
                name: article.source.name,
            },
            title: article.title,
            url: article.url,
            urlToImage: article.urlToImage,
            publishedAt: new Date(article.publishedAt),
        }));
        return newsItems;
    },
};

export default NewsApiParser;
