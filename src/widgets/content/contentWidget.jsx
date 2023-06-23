import React from 'react';
import { Box, Typography } from '@mui/material';

const ContentWidget = () => {
  const messages = [
    { id: 1, text: 'Message 1' },
    { id: 2, text: 'Message 2' },
    { id: 3, text: 'Message 3' },
    // Add more message objects as needed
  ];

  return (
    <Box width="100%" height="90vh" backgroundColor="#313338">
      <Typography variant="h5" sx={{ mb: 2 }}>
        Content
      </Typography>
      <Box
        sx={{
          border: '1px solid',
          borderColor: 'grey.300',
          borderRadius: '8px',
          overflowY: 'auto',
          p: 2,
        }}
      >
        {messages.map((message) => (
          <Box
            key={message.id}
            sx={{
              marginBottom: '8px',
              padding: '8px',
              backgroundColor: 'grey.100',
              borderRadius: '8px',
            }}
          >
            <Typography variant="body1">{message.text}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ContentWidget;
