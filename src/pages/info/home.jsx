import React from 'react';
import { Box } from '@mui/material';

import CompleteMessage from '../../components/completeMessage';

const Home = () => {
  const messages = [
    {
      username: "Kurizu",
      time: "12:00",
      avatar: "https://cdn.discordapp.com/attachments/970974282681307187/1119105882194726952/kurizutaz.png",
      role: "Owner",
      message: "Hello World! " +
        "\n I'm Kurizu , This is my simple website on the internet 🌟" +
        "\n Aim was to make it look like discord i'm not sure if i did it well but i tried my best !" +
        "\n\n The site has a lot of unfinished features but we will get there soon ! " +
        "\n <img src='https://camo.githubusercontent.com/e33ad8dbd69feb19d295fbc3e2b72ea5ba9ad6f66ae83d669ec1772004ee55e3/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f6174746163686d656e74732f3937303937343238323638313330373138372f313131303438323338313631393539373335332f6769746875625f62672e706e67'>",
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
      avatar: "https://cdn.discordapp.com/attachments/970974282681307187/1119105882194726952/kurizutaz.png",
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
