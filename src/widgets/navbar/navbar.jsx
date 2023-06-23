import React from 'react';
import { Box, Typography, InputBase } from '@mui/material';
import { Tag, WifiCalling3, Videocam, PushPin, PersonAdd, Search, Inbox, HelpOutline } from '@mui/icons-material';

const Navbar = ({ navTitle }) => {
  let serverName = navTitle;
  if (navTitle[0] === '/') {
    serverName = navTitle.slice(1);
  }
  serverName = serverName.charAt(0).toUpperCase() + serverName.slice(1);
  serverName === '' ? (serverName = "Kurizu's Server") : (serverName = serverName);

  let about = '';
  if (navTitle === '/' || navTitle === '/about' || navTitle === '/announcements') {
    about = '👋 Welcome to Kurizu\'s Server!';
  } else if (navTitle === '/general') {
    about = '📢 Just general chat!';
  } else {
    about = '📚 Some of my projects!';
  }

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between', // Added to align items on the ends
        borderColor: '#2d2f34',
        height: '4.9vh',
        backgroundColor: '#313338',
        borderBottom: '0.1px solid',
        padding: '0px 8px 0px 30px',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Tag
          sx={{
            marginRight: '4px',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#7e838c',
            filter: 'drop-shadow(0px 0px 2px #000000)',
            fontFamily: 'GG Sans, sans-serif',
          }}
        />
        <Typography
          sx={{
            fontSize: '1rem',
            fontFamily: 'GG Sans, sans-serif',
            color: '#fff',
          }}
        >
          {serverName}
        </Typography>
        <hr style={{
          height: '50%',
          width: '1px',
          backgroundColor: '#37393e',
          marginLeft: '10px',
          marginRight: '10px',
          border: '1px solid #37393e',
          borderRadius: '5px',
        }} />
        <Typography
          sx={{
            fontSize: '1rem',
            fontFamily: 'GG Sans, sans-serif',
            color: '#7e858c',
          }}
        >
          {about}
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        {/* Add your icons here */}
        <WifiCalling3 sx={{ marginRight: '25px', color: '#b4bac1', cursor: 'pointer' }} />
        <Videocam sx={{ marginRight: '25px', color: '#b4bac1', cursor: 'pointer' }} />
        <PushPin sx={{ marginRight: '25px', color: '#b4bac1', cursor: 'pointer' }} />
        <PersonAdd sx={{ marginRight: '25px', color: '#b4bac1', cursor: 'pointer' }} />
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#1e1f22',
            borderRadius: '5px',
            marginRight: '25px',
            padding: '0px 4px',
            width: '120px',
          }}
        >
          <InputBase
            sx={{ color: 'grey.100', fontSize: '0.8rem', fontFamily: 'GG Sans, sans-serif' }}
            placeholder="Search"
            inputProps={{ 'aria-label': 'search' }}
          />
          <Search sx={{ color: '#7e858c', margin: '0px 4px', fontSize: '1rem' }} />
        </Box>
        <Inbox sx={{ marginRight: '25px', color: '#b4bac1', cursor: 'pointer' }} />
        <HelpOutline sx={{ color: '#b4bac1', cursor: 'pointer' }} />
      </Box>
    </Box>
  );
};

export default Navbar;
