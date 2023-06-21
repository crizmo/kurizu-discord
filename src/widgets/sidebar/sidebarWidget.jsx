import React from 'react';
import { Box, Typography } from '@mui/material';
import { CheckCircle, RadioButtonUnchecked } from '@mui/icons-material';

const Server = ({ isActive }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        p: 2,
        backgroundColor: isActive ? 'primary.main' : 'transparent',
        color: isActive ? 'primary.contrastText' : 'inherit',
        borderRadius: '8px',
        cursor: 'pointer',
        '&:hover': {
          backgroundColor: isActive ? 'primary.main' : 'grey.200',
        },
      }}
    >
      {isActive ? (
        <CheckCircle sx={{ mr: 1 }} />
      ) : (
        <RadioButtonUnchecked sx={{ mr: 1 }} />
      )}
    </Box>
  );
};

const SidebarWidget = () => {
  const servers = [
    { id: 1, isActive: true },
    { id: 2, isActive: false },
    { id: 3, isActive: false },
    // Add more server objects as needed
  ];

  return (
    <Box width="100%" height="100vh" backgroundColor="#1e1f22">
      <Typography variant="h5" sx={{ mb: 2 }}>
        Servers
      </Typography>
      {servers.map((server) => (
        <Server
          key={server.id}
          isActive={server.isActive}
        />
      ))}
    </Box>
  );
};

export default SidebarWidget;
