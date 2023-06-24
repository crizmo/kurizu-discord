import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';

import CompleteMessage from '../../components/completeMessage';
import { supabase } from '../../data/supabase';

const General = ({ data }) => {
  const [messages, setMessages] = useState([]);

  const fetchMessages = async () => {
    try {
      const { data, error } = await supabase.from('messages').select('*').order('time');

      if (error) {
        console.error('Error fetching messages:', error);
      } else {
        setMessages(data.map((message) => ({
          username: message.name,
          time: message.time,
          avatar: message.pfp,
          role: "User",
          message: message.message,
        })));
        
      }
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <Box width="100%" height="90vh" backgroundColor="#313338" overflow="auto">
      <CompleteMessage messages={messages} />
    </Box>
  );
};

export default General;
