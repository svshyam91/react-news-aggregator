import React from 'react';
import { Grid, Typography, Link } from '@mui/material';

import { useTheme } from '../constants/themes/themeContext';
import { TITLE_FONT_SIZE } from '../constants/fonts/fontSize';

interface NewsItemProps {
    article: INewsItem;
}

const NewsItem = (props: NewsItemProps) => {
    const { theme } = useTheme();
    console.log('Theme: ', theme);
    console.log('Articles: ', props.article);
    return (
        <Grid
            container
            item
            xs
            justifyContent='space-between'
            borderBottom={`1px solid ${theme.CONTAINER_BACKGROUND}`}
            pt='10px'
            pb='10px'
        >
            <Grid container item>
                <Grid item px={0.5} md={2}>
                    <img
                        src={props.article.urlToImage}
                        width='auto'
                        height='75px'
                        style={{ borderRadius: '10px' }}
                    />
                </Grid>
                <Grid item xs px={0.5} md={10}>
                    <Link
                        variant='inherit'
                        underline='hover'
                        fontSize={TITLE_FONT_SIZE}
                        href={props.article.url}
                        style={{ color: theme.HEADER_BACKGROUND }}
                    >
                        {props.article.title}
                    </Link>
                </Grid>
            </Grid>
            {/* <Grid container item xs></Grid> */}
            {/* <Grid container item>
                <Typography variant='caption' fontWeight='light'>
                    {props.article.publishedAt.getDate()}
                </Typography>
            </Grid> */}
        </Grid>
    );
};

export default NewsItem;

export interface INewsItem {
    id: number;
    source: {
        id?: string;
        name: string;
    };
    author: string;
    title: string;
    description?: string;
    url: string;
    urlToImage: string;
    publishedAt: Date;
    content?: string;
}
