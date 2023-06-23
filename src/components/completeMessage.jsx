import React from 'react';
import { Box } from '@mui/material';

import UserMessage from './userMessage';

const CompleteMessage = ({ messages }) => {
    return (
        <Box paddingTop="8px">
            {messages.map((message, index) => (
                <Box key={index} marginTop="8px">
                    <UserMessage
                        key={index}
                        username={message.username}
                        time={message.time}
                        avatar={message.avatar}
                        role={message.role}
                        message={message.message}
                        image={message.image ? message.image : null}
                    />
                </Box>
            ))}
        </Box>
    );
};

export default CompleteMessage;
