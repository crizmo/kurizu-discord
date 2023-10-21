import React from 'react';
import { Box } from '@mui/material';

import CompleteMessage from '../../components/completeMessage';

const StreamSavers = () => {
    const messages = [
        {
            username: "Kurizu",
            time: "12:00",
            avatar: "https://cdn.discordapp.com/attachments/970974282681307187/1119105882194726952/kurizutaz.png",
            role: "Owner",
            message: "Stream Savers was a free, open-source and easy-to-use service to loop stream 24/7 to YouTube" +
                "\n\n" +
                "<img src='https://cdn.discordapp.com/attachments/970974581944885268/980031303967703040/stream-savers.png'>" +
                "\n\n\n" +
                "Me and my friend, <a href='https://coding398.dev'>Coding398</a>, created this project to help streamers who want to stream 24/7 to YouTube.",
        },
        {
            username: "Kurizu",
            time: "12:00",
            avatar: "https://cdn.discordapp.com/attachments/970974282681307187/1119105882194726952/kurizutaz.png",
            role: "Owner",
            message: "Working on this was fun, but we had to shut down the project due to the high costs of running the service." +
                "<br>" +
                "Although the project is no longer active, you can still find the source code from the links below:" +
                "<br><br>" +
                "<a href='https://github.com/crizmo/Stream-Savers'>Github</a>" +
                "<br>" +
                "<a href='https://github.com/codingMASTER398/Stream-Savers-Streaming-Server'>Server</a>" +
                "<br><br>" +
                "If you have any questions, you can ask them in the Discord server." +
                "<br>" +
                "<a href='https://discord.gg/6JMVHD3r4K'>Join the Discord Server</a>",
            badgeImages: [
                {
                    src: 'https://img.shields.io/github/stars/crizmo/Stream-Savers?style=social',
                    alt: 'github stars'
                },
                {
                    src: 'https://img.shields.io/github/forks/crizmo/Stream-Savers?style=social',
                    alt: 'github forks'
                },
                {
                    src: 'https://img.shields.io/github/watchers/crizmo/Stream-Savers?style=social',
                    alt: 'github watchers'
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

export default StreamSavers;
