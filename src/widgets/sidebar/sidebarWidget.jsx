import React from 'react';
import { Box, Typography } from '@mui/material';
import { useState } from "react";

import servers from '../../data/servers';

const Server = ({ isActive, serverName, serverIcon }) => {
  const [hoveredServer, setHoveredServer] = useState(false);

  return (
    <Box sx={{ position: "relative" }}>
      {isActive && (
        <hr style={{
          height: '70%',
          width: '5px',
          backgroundColor: '#fff',
          position: 'absolute',
          left: '0%',
          top: '-10%',
          transform: 'translateX(-50%)',
          borderRadius: '0 4px 4px 0px',
          border: 'none',
        }} />
      )}
      <Box
        sx={{
          position: "relative",
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: "0px 13px 13px 13px",
          backgroundColor: '#2b2d31',
          overflow: 'hidden',
          borderRadius: isActive ? '30%' : '50%',
          transition: 'border-radius 0.3s ease-in-out',
          "&:hover": {
            borderRadius: '30%',
          },
        }}
        onMouseEnter={() => setHoveredServer(true)}
        onMouseLeave={() => setHoveredServer(false)}
      >
        {isActive ? (
          <img src={serverIcon} alt={serverName} width="45vw" height="auto" />
        ) : (
          <img src={serverIcon} alt={serverName} width="45vw" height="auto" />
        )}
      </Box>
      {hoveredServer && (
        <Typography
          sx={{
            position: 'absolute',
            top: '40%',
            left: '80%',
            transform: 'translateY(-50%)',
            backgroundColor: '#0e0c0b',
            color: '#fff',
            padding: '4px 8px',
            borderRadius: '4px',
            fontSize: '12px',
            whiteSpace: 'nowrap',
            marginLeft: '8px',
            zIndex: 1,
            display: 'flex',
            alignItems: 'center',
            fontFamily: "GG Sans, sans-serif"
          }}
        >
          {serverName}
        </Typography>
      )}
    </Box>
  );
};


const SidebarWidget = () => {

  return (
    <Box>
      <Box width="100%" height="100vh" backgroundColor="#1e1f22">
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'primary.contrastText',
          borderRadius: '100px',
          cursor: 'pointer',
          margin: "0px 13px 13px 13px",
        }}>
          <img src="https://cdn.discordapp.com/attachments/977949070893125632/1121303247714537552/discordlogo.png" alt="My Server" width="45vw" height="auto" style={{
            borderRadius: '100px',
            marginTop: "10px"
          }} />
        </Box>
        <hr style={{
          color: "grey",
          backgroundColor: "grey",
          height: 0.1,
          width: "30%",
          alignItems: 'center',
          justifyContent: 'center',
        }} />
        {servers.map((server) => (
          <Box key={server.id} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={() => {
            if (server.navigate !== '/') {
              window.open(server.navigate, '_blank')
            }
          }
          }>
            <Server
              key={server.id}
              isActive={server.isActive}
              serverName={server.serverName}
              serverIcon={server.serverIcon}
              navigate={server.navigate}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default SidebarWidget;
