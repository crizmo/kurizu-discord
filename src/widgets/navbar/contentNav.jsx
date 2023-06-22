import React from 'react';
import { Box, Typography } from '@mui/material';

const ContentNavbar = () => {
  const serverName = 'My Server';
  
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        borderColor: '#2d2f34',
        height: '5vh',
        backgroundColor: '#313338',
        borderBottom: '0.1px solid',
      }}
    >
      <Typography variant="h6">{serverName}</Typography>
    </Box>
  );
};

export default ContentNavbar;
