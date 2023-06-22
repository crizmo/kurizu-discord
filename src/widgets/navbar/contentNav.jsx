import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';

const ContentNavbar = () => {
  const serverName = 'My Server';
  const serverIcon = 'https://example.com/server-icon.png';

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        borderColor: '#2d2f34',
        height: '4.9vh',
        backgroundColor: '#313338',
        borderBottom: '0.1px solid',
      }}
    >
      <Avatar
        src={serverIcon}
        alt={serverName}
        sx={{ width: '32px', height: '32px', mr: 2 }}
      />
      <Typography variant="h6">{serverName}</Typography>
    </Box>
  );
};

export default ContentNavbar;
