import React from 'react';
import { Box } from '@mui/material';

import CompleteMessage from '../../components/completeMessage';

const Timely = () => {
    const messages = [
        {
            username: "Kurizu",
            time: "12:00",
            avatar: "https://cdn.discordapp.com/attachments/970974282681307187/1119105882194726952/kurizutaz.png",
            role: "Owner",
            message: "Timely-Note" +
                "\n" +
                "Check how much time is left for your precious day to end + a small todo list." +
                "\n\n" +
                "I personally think knowing how much time is left will increase productivity. That's all!" +
                "\n\n" +
                "<img src='https://cdn.discordapp.com/attachments/1019262228953829496/1019262284461252648/timely.png' alt='homepgimg' height='200px' width='auto' style='border-radius: 10px;'>" +
                "\n\n" +
                "Contributing" +
                "\n\n" +
                "Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change." +
                "\n" +
                "If you want to make the site/code better, you can do so by opening an issue or a pull request."
        },
        {
            username: "Kurizu",
            time: "12:00",
            avatar: "https://cdn.discordapp.com/attachments/970974282681307187/1119105882194726952/kurizutaz.png",
            role: "Owner",
            message: "Oh also, you can use Timely in your browser as an extension! <br>" +
                "As of now it's only available Firefox, but I'm planning on adding support for other browsers as well. <br><br>" +
                "<a href='https://addons.mozilla.org/en-US/firefox/addon/daytasks/'>Timely Extension on Firefox</a><br>",
            reactions: [
                {
                    emoji: '🔥',
                    count: 1
                }
            ]

        },
        {
            username: "Kurizu",
            time: "12:00",
            avatar: "https://cdn.discordapp.com/attachments/970974282681307187/1119105882194726952/kurizutaz.png",
            role: "Owner",
            message: "Timely project links: \n\n" +
                "<a href='https://github.com/crizmo/Timely'>Github</a><br>" +
                "<a href='https://timely-note.vercel.app/'>Website</a><br><br>" +
                "Thank you for checking out!"
        }
    ];

    return (
        <Box width="100%" height="90vh" backgroundColor="#313338" overflow="auto">
            <CompleteMessage messages={messages} />
        </Box>
    );
};

export default Timely;
