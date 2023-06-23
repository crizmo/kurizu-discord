import React from 'react';
import { Box } from '@mui/material';

import CompleteMessage from '../../components/completeMessage';

const Pixit = () => {
    const messages = [
        {
            username: "Kurizu",
            time: "12:00",
            avatar: "https://cdn.discordapp.com/attachments/970974282681307187/1119105882194726952/kurizutaz.png",
            role: "Owner",
            message: "Pixit is a simple pixel art website made using EJS and Node.js. I made it as a side project because I was bored." +
                "<br><br>" +
                "Check it out if you want: <a href='https://pixit.kurizu.repl.co/'>https://pixit.kurizu.repl.co/</a>" +
                "<br><br>" +
                "<img class='msg-img' src='https://cdn.discordapp.com/attachments/970974497941368873/977193997267271690/unknown.png' alt='homepgimg' height='300px' width='auto' style='border-radius: 10px;'>"
        },
        {
            username: "Kurizu",
            time: "12:00",
            avatar: "https://cdn.discordapp.com/attachments/970974282681307187/1119105882194726952/kurizutaz.png",
            role: "Owner",
            message: "Pixit project links:<br>" +
                "<a href='https://github.com/crizmo/Pixit'>Github</a><br>" +
                "<a href='https://replit.com/@kurizu/pixit#index.js'>Replit</a><br>" +
                "<a href='https://pixit.kurizu.repl.co/'>Website</a><br><br>" +
                "If you want to see some of my other projects, check out my GitHub page: <a href='https://github.com/crizmo'>Github</a>"
        }
    ];
    
    

    return (
        <Box width="100%" height="95vh" backgroundColor="#313338" overflow="auto">
            <CompleteMessage messages={messages} />
        </Box>
    );
};

export default Pixit;
