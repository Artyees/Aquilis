import React from 'react';
import { Box, Text, Flex } from '@chakra-ui/react';

const RedLineSpacer = ({ text = 'Aquilis', width = "100%", height = "2px", mt = 4, mb = 4 }) => {
    return (
        <Flex
            width={width}
            alignItems="center"
            justifyContent="center"
            my={mt}
            mb={mb}
            position="relative"
        >
            {/* Line */}
            <Box width="80%" height={height} bg="red.700" position="absolute" zIndex={0} />

            {/* Centered Text */}
            <Text
                bg="white" // Background color of the text to hide the line behind it
                px={2}     // Padding to create space around the text
                fontWeight="bold"
                color="red.700"
                zIndex={1} // Ensure text is above the line
            >
                {text}
            </Text>
        </Flex>
    );
};

export default RedLineSpacer;
