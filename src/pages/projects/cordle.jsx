import React from 'react';
import { Box } from '@mui/material';

import CompleteMessage from '../../components/completeMessage';

const Cordle = () => {
    const messages = [
        {
            username: "Kurizu",
            time: "12:00",
            avatar: "https://avatars.githubusercontent.com/u/83665497?v=4",
            role: "Owner",
            message: "Cordle is a word-guessing game similar to Wordle, but with a twist: all of the words you'll be guessing are related to code and programming." +
                "<br>" +
                "This makes Cordle a fun and challenging way to test your knowledge of programming terminology and improve your vocabulary in this area." +
                "<br><br>" +
                "You can play Cordle at <a href='https://cordle.vercel.app/'>https://cordle.vercel.app</a>" +
                "\n\n" +
                "<img src='https://cdn.discordapp.com/attachments/1090594675670384731/1090594995876155392/cordle.png'>" +
                "\n\n" +
                "Currently, words are manually added to the game, but I'm planning to add a feature to add words to the game from the game itself.",
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
                "<a href='https://github.com/crizmo/Cordle'>Github</a>" +
                "<br>" +
                "<a href='https://cordle.vercel.app/'>Website</a>" +
                "<br><br>" +
                "If you want to contribute to the project, feel free to open a pull request on Github." +
                "<br>" +
                "If you have any suggestions or feedback, feel free to contact me on Discord (kurizu.taz) or <br>" +
                "<a href='https://discord.gg/drunkbetch-782646778347388959'>Join the Discord Server</a>",
            badgeImages: [
                {
                    src: 'https://img.shields.io/github/stars/crizmo/Cordle?style=social',
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

export default Cordle;
