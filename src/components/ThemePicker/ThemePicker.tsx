import React, { useState } from 'react';
import { Popover, Grid, Paper } from '@mui/material';
import defaultTheme from '../../constants/themes/default';
import ThemePickerButton from './ThemePickerButton';

interface ThemePickerProps {}

const ThemePicker = (props: ThemePickerProps) => {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <ThemePickerButton themePickerHandler={handleClick} />
            <Popover
                id='theme-picker-popover'
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                onClose={handleClose}
            >
                <Grid container spacing={2} style={{ padding: '8px' }}>
                    <Grid item xs>
                        <Paper
                            sx={{ width: 30, height: 30, borderRadius: '50%' }}
                            style={{
                                background: `linear-gradient(90deg, ${defaultTheme.HEADER_BACKGROUND} 50%, ${defaultTheme.CONTENT_BACKGROUND} 50%)`,
                            }}
                        />
                    </Grid>
                    <Grid item xs>
                        <Paper
                            sx={{ width: 30, height: 30, borderRadius: '50%' }}
                            style={{
                                background: `linear-gradient(90deg, ${defaultTheme.HEADER_BACKGROUND} 50%, ${defaultTheme.CONTENT_BACKGROUND} 50%)`,
                            }}
                        />
                    </Grid>
                    <Grid item xs>
                        <Paper
                            sx={{ width: 30, height: 30, borderRadius: '50%' }}
                            style={{
                                background: `linear-gradient(90deg, ${defaultTheme.HEADER_BACKGROUND} 50%, ${defaultTheme.CONTENT_BACKGROUND} 50%)`,
                            }}
                        />
                    </Grid>
                </Grid>
            </Popover>
        </>
    );
};

export default ThemePicker;
