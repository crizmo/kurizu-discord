import React from 'react';
import { Box } from '@mui/material';

import CompleteMessage from '../../components/completeMessage';

const DiscordCards = () => {
    const messages = [
        {
            username: "Kurizu",
            time: "12:00",
            avatar: "https://cdn.discordapp.com/attachments/970974282681307187/1119105882194726952/kurizutaz.png",
            role: "Owner",
            message: "Discord Cards helps you display your discord activity as an epic card that you can use anywhere you want." +
                "\n\n" +
                "<img src='https://cdn.discordapp.com/attachments/988140784807202886/992759894627340298/breeze-stats.png'>" +
                "\n\n" +
                "<br><br>" +
                "<img class='msg-img' src='https://discord-cards.kurizu.repl.co/api/card/784141856426033233?about=Exploring&banner=https://staticg.sportskeeda.com/editor/2022/10/72d24-16655552144135-1920.jpg' alt='api'/>" +
                "<br><br>" +
                "Discord Cards also offers an API for you to use, so you can incorporate the cards in your GitHub repo or anywhere you want." +
                "<br><br>" +
                "GitHub: <a href='https://github.com/crizmo/DiscordCards' alt='Discord Cards github' target='_blank'>Discord Cards</a><br>" +
                "Website: <a href='https://discord-cards.vercel.app/' alt='Discord Cards website' target='_blank'>Discord Cards</a><br>" +
                "API: <a href='https://discord-cards.kurizu.repl.co/' alt='Discord Cards api' target='_blank'>Discord Cards API</a><br>",
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
            avatar: "https://cdn.discordapp.com/attachments/970974282681307187/1119105882194726952/kurizutaz.png",
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
