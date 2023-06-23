import React from 'react';
import { Box, InputBase, IconButton } from '@mui/material';
import { AddBox, CardGiftcard, Gif, Mood, EmojiEmotions } from '@mui/icons-material';

const MessageBar = () => {
    return (
        <Box
            sx={{
                position: 'relative',
                bottom: '0',
                borderColor: '#2d2f34',
                height: '5vh',
                backgroundColor: '#313338',
                padding: '0px 30px 0px 30px',
            }}
        >
            <Box sx={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between', // Added to align items on the ends
                borderColor: '#2d2f34',
                backgroundColor: '#383a40',
                borderRadius: '8px',
            }}>
                <IconButton sx={{ color: '#9e9e9e' }}>
                    <AddBox />
                </IconButton>
                <InputBase
                    sx={{
                        flex: 1,
                        marginRight: '8px',
                        backgroundColor: '#383a40',
                        borderRadius: '4px',
                        padding: '4px 8px',
                        color: '#5d5f67',
                    }}
                    placeholder="Type a message..."
                />
                <IconButton sx={{ color: '#9e9e9e' }}>
                    <CardGiftcard />
                </IconButton>
                <IconButton sx={{ color: '#9e9e9e' }}>
                    <Gif />
                </IconButton>
                <IconButton sx={{ color: '#9e9e9e' }}>
                    <Mood />
                </IconButton>
                <IconButton sx={{ color: '#9e9e9e' }}>
                    <EmojiEmotions />
                </IconButton>
            </Box>
        </Box>
    );
};

export default MessageBar;