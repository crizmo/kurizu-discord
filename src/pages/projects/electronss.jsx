import React from 'react';
import { Box } from '@mui/material';

import CompleteMessage from '../../components/completeMessage';

const ElectronSS = () => {
    const messages = [
        {
            username: "Kurizu",
            time: "12:00",
            avatar: "https://avatars.githubusercontent.com/u/83665497?v=4",
            role: "Owner",
            message: 
                "Screenshot Capture and Upload Application" +
                "\n\n" +
                "This project is a simple Electron-based application that allows users to capture screenshots. The application uses Electron's desktopCapturer API for capturing screenshots." +
                "\n\n" +
                "Features:" +
                "\n" +
                "- Capture screenshots of the entire screen or a specific area." +
                "\n" +
                "- Convert screenshots to base64 strings for easy transmission." +
                "\n\n" +
                "To use the application, simply clone the repository from <a href='https://github.com/crizmo/electron-screenshot'>Github</a> and run the application locally." +
                "\n\n" +
                "<img src='https://i.ibb.co/x3MV8vd/9219153e2380.png' >",
            badgeImages: [
                {
                    src: 'https://img.shields.io/github/stars/crizmo/electron-screenshot?style=social',
                    alt: 'github stars'
                },
                {
                    src: 'https://img.shields.io/github/forks/crizmo/electron-screenshot?style=social',
                    alt: 'github forks'
                }
            ],
        },
        {
            username: "Kurizu",
            time: "12:00",
            avatar: "https://avatars.githubusercontent.com/u/83665497?v=4",
            role: "Owner",
            message: 
                "Oh btw I've implemented this structure with an host" +
                "\n\n" +
                "Simple demonstration of a desktop application that captures a screenshot and uploads it to a server." +
                "\n" +
                "You can customize the server to your liking, as in instead of your own server you can use a third-party service like \n <a href='https://imgur.com/'>Imgur</a> or <a href='https://imgbb.com/'>ImgBB</a> or <a href='https://cloudinary.com/'>Cloudinary</a>." +
                "\n\n\n" +
                "Features:" +
                "\n" +
                "- Capture screenshots of the entire screen or a specific area." +
                "\n" +
                "- Convert screenshots to base64 strings for easy transmission." +
                "\n" +
                "- The URL of the uploaded image is then copied to the clipboard." +
                "\n\n" +
                "To use the application, simply clone the repository from <a href='https://github.com/crizmo/Electron-image-host'>Github</a> and run the application locally." +
                "\n\n" +
                "<img src='https://i.ibb.co/xz1fqp1/2ec1ebf424c1.png' >" +
                "\n\n\n" +
                "If you have any questions or need help, feel free to ask in the <a href='https://discord.gg/drunkbetch-782646778347388959'>Discord server</a>." +
                "\n\n" +
                "Fun fact: I've used this tool for all the major images on this website." +
                "Anyways thank you for checking out the Electron Screenshot project!",
            badgeImages: [
                {
                    src: 'https://img.shields.io/github/stars/crizmo/Electron-image-host?style=social',
                    alt: 'github stars'
                },
                {
                    src: 'https://img.shields.io/github/forks/crizmo/Electron-image-host?style=social',
                    alt: 'github forks'
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

export default ElectronSS;
