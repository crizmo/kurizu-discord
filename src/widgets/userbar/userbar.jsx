import React, { useState } from 'react';
import { Box, Typography, Avatar } from '@mui/material';

import users from '../../data/users';

const User = ({ username, avatar, banner, roles, status, about, onUserClick }) => {
    const handleClick = (event) => {
        const { top, height } = event.target.getBoundingClientRect(); 
        onUserClick({
            username,
            avatar,
            banner,
            roles,
            status,
            about,
            top, 
            height, 
        });
    };

    let isMobile = false;
    if (window.innerWidth < 800) {
        isMobile = true;
    }

    return (
        <div onClick={isMobile ? null : handleClick}>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0px 8px 8px 8px',
                    marginLeft: '8px',
                }}
            >
                <Avatar
                    sx={{
                        marginRight: '8px',
                        width: '35px',
                        height: '35px',
                    }}
                    alt={username}
                    src={avatar}
                />
                <Box>
                    <Typography
                        sx={{
                            fontSize: '0.9rem',
                            fontWeight: 'semibold',
                            fontFamily: 'GG Sans, sans-serif',
                            color: roles.includes('Admin')
                                ? '#d28cfa'
                                : roles.includes('Owner')
                                    ? '#00fff9'
                                    : '#878e95',
                        }}
                    >
                        {username}
                    </Typography>
                    <Typography
                        sx={{
                            color: 'grey.500',
                            fontSize: '0.8rem',
                            fontFamily: 'GG Sans, sans-serif',
                        }}
                    >
                        {status}
                    </Typography>
                </Box>
            </Box>
        </div>
    );
};

const UserBar = () => {
    const [selectedUser, setSelectedUser] = useState(null);

    const categorizedUsers = {};

    users.forEach((user) => {
        const role = user.roles[0];

        if (!categorizedUsers[role]) {
            categorizedUsers[role] = [];
        }
        categorizedUsers[role].push(user);
    });


    const isMobile = window.innerWidth <= 768;

    const openUserPanel = ({ username, avatar, banner, roles, status, about, top, height }) => {
        const spaceAbove = top;
        const spaceBelow = window.innerHeight - (top + height);
        let panelPosition;
        
        if (spaceAbove > spaceBelow - 250) {
            panelPosition = {
                bottom: window.innerHeight - top - 300,
            };
        } else {
            panelPosition = {
                top: top + height,
            };
        }

        panelPosition.top = Math.max(0, panelPosition.top);
        panelPosition.bottom = Math.max(0, panelPosition.bottom);        
        
        setSelectedUser({ username, avatar, banner, roles, status, about, position: panelPosition });
    };
    

    const closeUserPanel = () => {
        setSelectedUser(null);
    };

    window.addEventListener('click', (event) => {
        if (event.target.closest('.user-panel')) {
            return;
        }
        closeUserPanel();
    });

    return (
        <Box className="user-panel" width="100%" height={isMobile ? '100vh' : '95vh'} bgcolor="#2b2d31" color="white" overflow="auto">
            {Object.entries(categorizedUsers).map(([role, users]) => (
                <React.Fragment key={role}>
                    <Typography
                        sx={{
                            color: '#8b929a',
                            fontSize: '0.8rem',
                            fontWeight: 'bold',
                            padding: '8px',
                            marginLeft: '8px',
                        }}
                    >
                        {role.toUpperCase()} - {users.length}
                    </Typography>
                    {users.map((user) => (
                        <User
                            key={user.id}
                            username={user.username}
                            avatar={user.avatar}
                            banner={user.banner ?? 'https://wallpapercave.com/uwp/uwp369872.png'}
                            roles={user.roles}
                            status={user.status}
                            about={user.about}
                            onUserClick={openUserPanel}
                        />
                    ))}
                </React.Fragment>
            ))}
            {selectedUser && (
                <Box
                    bgcolor="#2b2d31"
                    color="white"
                    p={1}
                    position="absolute"
                    top={selectedUser.position.top - 40}
                    bottom={selectedUser.position.bottom}
                    right="0"
                    width="20rem"
                    height="40rem"
                    marginRight="15rem"
                    borderRadius={2}
                    boxShadow="0px 0px 10px 0px rgba(0,0,0,0.50)"
                >
                    <img
                        style={{
                            height: '18%',
                            width: '100%',
                            backgroundColor: '#7289DA', 
                            borderTopLeftRadius: '8px',
                            borderTopRightRadius: '8px',
                            position: 'relative',
                        }}
                        src={selectedUser.banner}
                        alt="banner"
                    >

                    </img>

                    {/* User's avatar */}
                    <img
                        style={{
                            width: '80px',
                            height: '80px',
                            borderRadius: '50%',
                            backgroundColor: 'white', 
                            border: '4px solid #2b2d31', 
                            position: 'absolute',
                            top: '12%', 
                            left: '20%', 
                            transform: 'translateX(-50%)', 
                        }}
                        src={selectedUser.avatar}
                        alt="avatar"
                    ></img>

                    {/* User's info */}
                    <Box
                        sx={{
                            flex: 1,
                            padding: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            marginTop: '20%',
                            marginLeft: '2%',
                            marginRight: '2%',
                            backgroundColor: '#111214',
                            height: '26rem',
                            position: 'relative',
                            borderRadius: '8px',
                            // scroll if the content is too long
                            overflowY: 'auto',
                            '&::-webkit-scrollbar': {
                                width: '0.4rem',
                            },
                            '&::-webkit-scrollbar-track': {
                                background: '#111214',
                            },
                            '&::-webkit-scrollbar-thumb': {
                                background: '#7289DA',
                            },
                            overflowX: 'hidden',
                        }}
                    >
                        <Typography variant="body1" sx={{ fontSize: '0.9rem', fontWeight: 'normal' }}>
                            {selectedUser.username}
                        </Typography>
                        <Typography variant="body1" sx={{ fontSize: '0.8rem', fontWeight: 'normal' }}>
                            {selectedUser.status}
                        </Typography>
                        <hr style={{ width: '100%', marginTop: '1rem', marginBottom: '1rem', backgroundColor: '#28292e' }} />
                        <Typography variant="body1" sx={{ fontSize: '0.9rem', fontWeight: 'bold', paddingBottom: '0.5rem' }}>
                            ABOUT ME
                        </Typography>
                        <Typography variant="body1" sx={{ fontSize: '0.8rem', fontWeight: 'normal', wordWrap: 'break-word', overflowWrap: 'break-word' }}>
                            <div dangerouslySetInnerHTML={{ __html: selectedUser.about }} />
                            <style jsx>{`
                                a {
                                    color: #7289da;
                                    text-decoration: none;
                                }
                                a:hover {
                                    text-decoration: underline;
                                }
                            `}</style>
                        </Typography>


                        <Typography variant="body1" sx={{ fontSize: '0.9rem', fontWeight: 'bold', paddingBottom: '0.5rem', paddingTop: '1rem' }}>
                            ROLES
                        </Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                flexWrap: 'wrap',
                            }}
                        >
                            {selectedUser.roles.map((role) => (
                                <Typography
                                    key={role}
                                    variant="body1"
                                    sx={{
                                        fontSize: '0.8rem',
                                        fontWeight: 'normal',
                                        color: role === 'Admin' ? '#d28cfa' : role === 'Owner' ? '#00fff9' : '#878e95',
                                        backgroundColor: '#232428',
                                        padding: '0.2rem 0.5rem',
                                        borderRadius: '4px',
                                        marginRight: '0.5rem',
                                        marginBottom: '0.5rem',
                                        display: 'inline-block',
                                    }}
                                >
                                    {role}
                                </Typography>
                            ))}
                        </Box>

                        <Typography variant="body1" sx={{ fontSize: '0.9rem', fontWeight: 'bold', paddingBottom: '0.5rem', paddingTop: '1rem' }}>
                            NOTE
                        </Typography>
                        <Typography variant="body1" sx={{ fontSize: '0.8rem', fontWeight: 'normal' }}>
                            Click to add a note
                        </Typography>


                    </Box>

                </Box>
            )}
        </Box>
    );
};

export default UserBar;
