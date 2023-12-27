import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { Box, Grid } from '@mui/material';

export default function SplashScreen() {


    return (

        <Grid
            sx={{height:'100vh'}}
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
        >
            <Grid item>
                <Box>
                    <CircularProgress />
                </Box>
            </Grid>
        </Grid>
    );
}
