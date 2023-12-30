import React from 'react';
import { Box } from '@mui/material';

import CompleteMessage from '../../components/completeMessage';

const PingPal = () => {
    const messages = [
        {
            username: "Kurizu",
            time: "12:00",
            avatar: "https://cdn.discordapp.com/attachments/970974282681307187/1119105882194726952/kurizutaz.png",
            role: "Owner",
            message:

                "Keep your projects alive with this simple pinger." +
                "\n\n" +
                "PingPal will ping your every 25 minutes to keep it alive." +
                "\n" +
                "To use PingPal :-\n\n" +
                "<img src='https://cdn.discordapp.com/attachments/1127935019080486914/1127935050042851499/usage.png' >" +
                "\n\n\n" +
                "Or clone the repo from <a href='https://github.com/crizmo/PingPal'>Github</a> and run it locally :-\n" +
                "\nOpen an issue if you have any problems." +
                "\n\n" +
                "If you have any questions, feel free to ask in the <a href='https://discord.gg/drunkbetch-782646778347388959'>Discord server</a>."
        },
        {
            username: "Kurizu",
            time: "12:00",
            avatar: "https://cdn.discordapp.com/attachments/970974282681307187/1119105882194726952/kurizutaz.png",
            role: "Owner",
            message: "PingPal project links: \n\n" +
                "<a href='https://github.com/crizmo/PingPal'>Github</a><br>" +
                "<a href='https://pingpal.vercel.app/'>Website</a><br>" +
                "<a href='https://pingpal.vercel.app/status'>Status</a><br>" +
                "Thank you for checking out PingPal!",
            badgeImages: [
                {
                    src: 'https://img.shields.io/github/stars/crizmo/PingPal?style=social',
                    alt: 'github stars'
                },
                {
                    src: 'https://img.shields.io/github/forks/crizmo/PingPal?style=social',
                    alt: 'github forks'
                }
            ],
        }
    ];

    return (
        <Box width="100%" height="90vh" backgroundColor="#313338" overflow="auto">
            <CompleteMessage messages={messages} />
        </Box>
    );
};

export default PingPal;
