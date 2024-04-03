import React from 'react';
import { Box } from '@mui/material';

import CompleteMessage from '../../components/completeMessage';

const Pinscrape = () => {
    const messages = [
        {
            username: "Kurizu",
            time: "12:00",
            avatar: "https://avatars.githubusercontent.com/u/83665497?v=4",
            role: "Owner",
            message: "A simple image scraper API for Pinterest boards." +
                "<br><br>" +
                "<span style='font-size: 1.2rem; font-weight: bold;'>Features:</span><br>" + 
                "<br /> - Retrieve board information such as title and total number of pins." +
                "<br /> - Extract URLs of images in a Pinterest board. " +
                "<br /> - Save the extracted URLs to a JSON file. " +
                "<br><br>" +
                "<img src='https://cdn.discordapp.com/attachments/1173127843476148264/1176391261679259649/pinscrape_points.png?ex=656eb2bd&is=655c3dbd&hm=04b7d9b71ef2bcc22fa40aec26a9961081d6482401e134b28279602e43fb5833&' />" +
                "<br><br>" +
                "You can check pinscrape at <a href='https://pinscrape.onrender.com/'>pinscrape.onrender.com</a>" +
                "\n\n" +
                "Currently, the API is only available for public boards, pins. ",
        },
        {
            username: "Kurizu",
            time: "12:00",
            avatar: "https://avatars.githubusercontent.com/u/83665497?v=4",
            role: "Owner",
            message: "Oh, and the code is open source too!" +
                "<br>" +
                "You can find the source code from the links below:" +
                "<br><br>" +
                "<a href='https://github.com/crizmo/pinscrape'>Github</a>" +
                "<br>" +
                "<a href='https://rapidapi.com/Kurizu/api/pinscrape/'>Rapid API</a>" +
                "<br>" +
                "<a href='https://pinscrape.onrender.com/'>Render</a>" +
                "<br><br>" +
                "If you want to contribute to the project, feel free to open a pull request on Github." +
                "<br>" +
                "If you have any suggestions or feedback, feel free to contact me on Discord (kurizu.taz) or <br>" +
                "<a href='https://discord.gg/drunkbetch-782646778347388959'>Join the Discord Server</a>",
            badgeImages: [
                {
                    src: 'https://img.shields.io/github/stars/crizmo/pinscrape?style=social',
                    alt: 'github stars'
                },
                {
                    src: 'https://img.shields.io/github/license/crizmo/pinscrape',
                    alt: 'github license'
                },
            ],
        }
    ];

    return (
        <Box width="100%" height="90vh" backgroundColor="#313338" overflow="auto">
            <CompleteMessage messages={messages} />
        </Box>
    );
};

export default Pinscrape;
