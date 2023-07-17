import React from 'react';
import { Box } from '@mui/material';

import CompleteMessage from '../../components/completeMessage';

const Minikey = () => {
    const messages = [
        {
            username: "Kurizu",
            time: "12:00",
            avatar: "https://cdn.discordapp.com/attachments/970974282681307187/1119105882194726952/kurizutaz.png",
            role: "Owner",
            message: "Minikey is a Compact Keyboard design with live user input made using Svelte." +
                "<br>Check it out if you want: <a href='https://mini-key.kurizu.repl.co/'>https://mini-key.kurizu.repl.co/</a>" +
                "<br><br>" +
                "<img class='msg-img' src='https://cdn.discordapp.com/attachments/1003176063666491452/1003238076950249523/minikey.png' alt='minikey' height='200px' width='auto' style='border-radius: 10px;' />" +
                "<br><br>" +
                "This is the base design of Minikey." +
                "<br>I plan on adding a 3D key look to the keyboard in the near future, as well as an RGB effect." +
                "<br>If you want to help me, feel free to join me on the <a href='https://github.com/crizmo/Mini-Key'>repo</a>.",
            badgeImages: [
                {
                    src: 'https://img.shields.io/github/stars/crizmo/Mini-Key?style=social',
                    alt: 'github stars'
                }
            ],
        },
        {
            username: "Kurizu",
            time: "12:00",
            avatar: "https://cdn.discordapp.com/attachments/970974282681307187/1119105882194726952/kurizutaz.png",
            role: "Owner",
            message: "Minikey project links:<br>" +
                "<a href='https://github.com/crizmo/Mini-Key'>Github</a><br>" +
                "<a href='https://replit.com/@kurizu/Mini-Key?v=1'>Replit</a><br>" +
                "<a href='https://mini-key.kurizu.repl.co/'>Website</a><br><br>" +
                "Thank you for checking out Minikey!"
        }
    ];
    

    return (
        <Box width="100%" height="90vh" backgroundColor="#313338" overflow="auto">
            <CompleteMessage messages={messages} />
        </Box>
    );
};

export default Minikey;
