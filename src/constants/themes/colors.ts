import { Theme } from './themeTypes';

const COLORS: Theme[] = [
    {
        // https://colorhunt.co/palette/163020304d30b6c4b6eef0e5
        ID: 1,
        NAME: 'Earthy Elegance',
        HEADER_BACKGROUND: '#163020', // 1
        HEADER_TEXT_COLOR: '#EEF0E5', // 4
        CONTENT_BACKGROUND: '#EEF0E5', // 4
        CONTAINER_BACKGROUND: '#B6C4B6', // 3
        TEXT_COLOR: '#304D30', // 2
    },
    {
        // https://colorhunt.co/palette/0f0f0f232d3f005b41008170
        ID: 2,
        NAME: 'Midnight Serenity',
        HEADER_BACKGROUND: '#27374D',
        HEADER_TEXT_COLOR: '#DDE6ED',
        CONTENT_BACKGROUND: '#DDE6ED',
        CONTAINER_BACKGROUND: '#9DB2BF',
        TEXT_COLOR: '#526D82',
    },
    {
        // https://colorhunt.co/palette/dcf2f17fc7d93654860f1035
        ID: 3,
        NAME: 'Oceanic Bliss',
        HEADER_BACKGROUND: '#DCF2F1',
        HEADER_TEXT_COLOR: '#0F1035',
        CONTENT_BACKGROUND: '#0F1035',
        CONTAINER_BACKGROUND: '#365486',
        TEXT_COLOR: '#7FC7D9',
    },
    {
        ID: 4,
        NAME: 'DARK',
        HEADER_BACKGROUND: '#FF204E',
        HEADER_TEXT_COLOR: '#00224D',
        CONTENT_BACKGROUND: '#00224D',
        CONTAINER_BACKGROUND: '#5D0E41',
        TEXT_COLOR: '#A0153E',
    },
    {
        ID: 5,
        NAME: 'LIGHT',
        HEADER_BACKGROUND: '#007F73',
        HEADER_TEXT_COLOR: '#FFF455',
        CONTENT_BACKGROUND: '#FFF455',
        CONTAINER_BACKGROUND: '#FFC700',
        TEXT_COLOR: '#4CCD99',
    },
];

export default COLORS;
