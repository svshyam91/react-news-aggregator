import React from 'react';
import { Grid, Typography } from '@mui/material';
import { useTheme } from '../constants/themes/themeContext';

const Content = () => {
    const { theme } = useTheme();
    return (
        <Grid
            container
            item
            xs
            sx={{ backgroundColor: theme.CONTENT_BACKGROUND }}
        >
            <Typography>Content</Typography>
        </Grid>
    );
};

export default Content;
