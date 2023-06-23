import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';

const UserMessage = ({ username, time, avatar, role, message, image }) => {
    const renderMessageContent = () => {
        const linkRegex = /<a\s+href=(['"])(.*?)\1>(.*?)<\/a>/g; // Regular expression to match <a href="...">...</a>
        const imageRegex = /<img\s+src=(['"])(.*?)\1\s*\/?>/g; // Regular expression to match <img src="..." ... />
        const iframeRegex = /<iframe.*?<\/iframe>/g; // Regular expression to match <iframe ...></iframe>
        const parts = message.split('\n'); 
      
        return (
          <Typography
            sx={{
              color: 'white',
              fontSize: '0.9rem',
              wordWrap: 'break-word',
              maxWidth: '50vw',
              whiteSpace: 'pre-line',
            }}
          >
            {parts.map((part, index) => {
                                console.log(part.match(imageRegex))
              if (part.match(linkRegex)) {
                return (
                  <span
                    key={index}
                    dangerouslySetInnerHTML={{
                      __html: part.replace(linkRegex, (match, _, href, content) => {
                        return `<a href="${href}" 
                            style="color: #40c4fb;
                            text-decoration: none;
                            font-weight: bold;
                            cursor: pointer;    
                        ">${content}</a>`;
                      }),
                    }}
                  />
                );
              } else if (part.match(imageRegex)) {
                const src = part.match(imageRegex)[0].match(/src=(['"])(.*?)\1/)[2];
                return <img key={index} src={src} alt="message" style={{ maxWidth: '25vw', maxHeight: 'auto', marginTop: '8px', borderRadius: '4px' }} />;
              } else if (part.match(iframeRegex)) {
                // Render the iframe tag
                return <div key={index} dangerouslySetInnerHTML={{ __html: part }} />;
              } else {
                // Render the non-matching part as plain text
                return <React.Fragment key={index}>{part}<br /></React.Fragment>;
              }
            })}
          </Typography>
        );
      };
      
  

  return (
    <Box
      sx={{
        display: 'flex',
        padding: '0px 8px 8px 8px',
        marginLeft: '8px',
      }}
    >
      <Avatar
        sx={{
          marginRight: '8px',
          marginTop: '8px',
          width: '40px',
          height: '40px',
        }}
        alt={username}
        src={avatar}
      />
      <Box marginLeft="8px">
        <Typography
          sx={{
            fontSize: '1rem',
            color:
              role === 'Admin'
                ? '#d28cfa'
                : role === 'Owner'
                ? '#40c4fb'
                : '#878e95',
          }}
        >
          {username}
          <span style={{ marginLeft: '0.5rem', color: 'grey', fontSize: '0.8rem' }}>{time}</span>
        </Typography>
        {renderMessageContent()}
        {image ? (
          <img
            src={image}
            alt="message"
            style={{ maxWidth: '20vw', maxHeight: 'auto', marginTop: '8px', borderRadius: '8px' }}
          />
        ) : null}
      </Box>
    </Box>
  );
};

export default UserMessage;
