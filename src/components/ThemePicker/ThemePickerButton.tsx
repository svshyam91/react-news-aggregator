import React from 'react';
import { IconButton } from '@mui/material';
import TuneIcon from '@mui/icons-material/Tune';
import { useTheme } from '../../constants/themes/themeContext';

interface ThemePickerButtonProps {
    themePickerHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const ThemePickerButton = (props: ThemePickerButtonProps) => {
    const themePickerHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        props.themePickerHandler(event);
    };

    const { theme } = useTheme();
    return (
        <IconButton
            style={{
                color: theme.HEADER_TEXT_COLOR,
            }}
            onClick={themePickerHandler}
        >
            <TuneIcon />
        </IconButton>
    );
};

export default ThemePickerButton;
