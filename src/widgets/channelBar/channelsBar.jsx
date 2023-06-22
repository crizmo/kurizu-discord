import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { KeyboardArrowDown, KeyboardArrowRight, Tag } from '@mui/icons-material';

const Channel = ({ id, name, unreadCount, isActive, handleClick }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        padding: '4px',
        cursor: 'pointer',
        backgroundColor: isActive ? '#3f4249' : 'transparent',
        marginRight: '8px',
        marginLeft: '8px',
        marginBottom: '4px',
        marginTop: '4px',
        borderRadius: '4px',

        '&:hover': {
          backgroundColor: '#3f4249',
        },
      }}
      onClick={() => handleClick(id)}
    >
      <Box
        sx={{
          height: '8px',
          width: '8px',
          borderRadius: '50%',
          backgroundColor: unreadCount > 0 ? 'white' : 'transparent',
          marginRight: '8px',
        }}
      />
      <Typography sx={{ color: isActive ? 'white' : '#878e95', 
      fontWeight: 'semibold', display: 'flex', alignItems: 'center', fontSize: '1rem' }}>
        <Tag sx={{ marginRight: '4px', fontSize: '1rem', fontWeight: 'bold' }} />
        {name.toLowerCase()}
      </Typography>
      {unreadCount > 0 && (
        <Box
          sx={{
            marginLeft: '40px',
            backgroundColor: 'red',
            borderRadius: '50%',
            height: '16px',
            width: '16px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            fontSize: '0.8rem',
            fontWeight: 'semibold'
          }}
        >
          {unreadCount}
        </Box>
      )}
    </Box>
  );
};

const ChannelCategory = ({ category, channels, activeChannelId, setActiveChannelId }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = (channelId) => {
    setActiveChannelId(channelId);
  };

  return (
    <Box sx={{ paddingTop: '10px' }}>
      <Typography
        sx={{
          color: '#777c84',
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer',
          fontSize: '0.8rem',
          fontWeight: 'bold',
        }}
        onClick={toggleDropdown}
      >
        {isOpen ? (
          <KeyboardArrowDown sx={{ marginRight: '4px', marginLeft: '4px', fontSize: '1rem' }} />
        ) : (
          <KeyboardArrowRight sx={{ marginRight: '4px', marginLeft: '4px', fontSize: '1rem' }} />
        )}
        {category.toUpperCase()}
      </Typography>

      {isOpen && (
        <Box>
          {channels.map((channel) => (
            <Channel
              key={channel.id}
              id={channel.id}
              name={channel.name}
              unreadCount={channel.unreadCount}
              isActive={activeChannelId === channel.id}
              handleClick={handleClick}
            />
          ))}
        </Box>
      )}
    </Box>
  );
};

const ChannelBar = () => {
  const [activeChannelId, setActiveChannelId] = useState(1);

  const channels = [
    {
      category: '🔮 Info',
      channels: [
        { id: 1, name: 'Home', unreadCount: 0, isActive: true, navigateTo: '/' },
        { id: 2, name: 'Announcements', unreadCount: 1, isActive: false, navigateTo: '/announcements' },
        { id: 3, name: 'About', unreadCount: 0, isActive: false, navigateTo: '/about' },
      ],
    },
    {
      category: '⭐ General',
      channels: [
        { id: 4, name: 'General', unreadCount: 0, isActive: false, navigateTo: '/general' },
      ],
    },
    {
      category: '📂 Projects',
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
    <Box width="100%" height="85vh" backgroundColor="#2b2d31">
      {channels.map((category) => (
        <ChannelCategory
          key={category.category}
          category={category.category}
          channels={category.channels}
          activeChannelId={activeChannelId}
          setActiveChannelId={setActiveChannelId}
        />
      ))}
    </Box>
  );
};

export default ChannelBar;
