import React from 'react';
import { Grid } from '@mui/material';

import { useTheme } from '../constants/themes/themeContext';
import TopHeadlines from './NewsAPI/TopHeadlines';

const Content = () => {
    const { theme } = useTheme();
    return (
        <Grid
            container
            item
            xs
            sx={{ backgroundColor: theme.CONTAINER_BACKGROUND }}
            direction='column'
            p='10px'
        >
            <Grid container item>
                <TopHeadlines />
            </Grid>
        </Grid>
    );
};

export default Content;
