import React from 'react';
import { Box } from '@mui/material';

import CompleteMessage from '../../components/completeMessage';

const Repler = () => {
    const messages = [
        {
            username: "Kurizu",
            time: "12:00",
            avatar: "https://cdn.discordapp.com/attachments/970974282681307187/1119105882194726952/kurizutaz.png",
            role: "Owner",
            message: "Repler" +
                "\n" +
                "Keep your Repl.it projects alive with this simple Repl pinger." +
                "\n\n" +
                "Repler willping your repl every 25 minutes to keep it alive." +
                "\n" +
                "If you want to use Repler, you can do so by :-\n\n" +
                "<img src='https://cdn.discordapp.com/attachments/1127935019080486914/1127935050042851499/usage.png' >" +
                "\n\n\n" +
                "Or clone the repo and run it locally :-\n" +
                "Check the github repo at <a href='https://github.com/crizmo/repler'>Github</a>" +
                "\n" +
                "If you have any questions, feel free to ask in the <a href='https://discord.gg/drunkbetch-782646778347388959'>Discord server</a>."
        },
        {
            username: "Kurizu",
            time: "12:00",
            avatar: "https://cdn.discordapp.com/attachments/970974282681307187/1119105882194726952/kurizutaz.png",
            role: "Owner",
            message: "Repler project links: \n\n" +
                "<a href='https://github.com/crizmo/repler'>Github</a><br>" +
                "<a href='https://repler.vercel.app/'>Website</a><br>" +
                "<a href='https://repler.vercel.app/status'>Status</a><br>" +
                "Thank you for checking out Repler!"
        }
    ];

    return (
        <Box width="100%" height="90vh" backgroundColor="#313338" overflow="auto">
            <CompleteMessage messages={messages} />
        </Box>
    );
};

export default Repler;
