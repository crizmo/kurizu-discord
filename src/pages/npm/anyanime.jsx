import React from 'react';
import { Box } from '@mui/material';

import CompleteMessage from '../../components/completeMessage';

const AnyAnime = () => {
    const messages = [
        {
            username: "Kurizu",
            time: "12:00",
            avatar: "https://avatars.githubusercontent.com/u/83665497?v=4",
            role: "Owner",
            badgeImages: [
                {
                    src: 'https://img.shields.io/npm/dt/anyanime',
                    alt: 'npm downloads'
                },
                {
                    src: 'https://img.shields.io/github/stars/crizmo/AnyAnime?style=social',
                    alt: 'github stars'
                }
            ],
            message: "AnyAnime is a NPM package that helps you get random anime pfp / images on use . " +
                "\n It can be used in a discord bot or on a website or anywhere else. " +
                "\n Currently AnyAnime pkg and api has a database of over 600 unique anime pfps. " +
                "\n\n To add more flexibility to the package i later made a API similar to the NPM package " +
                "\n I would appreciate contributions to the API or the Npm package. " +

                "\n\n Here are the links to the NPM package and the API " +
                "\n NPM Package : <a href='https://www.npmjs.com/package/anyanime'>https://www.npmjs.com/package/anyanime</a> " +
                "\n" +
                "\n Github Repo : <a href='https://github.com/crizmo/AnyAnime'>https://github.com/crizmo/AnyAnime</a>" +
                "\n" +
                "\n\n API : <a href='https://rapidapi.com/Kurizu/api/any-anime/'>https://rapidapi.com/Kurizu/api/any-anime/</a> " +
                "\n" +
                "\n Github Repo : <a href='https://github.com/crizmo/AnyAnime_api'>https://github.com/crizmo/AnyAnime_api</a> " +
                "\n" +
                "\n\n Website to the docs: <a href='https://anyanime-npm.netlify.app/'>https://anyanime-npm.netlify.app/</a>",
        },
        {
            username: "Kurizu",
            time: "12:00",
            avatar: "https://avatars.githubusercontent.com/u/83665497?v=4",
            role: "Owner",
            message: "Basic functions of the package : " +
                "\n <img src='https://i.ibb.co/L1gN9VF/41a34af8ef5c.png'>" ,
        },
        {
            username: "Syeca",
            time: "1:00",
            avatar: "https://cdn.discordapp.com/avatars/782653471354650684/ace466bef93d7804a041e1ca6a5ac942.webp",
            role: "Admin",
            message: "Thanks for reading! If you have any questions or suggestions feel free to contact me on discord / instagram ",
        },
    ];

    return (
        <Box width="100%" height="90vh" backgroundColor="#313338" overflow="auto">
            <CompleteMessage messages={messages} />
        </Box>
    );
};

export default AnyAnime;
