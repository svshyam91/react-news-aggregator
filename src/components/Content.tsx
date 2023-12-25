import React from 'react';
import { Grid } from '@mui/material';

import { useTheme } from '../constants/themes/themeContext';
import NewsCard from './NewsCard';

const Content = () => {
    const { theme } = useTheme();
    return (
        <Grid
            container
            item
            xs
            sx={{ backgroundColor: theme.CONTENT_BACKGROUND }}
            direction='column'
            p='10px'
        >
            <Grid container item>
                <NewsCard />
            </Grid>
        </Grid>
    );
};

export default Content;
