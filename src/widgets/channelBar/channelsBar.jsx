import React from 'react';
import { Box, Typography } from '@mui/material';

const Channel = ({ name, unreadCount }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        padding: '8px',
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
          marginRight: '8px',
        }}
      />
      <Typography variant="body1">{name}</Typography>
      {unreadCount > 0 && (
        <Box
          sx={{
            marginLeft: '8px',
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
    {
      category: 'Info',
      channels: [
        { id: 1, name: 'Home', unreadCount: 0, isActive: true, navigateTo: '/' },
        { id: 2, name: 'Announcements', unreadCount: 0, isActive: false, navigateTo: '/announcements' },
        { id: 3, name: 'About', unreadCount: 0, isActive: false, navigateTo: '/about' },
      ],
    },
    {
      category: 'General',
      channels: [
        { id: 4, name: 'General', unreadCount: 0, isActive: false, navigateTo: '/general' },
      ],
    },
    {
      category: 'Projects',
      channels: [
        { id: 5, name: 'AnyAnime', unreadCount: 0, isActive: false, navigateTo: '/anyanime' },
        { id: 6, name: 'Image2Url', unreadCount: 0, isActive: false, navigateTo: '/image2url' },
        { id: 7, name: 'Discord Cards', unreadCount: 0, isActive: false, navigateTo: '/discordcards' },
        { id: 8, name: 'Elina', unreadCount: 0, isActive: false, navigateTo: '/elina' },
        { id: 9, name: 'Cordle', unreadCount: 0, isActive: false, navigateTo: '/cordle' },
        { id: 10, name: 'Timely', unreadCount: 0, isActive: false, navigateTo: '/timely' },
        { id: 11, name: 'Emogit', unreadCount: 0, isActive: false, navigateTo: '/emogit' },
        { id: 12, name: 'Minikey', unreadCount: 0, isActive: false, navigateTo: '/minikey' },
        { id: 13, name: 'Type3D', unreadCount: 0, isActive: false, navigateTo: '/type3d' },
        { id: 14, name: 'Pixit', unreadCount: 0, isActive: false, navigateTo: '/pixit' },
      ],
    },
  ];

  return (
    <Box width="100%" height="95vh" backgroundColor="#2b2d31">
      {channels.map((category) => (
        <Box key={category.category}>
          <Typography variant="h6" sx={{ color: 'white', marginLeft: '16px' }}>
            {category.category}
          </Typography>
          {category.channels.map((channel) => (
            <Channel
              key={channel.id}
              name={channel.name}
              unreadCount={channel.unreadCount}
            />
          ))}
        </Box>
      ))}
    </Box>
  );
};

export default ChannelBar;
