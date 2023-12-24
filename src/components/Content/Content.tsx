import React from 'react';
import { Grid } from '@mui/material';

import classes from './Content.module.css';
import { useTheme } from '../../constants/themes/themeContext';
import NewsCard from '../NewsCard/NewsCard';

const Content = () => {
    const { theme } = useTheme();
    return (
        <Grid
            container
            item
            xs
            sx={{ backgroundColor: theme.CONTENT_BACKGROUND }}
            direction='column'
            className={classes.content}
        >
            <Grid container item>
                <NewsCard />
            </Grid>
        </Grid>
    );
};

export default Content;
