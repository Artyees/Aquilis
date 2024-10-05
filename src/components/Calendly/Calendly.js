import { Box, Heading } from '@chakra-ui/react';
import React from 'react';

const CalendlyEmbed = () => {
    return (
        <Box textAlign="center" py={10} id='contact'>
            <Heading as="h1" size="xl" mb={4}>
                Choose Us to grow your Business
            </Heading>
            <Box style={{ height: '800px' }}>
                <iframe
                    src="https://calendly.com/admin-aquilis/30min"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    scrolling="no"
                ></iframe>
            </Box>
        </Box>
    );
};

export default CalendlyEmbed;
