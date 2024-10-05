import React from 'react';
import { Box, Heading, Text, Button } from '@chakra-ui/react';
import { Link as ScrollLink } from 'react-scroll';

const RightSection = () => {
    return (
        <Box flex={1} textAlign="left" pl={{ base: 0, md: 8 }}>
            <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
                <Text
                    as={'span'}
                    position={'relative'}
                    _after={{
                        content: "''",
                        width: 'full',
                        height: '30%',
                        position: 'absolute',
                        bottom: 1,
                        left: 0,
                        bg: 'red.700',
                        zIndex: -1,
                    }}>
                    You Grow,
                </Text>
                <br />
                <Text as={'span'} color={'red.700'}>
                    We Deliver.
                </Text>
            </Heading>

            <Text color="gray.600" mb={6}>
                Optimize business productivity with our all-in-one business support solution.
                Let us handle your tasks and free up your time for what matters most
            </Text>
            <ScrollLink to="contact" smooth={true} duration={500}>
                <Button backgroundColor={'red.700'} color={'white'} _hover={{ backgroundColor: 'red.600' }} >
                    Get Started
                </Button>
            </ScrollLink>
        </Box>
    );
};

export default RightSection;
