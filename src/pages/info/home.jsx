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
                "\n I am Kurizu! , I made this website to showcase my projects and links to my socials!" +
                "\n As you might have already noticed this website looks similar to the discord and thats exactly what i was aiming for." +
                "\n\n It is completely made with React and Material UI" +
                "\n The site has a lot of unfinished features but we will get there soon ! ",
      image: "https://c4.wallpaperflare.com/wallpaper/295/163/719/anime-anime-boys-picture-in-picture-kimetsu-no-yaiba-kamado-tanjir%C5%8D-hd-wallpaper-preview.jpg",
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
      message: "It looks great [ ik i wrote it 😔 ]",
    },
  ];

  return (
    <Box width="100%" height="90vh" backgroundColor="#313338" overflow="auto">
      <CompleteMessage messages={messages} />
    </Box>
  );
};

export default Home;
