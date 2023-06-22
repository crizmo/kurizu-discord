import React from 'react';
import { Box, Typography } from '@mui/material';

const ChannelNavbar = () => {
  const serverName = 'Kurizu';
  const bannerImageUrl = 'https://wallpapercave.com/wp/wp3745669.png';

  return (
    <Box
      sx={{
        position: 'relative',
        height: '15vh',
      }}
    >
      <img
        src={bannerImageUrl}
        alt="Server Banner"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          left: '10%',
        }}
      >
        <Typography sx={{ color: '#eff0f2', fontSize: '1rem', fontWeight: 'bold' }}>
          {serverName}
        </Typography>
      </Box>
    </Box>
  );
};

export default ChannelNavbar;
