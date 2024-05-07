import React from 'react';
import { Box } from '@mui/material';

import CompleteMessage from '../../components/completeMessage';

const drawingLinks = [
    "https://pbs.twimg.com/media/GMj0-g9XUAApI5z?format=jpg&name=4096x4096",
    "https://pbs.twimg.com/media/GMETa_2WkAA8g_J?format=png&name=small",

    "https://pbs.twimg.com/media/GLqqVN2XAAACpux?format=jpg&name=large",
    "https://pbs.twimg.com/media/GLV5ZxTXEAEzEXZ?format=jpg&name=small",
    "https://pbs.twimg.com/media/GLR4E-QXMAEcvNo?format=png&name=small",
    "https://i.ibb.co/mqkRT7H/w.jpg",

    "https://pbs.twimg.com/media/GGeQthGawAAq0oH?format=jpg&name=small",
    "https://pbs.twimg.com/media/GDoIr9zbEAALS0w?format=jpg&name=small",
    "https://pbs.twimg.com/media/GCc8KXRbUAA3nh3?format=jpg&name=large",

    "https://i.ibb.co/G5GTgJC/39884b253973.png",
    "https://i.ibb.co/QCFmM9h/0baec1d5959d.png",
    "https://i.ibb.co/ggHkW6B/a38356053c0b.png",
    "https://i.ibb.co/svR7D5Z/02cd5879ccd8.png",
    "https://i.ibb.co/g95FzXb/b190b0f9a022.png",
    "https://i.ibb.co/0c4GSTp/0df64d4b8f4d.png",

    "https://i.ibb.co/HYsqygy/743bbb81e925.png",
    "https://i.ibb.co/qnrPn3R/a512cf0f2d9f.png",

    "https://i.ibb.co/dGKjgbx/74d2e5b542b0.png",
    "https://i.ibb.co/PcXzk00/99b2831e5c34.png",

    "https://i.ibb.co/WkmLCJP/8e2f5c7e3215.png",
    "https://i.ibb.co/mhVCYQJ/4442591e99c6.png",

    "https://i.ibb.co/gJBSb8b/b39589cb95f8.png",
    "https://i.ibb.co/9n41ZWs/a58455340006.png",
]

const Drawings = () => {
    const messages = [
        {
            username: "Kurizu",
            time: "12:00",
            avatar: "https://avatars.githubusercontent.com/u/83665497?v=4",
            role: "Owner",
            message: "Some of my drawings :",
        },
    ];

    const addDrawing = (link) => {
        messages.push({
            username: "Kurizu",
            time: "12:00",
            avatar: "https://avatars.githubusercontent.com/u/83665497?v=4",
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
