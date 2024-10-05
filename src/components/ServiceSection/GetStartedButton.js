import { Button, Box } from '@chakra-ui/react';
import React from 'react';

const GetStartedButton = () => {
    return (
        <Box textAlign="center" mt={8}>
            <Button
                size="lg"
                // colorScheme="red"
                backgroundColor={'red.800'}
                px={8}
                py={6}
                fontSize="lg"
                fontWeight="bold"
                borderRadius="md"
                style={{
                    backgroundColor: 'red.700'
                }}
                _hover={{ backgroundColor: 'red.600' }} // Set hover state color
                _active={{ backgroundColor: 'red.800' }} // Set active state color
                _focus={{ boxShadow: 'outline' }} // Focus state style
            >
                Get Started
            </Button>
        </Box>
    );
};

export default GetStartedButton;
