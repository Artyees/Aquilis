import React from 'react';
import { Box, Image } from '@chakra-ui/react';

const LeftSection = () => {
    return (
        <Box flex={1} textAlign="center" mb={{ base: 8, md: 0 }}>
            <Image
                src={'/Images/MainFeature.jpeg'}
                alt="Diagram"
                maxW="100%"
                objectFit="contain"
            />
        </Box>
    );
};

export default LeftSection;
