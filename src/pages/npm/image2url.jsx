import React from 'react';
import { Box } from '@mui/material';

import CompleteMessage from '../../components/completeMessage';

const Image2Url = () => {
    const messages = [
        {
            username: "Kurizu",
            time: "12:00",
            avatar: "https://cdn.discordapp.com/avatars/784141856426033233/f01a415c7d59a50a68796f8fb2e7f18b.png",
            role: "Owner",
            message: "With the help of the <a href='https://www.npmjs.com/package/image2url'>image2url</a> npm package, you can easily convert images to URLs." +
                "<br><br>Post images to a Discord channel and get the proxy URL. I would appreciate contributions to the project." +
                "<br><br>Links:" +
                "<br><a href='https://www.npmjs.com/package/image2url'>NPM</a>" +
                "<br><a href='https://github.com/crizmo/image2url'>GitHub</a>",
            badgeImages: [
                {
                    src: 'https://img.shields.io/npm/dt/image2url',
                    alt: 'npm downloads'
                },
                {
                    src: 'https://img.shields.io/github/stars/crizmo/image2url?style=social',
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
                "<img src='https://cdn.discordapp.com/attachments/1057946322721849436/1058673207424585738/image.png'>" +
                "\n\n" +
                "Thanks for reading! If you have any questions or suggestions, feel free to contact me on Discord or Instagram."
        }
    ];


    return (
        <Box width="100%" height="90vh" backgroundColor="#313338" overflow="auto">
            <CompleteMessage messages={messages} />
        </Box>
    );
};

export default Image2Url;
