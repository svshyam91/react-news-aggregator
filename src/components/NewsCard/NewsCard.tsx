import React from 'react';
import { Grid, Typography } from '@mui/material';

import { useTheme } from '../../constants/themes/themeContext';
import { TITLE_FONT_SIZE } from '../../constants/fonts/fontSize';

const NewsCard = () => {
    const { theme } = useTheme();
    return (
        <Grid
            container
            item
            xs={12}
            lg={6}
            direction='column'
            bgcolor={theme.CONTAINER_BACKGROUND}
            borderRadius='10px'
            padding='10px'
        >
            <Grid container item direction='row-reverse'>
                <Grid item xs={12} md='auto'>
                    <img
                        src='data:image/jpeg;base64,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'
                        width='100%'
                        height='100%'
                        style={{ borderRadius: '10px' }}
                    />
                </Grid>
                <Grid item xs={12} md container direction='column' >
                    <Grid item mb='10px'>
                        <img
                            src='https://upload.wikimedia.org/wikipedia/commons/7/7a/The_times_of_india.svg'
                            width='auto'
                            height='10px'
                        />
                    </Grid>
                    <Grid item xs>
                        <Typography
                            variant='inherit'
                            fontSize={TITLE_FONT_SIZE}
                        >
                            Supreme Court rejects to put Donald Trump's immunity
                            case on fast track | Mint
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container item>
                <Typography variant='caption' fontWeight='light'>
                    3 hours ago
                </Typography>
            </Grid>
        </Grid>
    );
};

export default NewsCard;
