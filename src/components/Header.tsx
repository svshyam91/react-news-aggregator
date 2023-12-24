import React, { useState } from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { Grid } from '@mui/material';

import { useTheme } from '../constants/themes/themeContext';
import ThemePickerButton from './ThemePicker/ThemePickerButton';
import ThemePicker from './ThemePicker/ThemePicker';

const Header = () => {
    const { theme } = useTheme();

    return (
        <Grid container item>
            <AppBar
                position='static'
                sx={{
                    backgroundColor: theme.HEADER_BACKGROUND,
                    color: theme.HEADER_TEXT_COLOR,
                }}
            >
                <Container maxWidth='xl'>
                    <Toolbar disableGutters>
                        <Grid container alignItems='center'>
                            <Grid container item xs>
                                <Grid item>
                                    <Typography variant='h6' noWrap>
                                        NEWS
                                    </Typography>
                                </Grid>
                            </Grid>

                            <Grid container item xs justifyContent='flex-end'>
                                <Grid item>
                                    <ThemePicker />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </Container>
            </AppBar>
        </Grid>
    );
};

export default Header;
