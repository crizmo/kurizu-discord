import React from 'react';
import { Box } from '@mui/material';

import CompleteMessage from '../../components/completeMessage';

const CustomJs = () => {
    const messages = [
        {
            username: "Kurizu",
            time: "12:00",
            avatar: "https://avatars.githubusercontent.com/u/83665497?v=4",
            role: "Owner",
            message: "<a href='https://www.npmjs.com/package/@kurizu/customjs'>CustomJS</a> is a simple npm package that allows you to customize JavaScript functions with additional features" +
                "<br>such as logging with customizable colors , custom variables and more." +
                "<br><br>Links:" +
                "<br><a href='https://www.npmjs.com/package/@kurizu/customjs'>NPM</a> " +
                "| <a href='https://github.com/crizmo/customjs'>GitHub</a>",
            badgeImages: [
                {
                    src: 'https://img.shields.io/npm/dt/@kurizu/customjs',
                    alt: 'npm downloads'
                },
                {
                    src: 'https://img.shields.io/github/stars/crizmo/customjs?style=social',
                    alt: 'github stars'
                }
            ],
        },
        {
            username: "Kurizu",
            time: "12:00",
            avatar: "https://avatars.githubusercontent.com/u/83665497?v=4",
            role: "Owner",
            message: 
                "If you want more information, you can check out the <a href='https://github.com/crizmo/customjs'>GitHub</a> page." +
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

export default CustomJs;
