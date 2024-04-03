import React from 'react';
import { Box } from '@mui/material';

import CompleteMessage from '../../components/completeMessage';

const Home = () => {
  const messages = [
    {
      username: "Kurizu",
      time: "12:00",
      avatar: "https://avatars.githubusercontent.com/u/83665497?v=4",
      role: "Owner",
      message: "Hello World! " +
        "\n I'm Kurizu , This is my simple little space on the internet 🌟" +
        "\n Aim was to make it look like discord i'm not sure if i did it well but i tried my best !" +
        "\n\n The site has a lot of unfinished features but we will get there soon ! " +
        "\n <img src='https://github.com/crizmo/crizmo/assets/83665497/133ae790-015e-426e-acef-2102eb443ab3'>",
      reactions: [
        {
          emoji: '👋',
          count: 1
        },
        {
          emoji: '👀',
          count: 1
        },
      ]
    },
    {
      username: "Kurizu",
      time: "12:00",
      avatar: "https://avatars.githubusercontent.com/u/83665497?v=4",
      role: "Owner",
      message: "Check out the About channel to know more about me." +
        "\nThat's all for now ig ! " +
        "\nThanks for checking out my website ! " +
        "\n\n" +
        "Ugh I should add more stuff here but idk what to add 🙊",
    },
  ];

  return (
    <Box width="100%" height="90vh" backgroundColor="#313338" overflow="auto">
      <CompleteMessage messages={messages} />
    </Box>
  );
};

export default Home;
