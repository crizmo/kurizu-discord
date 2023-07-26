import React from 'react';
import { Box } from '@mui/material';

import CompleteMessage from '../../components/completeMessage';

const Pptgen = () => {
    const messages = [
        {
            username: "Kurizu",
            time: "12:00",
            avatar: "https://cdn.discordapp.com/attachments/970974282681307187/1119105882194726952/kurizutaz.png",
            role: "Owner",
            message: "Pptgen" +
                "\n" +
                "Generate ppt using code" +
                "\n\n" +
                "Basically takes a json input and generates a ppt\n" +
                "You can update the position / order of the elements in the ppt by changing the code" +
                "\n\n" +
                "If you want to use Pptgen, you can do so by running the code on github:-\n\n" +
                "<a href='https://github.com/crizmo/pptgen'>Github</a>" +
                "\n" +
                "\nOpen an issue if you have any problems." +
                "\n\n" +
                "If you have any questions, feel free to ask in the <a href='https://discord.gg/drunkbetch-782646778347388959'>Discord server</a>."
        },
        {
            username: "Kurizu",
            time: "12:00",
            avatar: "https://cdn.discordapp.com/attachments/970974282681307187/1119105882194726952/kurizutaz.png",
            role: "Owner",
            message: "pptgen project links: \n\n" +
                "<a href='https://github.com/crizmo/pptgen'>Github</a><br>" +
                "Thank you for checking out pptgen!",
            badgeImages: [
                {
                    src: 'https://img.shields.io/github/stars/crizmo/pptgen?style=social',
                    alt: 'github stars'
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

export default Pptgen;
