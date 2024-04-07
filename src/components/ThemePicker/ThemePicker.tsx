import React, { useState } from 'react';
import { Popover, Grid, Paper, Typography } from '@mui/material';

import COLORS from '../../constants/themes/colors';
import { Theme } from '../../constants/themes/themeTypes';
import ThemePickerButton from './ThemePickerButton';
import { useTheme } from '../../constants/themes/themeContext';

interface ThemePickerProps {}

const ThemePicker = (props: ThemePickerProps) => {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement>(null);
    const { theme, changeTheme } = useTheme();

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleThemeChange = (theme: Theme) => {
        changeTheme(theme);
        localStorage.setItem('themeId', theme.ID.toString());
        handleClose();
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
                <Grid
                    container
                    spacing={2}
                    direction='column'
                    style={{ padding: '8px' }}
                >
                    {COLORS.map((color) => (
                        <Grid
                            item
                            key={color.ID}
                            onClick={() => handleThemeChange(color)}
                        >
                            <Paper
                                sx={{
                                    width: 30,
                                    height: 30,
                                    borderRadius: '50%',
                                }}
                                style={{
                                    background: `linear-gradient(90deg, ${color.HEADER_BACKGROUND} 50%, ${color.CONTENT_BACKGROUND} 50%)`,
                                }}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Popover>
        </>
    );
};

export default ThemePicker;
