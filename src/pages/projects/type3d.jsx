import React from 'react';
import { Box } from '@mui/material';

import CompleteMessage from '../../components/completeMessage';

const Type3d = () => {
    const messages = [
        {
            username: "Kurizu",
            time: "12:00",
            avatar: "https://cdn.discordapp.com/attachments/970974282681307187/1119105882194726952/kurizutaz.png",
            role: "Owner",
            message: "Type3D is a project where I used the 60% keyboard design made by schwiiiii." + 
                "\n\n" +
                " You can find the original code <a href='https://codepen.io/schwiiiii/pen/BarVMxq'>here</a>." +
                "\n\n" +
                "I then added live keyboard input and movements to the keys and the overall keyboard." +
                "\n\n" +
                "<img src='https://cdn.discordapp.com/attachments/1014118117493985350/1014118195679993937/type-3d.png'>" +
                "\n\n" +
                "You can find the code <a href='https://github.com/crizmo/Type-3d'>here</a>" +
                "\n\n" +
                " Feel free to use the code for your own projects." +
                "\n\n" +
                "If you want to contribute to the project, feel free to make a pull request."
        },
        {
            username: "Kurizu",
            time: "12:00",
            avatar: "https://cdn.discordapp.com/attachments/970974282681307187/1119105882194726952/kurizutaz.png",
            role: "Owner",
            message: "Type3D project links: \n\n" +
                "<a href='https://github.com/crizmo/Type-3d'>Github</a><br>" +
                "<a href='https://crizmo.github.io/Type-3d/key.html'>Website</a><br>" +
                "<a href='https://type-3d.kurizu.repl.co/'>Replit</a><br><br>" +
                "Thank you for checking out!"
        }
    ];
    
    

    return (
        <Box width="100%" height="95vh" backgroundColor="#313338" overflow="auto">
            <CompleteMessage messages={messages} />
        </Box>
    );
};

export default Type3d;
