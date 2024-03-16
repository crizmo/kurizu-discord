import React from 'react';
import { Box } from '@mui/material';

import CompleteMessage from '../../components/completeMessage';

const DiscordCards = () => {
    const messages = [
        {
            username: "Kurizu",
            time: "12:00",
            avatar: "https://cdn.discordapp.com/avatars/784141856426033233/f01a415c7d59a50a68796f8fb2e7f18b.png",
            role: "Owner",
            message: "Discord Cards helps you display your discord activity as an epic card that you can use anywhere you want." +
                "<br><br>" +
                "<img class='msg-img' src='https://discord-cards.onrender.com/api/card/784141856426033233?about=Exploring&banner=https://staticg.sportskeeda.com/editor/2022/10/72d24-16655552144135-1920.jpg' alt='api'/>" +
                "<br><br>" +
                "Discord Cards also offers an API for you to use, so you can incorporate the cards in your GitHub repo or anywhere you want." +
                "<br><br>" +
                "GitHub: <a href='https://github.com/crizmo/DiscordCards'>Discord Cards</a><br>" +
                "Website: <a href='https://discord-cards.vercel.app/'>Discord Cards</a><br>" +
                "API: <a href='https://discord-cards.onrender.com/'>Discord Cards API</a><br>",
            badgeImages: [
                {
                    src: 'https://img.shields.io/github/stars/crizmo/DiscordCards?style=social',
                    alt: 'github stars'
                }
            ],
        },
        {
            username: "Kurizu",
            time: "12:00",
            avatar: "https://cdn.discordapp.com/avatars/784141856426033233/f01a415c7d59a50a68796f8fb2e7f18b.png",
            role: "Owner",
            message: "Thanks for reading!",
        },

        
    ];
    
    

    return (
        <Box width="100%" height="90vh" backgroundColor="#313338" overflow="auto">
            <CompleteMessage messages={messages} />
        </Box>
    );
};

export default DiscordCards;
