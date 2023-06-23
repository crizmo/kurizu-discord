import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';

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
                    fontFamily: "GG Sans, sans-serif",
                    color: roles.includes('Admin') ? '#d28cfa' : roles.includes('Owner') ? '#40c4fb' : '#878e95',
                }}

                >{username}</Typography>
                <Typography sx={{ color: 'grey.500', fontSize: '0.8rem', fontFamily: "GG Sans, sans-serif" }}>
                    {about}
                </Typography>
            </Box>
        </Box>
    );
};

const UserBar = () => {
    const users = [
        {
            id: 1,
            username: 'Kurizu',
            avatar: 'https://cdn.discordapp.com/attachments/970974282681307187/1119105882194726952/kurizutaz.png',
            roles: ['Owner'],
            about: 'Poop'
        },
        {
            id: 2,
            username: 'Pocky',
            avatar: 'https://cdn.discordapp.com/avatars/806015103198822401/a7224a4e4806e4fa9d694e2c5ca31e70.webp',
            roles: ['Admin'],
            about: 'Fart'
        },
        {
            id: 3,
            username: 'Count Trapula',
            avatar: 'https://cdn.discordapp.com/avatars/161963504226533376/49e0a0d4fa60413ee51bf69962fcb291.webp',
            roles: ['Admin'],
            about: 'Clone'
        },
        {
            id: 4,
            username: 'Syeca',
            avatar: 'https://cdn.discordapp.com/avatars/782653471354650684/ace466bef93d7804a041e1ca6a5ac942.webp',
            roles: ['User'],
            about: 'Code'
        },
        {
            id: 5,
            username: 'chikn_man',
            avatar: 'https://cdn.discordapp.com/attachments/1121657823986733077/1121657883164160051/chicken_man4.jpeg',
            roles: ['Poop Eater'],
            about: 'Poop'
        },
    ];

    const categorizedUsers = {};

    users.forEach((user) => {
        user.roles.forEach((role) => {
            if (!categorizedUsers[role]) {
                categorizedUsers[role] = [];
            }
            categorizedUsers[role].push(user);
        });
    });

    return (
        <Box width="100%" height="95vh" bgcolor="#2b2d31" color="white" overflow="auto">
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
