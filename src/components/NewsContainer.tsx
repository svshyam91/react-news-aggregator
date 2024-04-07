import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Grid, Button } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import NewsItem, { INewsItem } from './NewsItem';
import { useTheme } from '../constants/themes/themeContext';

interface NewsContainerProps {
    heading: string;
    articles: INewsItem[];
}

const NewsContainer = (props: NewsContainerProps) => {
    const { theme } = useTheme();

    return (
        <Grid
            container
            item
            bgcolor={theme.CONTENT_BACKGROUND}
            borderRadius='10px'
            padding='10px'
        >
            <Grid
                container
                item
                borderBottom={`1px solid ${theme.CONTAINER_BACKGROUND}`}
            >
                <Button size='small' endIcon={<KeyboardArrowRightIcon />}>
                    {props.heading}
                </Button>
            </Grid>
            <Grid container item direction='column'>
                {props.articles.map((article) => (
                    <NewsItem article={article} key={uuidv4()} />
                ))}
            </Grid>
        </Grid>
    );
};

export default NewsContainer;
