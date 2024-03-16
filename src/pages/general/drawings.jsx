import React from 'react';
import { Box } from '@mui/material';

import CompleteMessage from '../../components/completeMessage';

const drawingLinks = [
    "https://pbs.twimg.com/media/GGeQthGawAAq0oH?format=jpg&name=small",
    "https://pbs.twimg.com/media/GDoIr9zbEAALS0w?format=jpg&name=small",
    "https://pbs.twimg.com/media/GCc8KXRbUAA3nh3?format=jpg&name=large",

    "https://cdn.discordapp.com/attachments/1135916648847646790/1154747008528162836/d17.png?width=348&height=424",
    "https://cdn.discordapp.com/attachments/1135916648847646790/1152657019011092611/d16.png?width=348&height=424",
    "https://cdn.discordapp.com/attachments/1135916648847646790/1149695918828945488/d15.png?width=348&height=424",
    "https://media.discordapp.net/attachments/977949070893125632/1145699722917597337/d7.png?width=348&height=424",
    "https://media.discordapp.net/attachments/977949070893125632/1145699722649153577/d6.png?width=339&height=424",
    "https://media.discordapp.net/attachments/977949070893125632/1145699722393288785/d5.png?width=424&height=424",
    "https://media.discordapp.net/attachments/977949070893125632/1145699721592197120/d1.png?width=424&height=424",
    "https://media.discordapp.net/attachments/977949070893125632/1145700853404155944/d10.png?width=339&height=424",

    "https://media.discordapp.net/attachments/977949070893125632/1145701396759453796/d13.png?width=424&height=424",
    "https://media.discordapp.net/attachments/977949070893125632/1145701396491010219/d12.png?width=424&height=424",

    "https://media.discordapp.net/attachments/977949070893125632/1145699722158428202/d3.png?width=424&height=424",
    "https://media.discordapp.net/attachments/977949070893125632/1145701862448840856/d14.png?width=421&height=424",

    "https://media.discordapp.net/attachments/977949070893125632/1145700722252464259/d8.png?width=339&height=424",
    "https://media.discordapp.net/attachments/977949070893125632/1145700853156687923/d9.png?width=339&height=424",
]

const Drawings = () => {
    const messages = [
        {
            username: "Kurizu",
            time: "12:00",
            avatar: "https://cdn.discordapp.com/avatars/784141856426033233/f01a415c7d59a50a68796f8fb2e7f18b.png",
            role: "Owner",
            message: "Some of my drawings :",
        },
    ];

    const addDrawing = (link) => {
        messages.push({
            username: "Kurizu",
            time: "12:00",
            avatar: "https://cdn.discordapp.com/avatars/784141856426033233/f01a415c7d59a50a68796f8fb2e7f18b.png",
            role: "Owner",
            message: "<img src='" + link + "'>",
            reactions: [
                {
                    emoji: '👀',
                    count: 1
                }
            ]
        })
    }

    drawingLinks.forEach(link => addDrawing(link))

    return (
        <Box width="100%" height="90vh" backgroundColor="#313338" overflow="auto">
            <CompleteMessage messages={messages} />
        </Box>
    );
};

export default Drawings;
