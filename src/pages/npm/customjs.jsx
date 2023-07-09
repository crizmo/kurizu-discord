import React from 'react';
import { Box } from '@mui/material';

import CompleteMessage from '../../components/completeMessage';

const CustomJs = () => {
    const messages = [
        {
            username: "Kurizu",
            time: "12:00",
            avatar: "https://cdn.discordapp.com/attachments/970974282681307187/1119105882194726952/kurizutaz.png",
            role: "Owner",
            message: "<a href='https://www.npmjs.com/package/@kurizu/customjs'>CustomJS</a> is a simple npm package that allows you to customize JavaScript functions with additional features" +
                "<br>such as logging with customizable colors , custom variables and more." +
                "<br><br>Links:" +
                "<br><a href='https://www.npmjs.com/package/@kurizu/customjs'>NPM</a> " +
                "| <a href='https://github.com/crizmo/customjs'>GitHub</a>" +
                "<br><br><a href='https://www.npmjs.com/package/@kurizu/customjs'>" +
                "<img alt='npm' src='https://img.shields.io/npm/dt/@kurizu/customjs'>" +
                "</a><br><a href='https://github.com/crizmo/customjs'>" +
                "<img alt='GitHub Repo' src='https://img.shields.io/github/stars/crizmo/customjs?style=social'>" +
                "</a>"
        },
        {
            username: "Kurizu",
            time: "12:00",
            avatar: "https://cdn.discordapp.com/attachments/970974282681307187/1119105882194726952/kurizutaz.png",
            role: "Owner",
            message: "Functions :" +
            "\n" +
            "<img src='https://cdn.discordapp.com/attachments/1127644093950984242/1127644124678471880/functions.png'>" +
            "\n\n\n" +
            "Additionals :" +
            "\n<img src='https://cdn.discordapp.com/attachments/1127644093950984242/1127644332866941020/stuff.png'>" +
            "\n\n" +
            "\nIf you want more information, you can check out the <a href='https://github.com/crizmo/customjs'>GitHub</a> page." +
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
