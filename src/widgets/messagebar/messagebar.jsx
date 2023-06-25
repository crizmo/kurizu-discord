import React, { useState } from 'react';
import { Box, InputBase, IconButton, Typography } from '@mui/material';
import { AddBox, CardGiftcard, Gif, Mood, EmojiEmotions, Save, Send, SetMeal } from '@mui/icons-material';
import { supabase, channel } from '../../data/supabase';
import { useLocation } from 'react-router-dom';
import Popup from 'reactjs-popup';

const MessageBar = () => {
    const [data, setData] = useState({ name: '', pfp: '', time: '', message: '' });
    const location = useLocation();
    const isMobile = window.innerWidth <= 768;
    
    const sendMessage = async () => {
        try {
            const currentDate = new Date();
            const year = currentDate.getFullYear();
            const month = String(currentDate.getMonth() + 1).padStart(2, '0');
            const day = String(currentDate.getDate()).padStart(2, '0');
            const hours = String(currentDate.getHours()).padStart(2, '0');
            const minutes = String(currentDate.getMinutes()).padStart(2, '0');
            const seconds = String(currentDate.getSeconds()).padStart(2, '0');
            const milliseconds = String(currentDate.getMilliseconds()).padStart(3, '0');
        
            const currentTime = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${milliseconds}Z`;
            console.log(currentTime);

            if (
                data.pfp === '' ||
                !data.pfp.includes('https') ||
                !data.pfp.includes('http')
            ) {
                let discordPfps = [
                    'https://archive.org/download/discordprofilepictures/discordblue.png',
                    'https://archive.org/download/discordprofilepictures/discordgreen.png',
                    'https://archive.org/download/discordprofilepictures/discordred.png',
                    'https://archive.org/download/discordprofilepictures/discordyellow.png',
                ]
                console.log(discordPfps);
                let randomPfp = discordPfps[Math.floor(Math.random() * discordPfps.length)];
                console.log(randomPfp);
                data.pfp = randomPfp;
            } else {
                console.log('PFP is valid');
            }

            const { data: messageData, error } = await supabase.from('messages').insert({
                name: data.name,
                pfp: data.pfp,
                time: currentTime,
                message: data.message,
            });

            channel.send({
                type: 'broadcast',
                event: 'supa',
                payload: {
                    name: data.name,
                    pfp: data.pfp,
                    time: currentTime,
                    message: data.message,
                },
            });

            if (error) {
                console.error('Error saving message:', error);
            } else {
                setData({ ...data, message: '' });
            }
        } catch (error) {
            console.error('Error saving message:', error);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            if (data.message !== '' && data.name !== '' && data.name.length > 0 && data.name.length <= 10 && data.message.length <= 1000 && data.message.length >= 1) { 
                sendMessage();
            }
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
            {location.pathname === '/general' ? (
                <Box
                    sx={{
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        borderColor: '#2d2f34',
                        backgroundColor: '#383a40',
                        borderRadius: '8px',
                        height: '100%',
                    }}
                >
                    <InputBase
                        sx={{
                            marginRight: '8px',
                            backgroundColor: '#383a40',
                            borderRadius: '4px',
                            padding: '4px 8px',
                            color: '#5d5f67',
                            width: window.innerWidth <= 700 ? '80%' : window.innerWidth <= 1000 ? '50%' : '80%',
                        }}
                        placeholder="Type a message..."
                        value={data.message}
                        onChange={(e) => setData({ ...data, message: e.target.value })}
                        onKeyDown={handleKeyDown}
                    />
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                        {isMobile ? (
                            // make the popup full screen on mobile
                            <Popup
                                trigger={
                                    <IconButton sx={{ color: '#9e9e9e' }}>
                                        <SetMeal />
                                    </IconButton>
                                }
                                modal nested
                                closeOnDocumentClick
                                open={false}
                            >
                                {(close) => (
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderColor: '#2d2f34',
                                            backgroundColor: '#1e1f22',
                                            borderRadius: '8px',
                                            margin: '8px',
                                            marginBottom: '20px',
                                            padding: '16px',
                                            width: '50vw',
                                            height: '20vh',
                                            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                                        }}
                                    >
                                        <InputBase
                                            sx={{
                                                marginBottom: '8px',
                                                backgroundColor: '#383a40',
                                                borderRadius: '4px',
                                                padding: '4px 8px',
                                                color: '#5d5f67',
                                                width: '100%',
                                            }}
                                            placeholder="Name"
                                            value={data.name}
                                        />
                                        <InputBase
                                            sx={{
                                                marginBottom: '8px',
                                                backgroundColor: '#383a40',
                                                borderRadius: '4px',
                                                padding: '4px 8px',
                                                color: '#5d5f67',
                                                width: '100%',
                                            }}
                                            placeholder="Profile Picture URL"
                                            value={data.pfp}
                                            defaultValue="https://archive.org/download/discordprofilepictures/discordblue.png"
                                            width="100%"
                                        />
                                        {data.name != '' ? (
                                            <IconButton
                                                sx={{ color: '#9e9e9e' }}
                                                onClick={() => {
                                                    // sendMessage();
                                                    close();
                                                }}
                                            >
                                                <Save />
                                            </IconButton>
                                        ) : (
                                            <Typography sx={{ color: '#9e9e9e' }}>Please fill out all fields</Typography>
                                        )}
                                    </Box>
                                )}
                            </Popup>
                        ) : (
                            <Popup
                                trigger={
                                    <IconButton sx={{ color: '#9e9e9e' }}>
                                        <SetMeal />
                                    </IconButton>
                                }
                                position='top center'
                                closeOnDocumentClick
                                open={true}
                            >
                                {(close) => (
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderColor: '#2d2f34',
                                            backgroundColor: '#1e1f22',
                                            borderRadius: '8px',
                                            margin: '8px',
                                            marginBottom: '20px',
                                            padding: '16px',
                                            width: '300px',
                                            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                                        }}
                                    >
                                        <InputBase
                                            sx={{
                                                marginBottom: '8px',
                                                backgroundColor: '#383a40',
                                                borderRadius: '4px',
                                                padding: '4px 8px',
                                                color: '#5d5f67',
                                                width: '100%',
                                            }}
                                            placeholder="Name"
                                            value={data.name}
                                            onChange={(e) => setData({ ...data, name: e.target.value })}
                                            onKeyDown={handleKeyDown}
                                        />
                                        <InputBase
                                            sx={{
                                                marginBottom: '8px',
                                                backgroundColor: '#383a40',
                                                borderRadius: '4px',
                                                padding: '4px 8px',
                                                color: '#5d5f67',
                                                width: '100%',
                                            }}
                                            placeholder="Profile Picture URL"
                                            value={data.pfp}
                                            defaultValue="https://archive.org/download/discordprofilepictures/discordblue.png"
                                            width="100%"
                                            onChange={(e) => setData({ ...data, pfp: e.target.value })}
                                            onKeyDown={handleKeyDown}
                                        />
                                        {data.name != '' ? (
                                            <IconButton
                                                sx={{ color: '#9e9e9e'}}
                                                onClick={() => {
                                                    // sendMessage();
                                                    close();
                                                }}
                                            >
                                                <Save />
                                            </IconButton>
                                        ) : (
                                            <Typography sx={{ color: '#9e9e9e' }}>Please fill out all fields</Typography>
                                        )}
                                    </Box>
                                )}
                            </Popup>
                        )}
                        {isMobile ? (
                            <Box>
                                <IconButton
                                    sx={{ color: '#9e9e9e' }}
                                    onClick={() => {
                                        sendMessage();
                                    }}
                                >
                                    <Send />
                                </IconButton>
                            </Box>
                        ) : (
                            <Box>
                                <IconButton sx={{ color: '#9e9e9e' }}>
                                    <CardGiftcard />
                                </IconButton>
                                <IconButton sx={{ color: '#9e9e9e' }}>
                                    <Gif />
                                </IconButton>
                                <IconButton sx={{ color: '#9e9e9e' }} onClick={sendMessage}>
                                    <EmojiEmotions />
                                </IconButton>
                            </Box>
                        )}
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
                        <EmojiEmotions />
                    </IconButton>
                </Box>
            )}
        </Box>
    );
};

export default MessageBar;
