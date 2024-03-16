import React from 'react';
import { Box } from '@mui/material';

import CompleteMessage from '../../components/completeMessage';

const XlsxMongo = () => {
    const messages = [
        {
            username: "Kurizu",
            time: "12:00",
            avatar: "https://cdn.discordapp.com/avatars/784141856426033233/f01a415c7d59a50a68796f8fb2e7f18b.png",
            role: "Owner",
            message: "With the help of the <a href='https://www.npmjs.com/package/xlsx-mongo'>xlsx-mongo</a> npm package, you can easily import / add excel files to MongoDB." +
                
                "<br><br>Links:" +
                "<br><a href='https://www.npmjs.com/package/xlsx-mongo'>NPM</a>" +
                "<br><a href='https://github.com/crizmo/xlsx-mongo'>GitHub</a>",
            badgeImages: [
                {
                    src: 'https://img.shields.io/npm/dt/xlsx-mongo',
                    alt: 'npm downloads'
                },
                {
                    src: 'https://img.shields.io/github/stars/crizmo/xlsx-mongo?style=social',
                    alt: 'github stars'
                }
            ],
        },
        {
            username: "Kurizu",
            time: "12:00",
            avatar: "https://cdn.discordapp.com/avatars/784141856426033233/f01a415c7d59a50a68796f8fb2e7f18b.png",
            role: "Owner",
            message: "Usage:" +
            "\n" +
            "<img src='https://cdn.discordapp.com/attachments/1126788880906080366/1126806763035959346/usage.png'>" +
            "\n\n" +
            "<img src='https://cdn.discordapp.com/attachments/1126788880906080366/1126808126922960946/note.png'>"
        },    
        {
            username: "Kurizu",
            time: "12:00",
            avatar: "https://cdn.discordapp.com/avatars/784141856426033233/f01a415c7d59a50a68796f8fb2e7f18b.png",
            role: "Owner",
            message: "Thanks for reading! If you have any questions or suggestions, feel free to contact me on Discord, Instagram or Github"
        }
    ];
    

    return (
        <Box width="100%" height="90vh" backgroundColor="#313338" overflow="auto">
            <CompleteMessage messages={messages} />
        </Box>
    );
};

export default XlsxMongo;
