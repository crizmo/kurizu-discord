import React from 'react';
import { Box } from '@mui/material';

import CompleteMessage from '../../components/completeMessage';

const General = () => {
  const messages = [
    {
      username: "Kurizu",
      time: "12:00",
      avatar: "https://cdn.discordapp.com/attachments/970974282681307187/1119105882194726952/kurizutaz.png",
      role: "Owner",
      message: "Hello World! ",
      image: "https://c4.wallpaperflare.com/wallpaper/295/163/719/anime-anime-boys-picture-in-picture-kimetsu-no-yaiba-kamado-tanjir%C5%8D-hd-wallpaper-preview.jpg",
    },
    {
      username: "Chikn_man",
      time: "1:00",
      avatar: "https://cdn.discordapp.com/attachments/1121657823986733077/1121657883164160051/chicken_man4.jpeg",
      role: "Poop Eater",
      message: "I eat poop",
    },
    {
      username: "Kurizu",
      time: "12:00",
      avatar: "https://cdn.discordapp.com/attachments/970974282681307187/1119105882194726952/kurizutaz.png",
      role: "Owner",
      message: "Oh btw if you want to be on the right side user list or want a message on the website" +
        "\n You can join the discord server and tell me to do so !" +
        "\n Discord Server : <a href='https://discord.gg/drunkbetch-782646778347388959'>discord.gg/drunkbetch</a>",
    },
  ];

  return (
    <Box width="100%" height="90vh" backgroundColor="#313338" overflow="auto">
      <CompleteMessage messages={messages} />
    </Box>
  );
};

export default General;
