import React from 'react';
import { Box } from '@mui/material';

import CompleteMessage from '../../components/completeMessage';

const Announcements = () => {
  const messages = [
    {
      username: "Kurizu",
      time: "12:00",
      avatar: "https://cdn.discordapp.com/attachments/970974282681307187/1119105882194726952/kurizutaz.png",
      role: "Owner",
      message: "@everyone \n Hello World! " +
        "\n <img src='https://cdn.discordapp.com/attachments/970974282681307187/1126568283588530176/wow.png'>",
    },
    {
      username: "Kurizu",
      time: "12:00",
      avatar: "https://cdn.discordapp.com/attachments/970974282681307187/1119105882194726952/kurizutaz.png",
      role: "Owner",
      message: "The issue with the old website [ if you have seen it ] was it was just bad" +
                "\n It was made using svelte , u can say i had skill issue when i made it" +
                "\n\n So i decided to remake it using React and Vite , and here we are !" +
                "\n Hope you like it !",
    },
    {
      username: "Syeca",
      time: "1:00",
      avatar: "https://cdn.discordapp.com/avatars/782653471354650684/ace466bef93d7804a041e1ca6a5ac942.webp",
      role: "Admin",
      message: "It looks great :D",
    },
    {
      username: "Pocky",
      time: "12:00",
      avatar: "https://cdn.discordapp.com/avatars/806015103198822401/a7224a4e4806e4fa9d694e2c5ca31e70.webp",
      role: "Admin",
      message: "Oh btw if you want to be on the right side user list or want a message on the website" +
        "\n You can join the discord server and tell me to do so !" +
        "\n Discord Server : <a href='https://discord.gg/drunkbetch-782646778347388959'>Gato</a>",
    },
  ];

  return (
    <Box width="100%" height="90vh" backgroundColor="#313338" overflow="auto">
      <CompleteMessage messages={messages} />
    </Box>
  );
};

export default Announcements;
