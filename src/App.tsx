import React from 'react';
import { Grid } from '@mui/material';

import Header from './components/Header';
import Content from './components/Content';

function App() {
    return (
        <Grid container direction='column' style={{ height: '100%' }}>
            <Header />
            <Content />
        </Grid>
    );
}

export default App;
