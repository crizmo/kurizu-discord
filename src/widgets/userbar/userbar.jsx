import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';

import users from '../../data/users';

const User = ({ username, avatar, roles, about }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                padding: '0px 8px 8px 8px',
                marginLeft: '8px',
            }}
        >
            <Avatar sx={{
                marginRight: '8px', 
                width: '35px', 
                height: '35px'
            }} alt={username} src={avatar} />
            <Box>
                <Typography sx={{
                    fontSize: '0.9rem',
                    fontWeight: 'semibold',
                    fontFamily: 'GG Sans, sans-serif',
                    color: roles.includes('Admin') ? '#d28cfa' : roles.includes('Owner') ? '#00fff9' : '#878e95',
                }}

                >{username}</Typography>
                <Typography sx={{ color: 'grey.500', fontSize: '0.8rem', fontFamily: 'GG Sans, sans-serif' }}>
                    {about}
                </Typography>
            </Box>
        </Box>
    );
};

const UserBar = () => {
    const categorizedUsers = {};

    users.forEach((user) => {
        user.roles.forEach((role) => {
            if (!categorizedUsers[role]) {
                categorizedUsers[role] = [];
            }
            categorizedUsers[role].push(user);
        });
    });
    
    const isMobile = window.innerWidth <= 768;

    return (
        <Box width="100%" height={isMobile ? '100vh' : '95vh'}
         bgcolor="#2b2d31" color="white" overflow="auto">
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
                            roles={user.roles}
                            about={user.about}
                        />
                    ))}
                </React.Fragment>
            ))}
        </Box>
    );
};

export default UserBar;
