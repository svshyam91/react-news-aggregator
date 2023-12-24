import React from 'react';
import { Grid } from '@mui/material';

import Header from './components/Header';
import Content from './components/Content/Content';

function App() {
    return (
        <Grid container direction='column'>
            <Header />
            <Content />
        </Grid>
    );
}

export default App;
