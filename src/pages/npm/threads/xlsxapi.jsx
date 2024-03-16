import React from 'react';
import { Box } from '@mui/material';

import CompleteMessage from '../../../components/completeMessage';

const XlsxApi = () => {
    const messages = [
        {
            username: "Kurizu",
            time: "12:00",
            avatar: "https://cdn.discordapp.com/avatars/784141856426033233/f01a415c7d59a50a68796f8fb2e7f18b.png",
            role: "Owner",
            message: "Excel Mongo API is built using the xlsx-mongo npm package" +
                "<br><br>Links:" +
                "<br><a href='https://rapidapi.com/Kurizu/api/excel-mongo1/'>Rapid API</a>" +
                "<br><a href='https://github.com/crizmo/xlsx-mongo-api'>GitHub</a><br>",
            badgeImages: [
                {
                    src: 'https://img.shields.io/github/stars/crizmo/xlsx-mongo-api?style=social',
                    alt: 'github stars'
                }
            ],
        },
        {
            username: "Kurizu",
            time: "12:00",
            avatar: "https://cdn.discordapp.com/avatars/784141856426033233/f01a415c7d59a50a68796f8fb2e7f18b.png",
            role: "Owner",
            message: "Check the GitHub repo for more info on how to use the API" +
            "<br>Also check out Rapid api for more info on how to use the API" +
            "<br><br>If you have any questions, feel free to ask in the <a href='https://discord.gg/drunkbetch-782646778347388959'>Discord server</a>."
        }
    ];
    

    return (
        <Box width="100%" height="90vh" backgroundColor="#313338" overflow="auto">
            <CompleteMessage messages={messages} />
        </Box>
    );
};

export default XlsxApi;
