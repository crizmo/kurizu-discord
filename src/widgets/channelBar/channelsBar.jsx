import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { KeyboardArrowDown, KeyboardArrowRight, Tag, SubdirectoryArrowRight } from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';

import channels from '../../data/channels';
import threads from '../../data/threads';

const Channel = ({ id, name, unreadCount, ping, handleClick}) => {
  const location = useLocation();
  let isActivePage = location.pathname === "/" + name.toLowerCase();
  if (location.pathname === "/" || location.pathname === "") {
    isActivePage = name.toLowerCase() === "home";
  } else if (location.pathname === "/discordcards") {
    isActivePage = name.toLowerCase() === "discord cards";
  }

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        padding: '4px',
        cursor: 'pointer',
        backgroundColor: isActivePage ? '#3f4249' : 'transparent',
        marginRight: '8px',
        marginLeft: '8px',
        marginBottom: '4px',
        marginTop: '4px',
        borderRadius: '4px',
        '&:hover': {
          backgroundColor: '#3f4249',
        },
      }}
      onClick={() => {
        handleClick(id);
      }}
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
      <Typography
        sx={{
          color: unreadCount > 0 || isActivePage ? 'white' : '#878e95',
          fontWeight: 'semibold',
          display: 'flex',
          alignItems: 'center',
          fontSize: '1rem',
          fontFamily: 'GG Sans, sans-serif',
        }}
      >
        <Tag sx={{ marginRight: '4px', fontSize: '1.2rem' }} />
        {name.toLowerCase()}
      </Typography>
      {ping > 0 && (
        <Box
          sx={{
            marginLeft: 'auto',
            backgroundColor: 'red',
            borderRadius: '50%',
            height: '16px',
            width: '16px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            fontSize: '0.8rem',
            fontWeight: 'semibold',
            fontFamily: 'GG Sans, sans-serif',
          }}
        >
          {ping}
        </Box>
      )}
    </Box>
  );
};

const Thread = ({ id, name, parentEndpoint, handleClick }) => {
  const location = useLocation();

  const isActivePage = location.pathname === parentEndpoint + "/" + name.toLowerCase();

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        padding: '4px',
        cursor: 'pointer',
        backgroundColor: isActivePage ? '#3f4249' : 'transparent',
        marginRight: '8px',
        marginLeft: '16px',
        marginTop: '4px',
        borderRadius: '4px',
        '&:hover': {
          backgroundColor: '#3f4249',
        },
      }}
      onClick={() => {
        handleClick(id);
      }}
    >
      <Box
        sx={{
          height: '8px',
          width: '8px',
          borderRadius: '50%',
          backgroundColor: 'transparent',
          marginRight: '8px',
        }}
      />
      <Typography
        sx={{
          color: isActivePage ? 'white' : '#878e95',
          fontWeight: 'semibold',
          display: 'flex',
          alignItems: 'center',
          fontSize: '1rem',
          fontFamily: 'GG Sans, sans-serif',
        }}
      >
        <SubdirectoryArrowRight sx={{ marginRight: '4px', fontSize: '1rem', fontWeight: 'bold' }} />
        {name.toLowerCase()}
      </Typography>
    </Box>
  );
};

const ChannelCategory = ({ category, channels, setNavTitle }) => {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = (channelId, navigateTo) => {
    setNavTitle(navigateTo);
    navigate(navigateTo);
  };

  return (
    <Box sx={{ paddingTop: '10px', userSelect: 'none', WebkitTapHighlightColor: 'transparent' }}>
      <Typography
        sx={{
          color: '#777c84',
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer',
          fontSize: '0.8rem',
          fontWeight: 'bold',
          fontFamily: 'GG Sans, sans-serif',
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
            <React.Fragment key={channel.id}>
              <Channel
                id={channel.id}
                name={channel.name}
                unreadCount={channel.unreadCount}
                ping={channel.ping}
                handleClick={() => handleClick(channel.id, channel.navigateTo)}
              />
              {
                threads.map((thread) => (
                  thread.parentEndpoint === channel.navigateTo ? (
                    <Thread
                      key={thread.id}
                      id={thread.id}
                      name={thread.name}
                      parentEndpoint={thread.parentEndpoint}
                      handleClick={() => handleClick(thread.id, thread.navigateTo)}
                    />
                  ) : null
                ))

              }
            </React.Fragment>
          ))}
        </Box>
      )}
    </Box>
  );
};

const ChannelBar = ({ setNavTitle }) => {
  const [activeChannelId, setActiveChannelId] = useState(1);

  return (
    <Box width="100%" height="88vh" backgroundColor="#2b2d31" overflow="auto">
      {channels.map((category) => (
        <Box
          key={category.category}
          sx={{ cursor: 'pointer', userSelect: 'none', WebkitTapHighlightColor: 'transparent' }}
        >
          <ChannelCategory
            key={category.category}
            category={category.category}
            channels={category.channels}
            activeChannelId={activeChannelId}
            setActiveChannelId={setActiveChannelId}
            setNavTitle={setNavTitle}
          />
        </Box>
      ))}
    </Box>
  );
};

export default ChannelBar;
