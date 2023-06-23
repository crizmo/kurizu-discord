import React from 'react';
import { Box } from '@mui/material';

import CompleteMessage from '../../components/completeMessage';

const Elina = () => {
    const messages = [
        {
            username: "Kurizu",
            time: "12:00",
            avatar: "https://cdn.discordapp.com/attachments/970974282681307187/1119105882194726952/kurizutaz.png",
            role: "Owner",
            message: "Elina is a multipurpose discord bot made using discord.js!" +
                "<br><br>" +
                "Elina offers a lot of features, mainly games, Genshin stats, chatbot, and many more commands." +
                "<br>" +
                "You can find more about it on <a href='https://elina-bot.netlify.app/commands.html'>Elina's website</a>" +
                "<br><br>" +
                "Oh, here she is..." +
                "<br>"
        },
        {
            username: "Elina",
            time: "12:00",
            avatar: "https://cdn.discordapp.com/avatars/842397001954230303/557d99168d42b845750241d8d7cd0f5b.webp",
            role: "",
            message: "Hi, I am Elina!" +
                "\n" +
                "Just another multipurpose Discord bot among the millions out there." +
                "\n" +
                "There's nothing too different that I do compared to all the major Discord bots out there, lol" +
                "\n\n" +
                "<img src='https://cdn.discordapp.com/attachments/939799133177384993/978893594125561916/commands.png'>"
        },
        {
            username: "Kurizu",
            time: "12:00",
            avatar: "https://cdn.discordapp.com/attachments/970974282681307187/1119105882194726952/kurizutaz.png",
            role: "Owner",
            message: "Oh, and Elina is open source too!" +
                "<br>" +
                "You can find the source code from the links below:" +
                "<br>" +
                "<a href='https://github.com/crizmo/Elina-dev' target='_blank'>Github</a>" +
                "<br>" +
                "<a href='https://elina-bot.netlify.app/' target='_blank'>Website</a>" +
                "<br>" +
                "<a href='https://github.com/crizmo/Elina-dev'>" +
                "<img alt='GitHub Repo stars' src='https://img.shields.io/github/stars/crizmo/elina-dev?style=social'>" +
                "</a>" +
                "<br><br>" +
                "The website has all the commands and info you need to know about Elina." +
                "<br>" +
                "Enjoy!" +
                "<br><br>" +
                "<img class='msg-img' src='https://cdn.discordapp.com/attachments/912537423160942593/912537520150020156/elina_info.jpg' alt='homepgimg' height='150px' width='auto' style='border-radius: 8px;'>"
        }
    ];
    
    

    return (
        <Box width="100%" height="90vh" backgroundColor="#313338" overflow="auto">
            <CompleteMessage messages={messages} />
        </Box>
    );
};

export default Elina;
