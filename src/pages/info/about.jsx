import React from 'react';
import { Box } from '@mui/material';

import CompleteMessage from '../../components/completeMessage';

const About = () => {
  const messages = [
    {
      username: "Kurizu",
      time: "12:00",
      avatar: "https://cdn.discordapp.com/avatars/784141856426033233/f01a415c7d59a50a68796f8fb2e7f18b.png",
      role: "Owner",
      message: "Now a little about me :D" + 
                "\n I am Kurizu! , Currently exploring the world of coding" +
                "\n Im not very good at social interactions , but I'm always up for a chat !" +
                "\n\n As far as hobbies go , I like to code , draw that's about it" +
                "\n\n I like listening to lofi music && pop music" +
                "\n Here are some of my fav songs :" + "\n\n" +
                "<iframe style='border-radius:12px' src='https://open.spotify.com/embed/playlist/4rO0JccYMK0Y8KqwJXpzHd?utm_source=generator&theme=0' width='100%' height='152' frameBorder='0' allowfullscreen='' allow='autoplay; clipboard-write; encrypted-media;' loading='lazy'></iframe>",
    },
    {
      username: "Kurizu",
      time: "12:00",
      avatar: "https://cdn.discordapp.com/avatars/784141856426033233/f01a415c7d59a50a68796f8fb2e7f18b.png",
      role: "Owner",
      message: "If you want to see some of my other projects, check out my GitHub page: <a href='https://github.com/crizmo/'>Github</a>" +
                "\n\n I also have a discord server , if you want to join :" +
                "\n\n <iframe src='https://discord.com/widget?id=782646778347388959&theme=dark' width='100%' height='200' allowtransparency='true' frameborder='0' sandbox='allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts'></iframe>" +
                "\n Thats about it , thanks for reading !",
    },
    {
      username: "Syeca",
      time: "1:00",
      avatar: "https://cdn.discordapp.com/avatars/782653471354650684/ace466bef93d7804a041e1ca6a5ac942.webp",
      role: "Admin",
      message: ":o",
      reactions: [
        {
          emoji: '✅',
          count: 1
        }
      ]
    },
  ];

  return (
    <Box width="100%" height="90vh" backgroundColor="#313338" overflow="auto">
      <CompleteMessage messages={messages} />
    </Box>
  );
};

export default About;
