import React, { useState, useEffect } from 'react';
import { Box, Typography, Avatar, Button } from '@mui/material';
import { supabase } from '../data/supabase';

let isMobile = false;
if (window.innerWidth < 600) {
  isMobile = true;
}

const UserMessage = ({ username, time, avatar, role, message, badgeImages, reactions }) => {
  const regex = /^(1[0-2]|0?[1-9]):[0-5][0-9]$/;
  const is12HourFormat = regex.test(time);

  const [reactionData, setReactionData] = useState(null);

  const handleReaction = async (emoji) => {
    if (reactionData && reactionData.some((reaction) => reaction.emoji === emoji)) {
      const { data, error } = await supabase
        .from('reactions')
        .update({ count: reactionData.find((reaction) => reaction.emoji === emoji).count + 1 })
        .eq('message', message)
        .eq('emoji', emoji);

      if (error) {
        // console.error('Error updating reaction:', error);
      } else {
        // console.log('Successfully updated reaction:', data);
      }
    } else {
      const { data, error } = await supabase
        .from('reactions')
        .insert([
          {
            message: message,
            emoji: emoji,
            count: 1,
          },
        ]);

      if (error) {
        // console.error('Error adding reaction:', error);
      } else {
        // console.log('Successfully added reaction:', data);
      }
    }

    fetchReactionData(emoji);
  };

  const fetchReactionData = async (emoji) => {
    try {
      const { data, error } = await supabase
        .from('reactions')
        .select('*')
        .eq('message', message)

      if (error) {
        // console.error('Error fetching reaction data:', error);
      } else {
        if (data.length > 0) {
          setReactionData(data);
        } else {
          setReactionData(null);
        }
      }
    } catch (error) {
      // console.error('Error fetching reaction data:', error);
    }
  };

  useEffect(() => {
    fetchReactionData();
  }, []);

  let realTime = ""

  if (is12HourFormat) {
    realTime = "Today at " + time;
  } else {
    const date = new Date(time);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (date.toDateString() === today.toDateString()) {
      realTime = "Today at " + date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    }
    else if (date.toDateString() === yesterday.toDateString()) {
      realTime = "Yesterday at " + date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    }
    else {
      realTime = date.toLocaleDateString('en-US', { day: 'numeric', month: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true });
    }
  }


  const renderMessageContent = () => {
    const linkRegex = /<a\s+href=(['"])(.*?)\1>(.*?)<\/a>/g; // Regular expression to match <a href="...">...</a>
    const imageRegex = /<img\s+src=(['"])(.*?)\1\s*\/?>/g; // Regular expression to match <img src="..." ... />
    const iframeRegex = /<iframe.*?<\/iframe>/g; // Regular expression to match <iframe ...></iframe>
    const ping = /@everyone|@here/g;
    const parts = message.split('\n');

    return (
      <Typography
        sx={{
          color: 'white',
          fontSize: '0.9rem',
          wordWrap: 'break-word',
          maxWidth: isMobile ? '80vw' : '50vw',
          whiteSpace: 'pre-line',
          fontFamily: 'GG Sans, sans-serif',
        }}
      >
        {parts.map((part, index) => {
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
                        "
                        target="_blank"
                        >${content}</a>`;
                  }),
                }}
              />
            );
          } else if (part.match(imageRegex)) {
            const src = part.match(imageRegex)[0].match(/src=(['"])(.*?)\1/)[2];
            return <img key={index} src={src} alt="message" style={{
              maxHeight: 'auto',
              marginTop: '8px',
              borderRadius: '8px',
              width: '100%',
              height: 'auto',
              maxWidth: isMobile ? '100vw' : '25vw',
            }} />;
          } else if (part.match(iframeRegex)) {
            return <div key={index} dangerouslySetInnerHTML={{ __html: part }} />;
          }
          else if (part.match(ping)) {
            return (
              <Box
                key={index}
                sx={{
                  backgroundColor: '#5865f24d',
                  padding: '2px',
                  borderRadius: '4px',
                  display: 'inline-block',
                  color: '#c9cdfb',
                }}
              >
                {part}
              </Box>
            );
          } else {
            return <React.Fragment key={index}>
              {part}<br />
            </React.Fragment>;
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
        backgroundColor: message.includes('@everyone') || message.includes('@here') ? '#454039' : 'transparent',
        borderLeft: message.includes('@everyone') || message.includes('@here') ? '2px solid #e9a645' : 'none',
        paddingLeft: message.includes('@everyone') || message.includes('@here') ? '15px' : '15px',
        marginRight: '8px',
      }}
    >
      <Avatar
        sx={{
          marginRight: '8px',
          marginTop: '4px',
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
                  ? '#00fff9'
                  : '#878e95',
          }}
        >
          {username}
          <span style={{ marginLeft: '0.5rem', color: 'grey', fontSize: '0.8rem' }}>{realTime}</span>
        </Typography>
        {renderMessageContent()}
        {reactions ? (
          <Box
            sx={{
              display: 'flex',
              marginTop: '8px',
            }}
          >
            {reactions.map((reaction, index) => {
              return (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    marginRight: '8px',
                    backgroundColor: '#353b53',
                    border: '1px solid #476cec',
                    borderRadius: '10px',
                  }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    onClick={() => handleReaction(reaction.emoji)}
                    sx={{
                      backgroundColor: 'transparent',
                      border: 'none',
                      boxShadow: 'none',
                      paddingTop: '3px',
                      paddingBottom: '3px',
                      paddingLeft: '8px',
                      paddingRight: '8px',
                      minWidth: '0px',
                      '&:hover': {
                        backgroundColor: 'transparent',
                        border: 'none',
                        boxShadow: 'none',
                      },
                    }}
                  >
                    {reaction.emoji} {reactionData
                      ? reactionData.find((reactionData) => reactionData.emoji === reaction.emoji)?.count
                      : reaction.count}
                  </Button>
                </Box>
              );
            })}
          </Box>
        ) : null}
        {badgeImages ? (
          <Box
            sx={{
              display: 'flex',
              marginTop: '8px',
            }}
          >
            {badgeImages.map((badge, index) => {
              return (
                <img
                  key={index}
                  src={badge.src}
                  alt={badge.alt}
                  style={{
                    maxHeight: 'auto',
                    marginTop: '8px',
                    height: 'auto',
                    maxWidth: '25vw',
                    marginRight: '8px',
                  }}
                />
              );
            })}
          </Box>
        ) : null}
      </Box>
    </Box>
  );
};

export default UserMessage;
