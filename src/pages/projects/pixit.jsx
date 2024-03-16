import React from 'react';
import { Box } from '@mui/material';

import CompleteMessage from '../../components/completeMessage';

const Pixit = () => {
    const messages = [
        {
            username: "Kurizu",
            time: "12:00",
            avatar: "https://cdn.discordapp.com/avatars/784141856426033233/f01a415c7d59a50a68796f8fb2e7f18b.png",
            role: "Owner",
            message: "Pixit is a simple pixel art website made using EJS and Node.js. I made it as a side project because I was bored." +
                "<br><br>" +
                "Check it out if you want: <a href='https://pixit.kurizu.repl.co/'>https://pixit.kurizu.repl.co/</a>" +
                "<br><br>" +
                "<img src='https://cdn.discordapp.com/attachments/970974497941368873/977193997267271690/unknown.png' alt='homepgimg' height='200px' width='auto' style='border-radius: 10px;'>"
        },
        {
            username: "Kurizu",
            time: "12:00",
            avatar: "https://cdn.discordapp.com/avatars/784141856426033233/f01a415c7d59a50a68796f8fb2e7f18b.png",
            role: "Owner",
            message: "Pixit project links:<br>" +
                "<a href='https://github.com/crizmo/Pixit'>Github</a><br>" +
                "<a href='https://replit.com/@kurizu/pixit#index.js'>Replit</a><br>" +
                "<a href='https://pixit.kurizu.repl.co/'>Website</a><br><br>" +
                "If you want to see some of my other projects, check out my GitHub page: <a href='https://github.com/crizmo'>Github</a>"
        }
    ];
    
    

    return (
        <Box width="100%" height="90vh" backgroundColor="#313338" overflow="auto">
            <CompleteMessage messages={messages} />
        </Box>
    );
};

export default Pixit;
