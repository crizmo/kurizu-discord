import React from 'react';
import { Box } from '@mui/material';

import CompleteMessage from '../../components/completeMessage';

const Jng = () => {
    const messages = [
        {
            username: "Kurizu",
            time: "12:00",
            avatar: "https://cdn.discordapp.com/avatars/784141856426033233/f01a415c7d59a50a68796f8fb2e7f18b.png",
            role: "Owner",
            message: "With the help of the <a href='https://www.npmjs.com/package/jng'>JNG</a> npm package, you can easily convert .jpg url's to .png url's and vice versa." +
                "<br>Basically it uploads images to cloudinary then while receiving the url, it converts the image to the desired format." +
                "<br><br>Links:" +
                "<br><a href='https://www.npmjs.com/package/jng'>NPM</a> " +
                "| <a href='https://github.com/crizmo/JNG'>GitHub</a>",
            badgeImages: [
                {
                    src: 'https://img.shields.io/npm/dt/jng',
                    alt: 'npm downloads'
                },
                {
                    src: 'https://img.shields.io/github/stars/crizmo/JNG?style=social',
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
            "<img src='https://cdn.discordapp.com/attachments/1126205512212553818/1126371532713754796/jng-usage.png'>" +
            "\n\n\n" +
            "1 - Here tests/test.json - is the path to the image you want to send and it looks like this - " +
            "\n<img src='https://cdn.discordapp.com/attachments/1126205512212553818/1126372290830024814/testjson.png'>" +
            "\n\n" +
            "\n2 - kurizu - is the name that i want to add to the url " +
            "\n3 - png - is the format that i want to convert the image to " +
            "\n4 - anime - is the tag that i want to add to the image " +
            "\n\n" +
            "Thanks for reading! If you have any questions or suggestions, feel free to contact me on Discord, Instagram or Github"
        }
    ];
    

    return (
        <Box width="100%" height="90vh" backgroundColor="#313338" overflow="auto">
            <CompleteMessage messages={messages} />
        </Box>
    );
};

export default Jng;
