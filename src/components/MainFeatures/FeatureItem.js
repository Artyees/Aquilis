import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const FeatureItem = ({ title, description }) => {
    return (
        <Box>
            <Heading as="h3" fontSize="lg" mb={3} >
                {title}
            </Heading>
            <Text color="gray.600">{description}</Text>
        </Box>
    );
};

export default FeatureItem;
