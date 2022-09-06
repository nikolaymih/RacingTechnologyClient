import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

 export const LoadingSpinner = () => {
    return (
        <Box sx={{ display: 'flex', margin: '20rem' }}>
            <CircularProgress />
        </Box>
    );
}