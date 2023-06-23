import React from 'react';
import { Box } from '@mui/material';

import CompleteMessage from '../../components/completeMessage';

const Emogit = () => {
    const messages = [
        {
            username: "Kurizu",
            time: "12:00",
            avatar: "https://cdn.discordapp.com/attachments/970974282681307187/1119105882194726952/kurizutaz.png",
            role: "Owner",
            message: "EmoGit is a web-based tool that allows you to easily add emojis to your commit messages. <br>" +
                "It provides a user-friendly interface that makes it simple and fun to incorporate expressive emojis into your Git workflow. <br><br>" +
                "You can check out EmoGit <a href='https://emogit.vercel.app/' target='_blank'>https://emogit.vercel.app/</a><br><br>" +
                "<img class='msg-img' src='https://cdn.discordapp.com/attachments/1114182354441883658/1114839683772461066/emogit.png' alt='cordle' height='500px' width='auto' style='border-radius: 10px;'><br><br>" +
                "EmoGit eliminates the need to remember emoji codes or manually type them in your commit messages. <br>" +
                "I'm planning on making a desktop app for EmoGit in the future."
        },
        {
            username: "Kurizu",
            time: "12:00",
            avatar: "https://cdn.discordapp.com/attachments/970974282681307187/1119105882194726952/kurizutaz.png",
            role: "Owner",
            message: "Oh, and the code is open source too! <br>" +
                "You can find the source code from the links below:<br>" +
                "<a href='https://github.com/crizmo/EmoGit' target='_blank'>Github</a><br>" +
                "<a href='https://emogit.vercel.app/' target='_blank'>Website</a><br>" +
                "<a href='https://github.com/crizmo/EmoGit'>" +
                "<img alt='GitHub Repo stars' src='https://img.shields.io/github/stars/crizmo/emogit?style=social'>" +
                "</a><br><br>" +
                "If you want to contribute to the project, feel free to open a pull request on GitHub.<br>" +
                "If you have any suggestions or feedback, feel free to contact me on Discord (kurizu.taz) or " +
                "<a href='https://discord.gg/drunkbetch-782646778347388959' target='_blank'>Join the Discord Server</a>"
        }
    ];
    
    

    return (
        <Box width="100%" height="95vh" backgroundColor="#313338" overflow="auto">
            <CompleteMessage messages={messages} />
        </Box>
    );
};

export default Emogit;
