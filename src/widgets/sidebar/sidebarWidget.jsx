import React from 'react';
import { Box, Typography } from '@mui/material';
import { useState } from "react";

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
          <img src={serverIcon} alt={serverName} width="100%" height="100%" />
        ) : (
          <img src={serverIcon} alt={serverName} width="100%" height="100%" />
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
  const servers = [
    {
      id: 1, isActive: true,
      serverName: 'Kurizu',
      serverIcon: 'https://cdn.discordapp.com/attachments/970974282681307187/1119105882194726952/kurizutaz.png',
      navigate: '/'
    },
    {
      id: 2, isActive: false,
      serverName: 'Github',
      serverIcon: 'https://cdn3.iconfinder.com/data/icons/inficons/512/github.png',
      navigate: 'https://github.com/crizmo/'
    },
    {
      id: 3, isActive: false,
      serverName: 'Discord',
      serverIcon: 'https://static.vecteezy.com/system/resources/previews/006/892/625/original/discord-logo-icon-editorial-free-vector.jpg',
      navigate: 'https://discord.gg/drunkbetch-782646778347388959'
    },
    {
      id: 4, isActive: false,
      serverName: 'Instagram',
      serverIcon: 'https://cdn.discordapp.com/attachments/977949070893125632/999254421416452176/instagram.png',
      navigate: 'https://www.instagram.com/criz_595/'
    },
    {
      id: 5, isActive: false,
      serverName: 'Twitter',
      serverIcon: 'https://cdn.discordapp.com/attachments/977949070893125632/999254025302200380/unknown.png',
      navigate: 'https://twitter.com/KurizuTaz'
    },
    {
      id: 6, isActive: false,
      serverName: 'Replit',
      serverIcon: 'https://media.discordapp.net/attachments/977949070893125632/999255947564285972/replit.png',
      navigate: 'https://replit.com/@kurizu'
    },
  ];

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
          <img src="https://cdn.discordapp.com/attachments/977949070893125632/1121303247714537552/discordlogo.png" alt="My Server" width="100%" height="100%" style={{
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
                window.open(server.navigate, '_blank')}
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
