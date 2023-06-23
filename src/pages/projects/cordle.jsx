import React from 'react';
import { Box } from '@mui/material';

import CompleteMessage from '../../components/completeMessage';

const Cordle = () => {
    const messages = [
        {
            username: "Kurizu",
            time: "12:00",
            avatar: "https://cdn.discordapp.com/attachments/970974282681307187/1119105882194726952/kurizutaz.png",
            role: "Owner",
            message: "Cordle is a word-guessing game similar to Wordle, but with a twist: all of the words you'll be guessing are related to code and programming." +
                "<br>" +
                "This makes Cordle a fun and challenging way to test your knowledge of programming terminology and improve your vocabulary in this area." +
                "<br><br>" +
                "You can play Cordle at <a href='https://cordle.vercel.app/' target='_blank'>https://cordle.vercel.app</a>" +
                "<br><br>" +
                "<img class='msg-img' src='https://cdn.discordapp.com/attachments/1090594675670384731/1090594995876155392/cordle.png' alt='cordle' height='200px' width='auto' style='border-radius: 10px;' />" +
                "<br><br>" +
                "Currently, words are manually added to the game, but I'm planning to add a feature to add words to the game from the game itself."
        },
        {
            username: "Kurizu",
            time: "12:00",
            avatar: "https://cdn.discordapp.com/attachments/970974282681307187/1119105882194726952/kurizutaz.png",
            role: "Owner",
            message: "Oh, and the code is open source too!" +
                "<br>" +
                "You can find the source code from the links below:" +
                "<br><br>" +
                "<a href='https://github.com/crizmo/Cordle' target='_blank'>Github</a>" +
                "<br>" +
                "<a href='https://cordle.vercel.app/' target='_blank'>Website</a>" +
                "<br>" +
                "<a href='https://github.com/crizmo/Cordle'>" +
                "<img alt='GitHub Repo stars' src='https://img.shields.io/github/stars/crizmo/cordle?style=social'>" +
                "</a>" +
                "<br><br>" +
                "<a href='https://www.producthunt.com/posts/cordle?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-cordle' target='_blank'><img src='https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=393137&theme=dark' alt='Cordle - Wordle for programmers! | Product Hunt' style='width: 150px; height: auto;' width='150' height='auto' /></a>" +
                "<br><br>" +
                "If you want to contribute to the project, feel free to open a pull request on Github." +
                "<br>" +
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

export default Cordle;
