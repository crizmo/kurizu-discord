import React from 'react';
import { Box, Typography } from '@mui/material';

const Channel = ({ name, unreadCount }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        p: 2,
        cursor: 'pointer',
        '&:hover': {
          backgroundColor: 'grey.200',
        },
      }}
    >
      <Box
        sx={{
          height: '8px',
          width: '8px',
          borderRadius: '50%',
          backgroundColor: unreadCount > 0 ? 'primary.main' : 'transparent',
          mr: 1,
        }}
      />
      <Typography variant="body1">{name}</Typography>
      {unreadCount > 0 && (
        <Box
          sx={{
            ml: 1,
            backgroundColor: 'primary.main',
            borderRadius: '50%',
            height: '16px',
            width: '16px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'primary.contrastText',
            fontSize: '0.8rem',
          }}
        >
          {unreadCount}
        </Box>
      )}
    </Box>
  );
};

const ChannelBar = () => {
  const channels = [
    { id: 1, name: 'Channel 1', unreadCount: 3 },
    { id: 2, name: 'Channel 2', unreadCount: 0 },
    { id: 3, name: 'Channel 3', unreadCount: 1 },
    // Add more channel objects as needed
  ];

  return (
    <Box width="100%" height="95vh" backgroundColor="#2b2d31">
      <Typography variant="h5" sx={{ mb: 2 }}>
        Channels
      </Typography>
      {channels.map((channel) => (
        <Channel
          key={channel.id}
          name={channel.name}
          unreadCount={channel.unreadCount}
        />
      ))}
    </Box>
  );
};

export default ChannelBar;
