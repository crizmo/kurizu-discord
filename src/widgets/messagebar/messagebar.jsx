import React, { useState } from 'react';
import { Box, InputBase, IconButton } from '@mui/material';
import { AddBox, CardGiftcard, Gif, Mood, EmojiEmotions } from '@mui/icons-material';
import { supabase } from '../../data/supabase';
import { useLocation } from 'react-router-dom';

const MessageBar = ({data, setData}) => {
    // const [data, setData] = useState({ name: '', pfp: '', time: '', message: '' });
    const location = useLocation();
    const sendMessage = async () => {
        try {
            const currentTime = new Date().toISOString(); 

            const { data: messageData, error } = await supabase.from('messages').insert({
                name: data.name,
                pfp: data.pfp,
                time: currentTime,
                message: data.message,
            });

            if (error) {
                console.error('Error saving message:', error);
            } else {
                console.log(data)
                console.log('Message saved successfully:', messageData);
                // setData({ name: '', pfp: '', time: '', message: '' }); // Clear the input fields after sending the message
            }
        } catch (error) {
            console.error('Error saving message:', error);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    };

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
            {location.pathname === "/generalsenbfiknseiknfisn" ? (
                <Box
                    sx={{
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'stretch',
                        justifyContent: 'space-between',
                        borderColor: '#2d2f34',
                        backgroundColor: '#383a40',
                        borderRadius: '8px',
                    }}
                >
                    <Box sx={{ position: 'absolute', top: '8px', left: '8px', display: 'flex', alignItems: 'center' }}>
                        <InputBase
                            sx={{
                                marginRight: '8px',
                                backgroundColor: '#383a40',
                                borderRadius: '4px',
                                padding: '4px 8px',
                                color: '#5d5f67',
                            }}
                            placeholder="Name"
                            value={data.name}
                            onChange={(e) => setData({ ...data, name: e.target.value })}
                            onKeyDown={handleKeyDown}
                        />
                        <InputBase
                            sx={{
                                marginRight: '8px',
                                backgroundColor: '#383a40',
                                borderRadius: '4px',
                                padding: '4px 8px',
                                color: '#5d5f67',
                            }}
                            placeholder="Profile Picture URL"
                            value={data.pfp}
                            onChange={(e) => setData({ ...data, pfp: e.target.value })}
                            onKeyDown={handleKeyDown}
                        />
                    </Box>
                    <InputBase
                        sx={{
                            marginTop: '32px',
                            marginRight: '8px',
                            backgroundColor: '#383a40',
                            borderRadius: '4px',
                            padding: '4px 8px',
                            color: '#5d5f67',
                        }}
                        placeholder="Type a message..."
                        value={data.message}
                        onChange={(e) => setData({ ...data, message: e.target.value })}
                        onKeyDown={handleKeyDown}
                    />
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                        <IconButton sx={{ color: '#9e9e9e' }}>
                            <CardGiftcard />
                        </IconButton>
                        <IconButton sx={{ color: '#9e9e9e' }}>
                            <Gif />
                        </IconButton>
                        <IconButton sx={{ color: '#9e9e9e' }}>
                            <Mood />
                        </IconButton>
                        <IconButton sx={{ color: '#9e9e9e' }} onClick={sendMessage}>
                            <EmojiEmotions />
                        </IconButton>
                    </Box>
                </Box>
            ) : (
                <Box
                    sx={{
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        borderColor: '#2d2f34',
                        backgroundColor: '#383a40',
                        borderRadius: '8px',
                    }}
                >
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
                        value="Type a message..."
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
            )}
        </Box>
    );
};

export default MessageBar;
