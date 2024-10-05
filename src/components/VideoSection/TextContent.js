// components/TextContent.js

import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';

export default function TextContent() {
    return (
        <Box textAlign="left" p={8}>
            {/* <Heading fontSize="2xl" mb={4} color={"red.700"}>
                Aquilis
            </Heading>
            <Text fontSize="lg" color="gray.600">
                At Aquilis, we focus on your business growth by handling time-consuming tasks that will allow you to focus on growth of the business. Our team is full of experienced professionals who can handle everything from administrative duties to custom services, with efficiency and quality outcomes. We can help you grow without sacrificing your time and give you complete freedom to grow your business.
            </Text> */}

            <Flex flex={1} justifyContent={'center'}>
                <Image
                    alt={'Mission Image'}
                    height={'500px'}
                    objectFit={'cover'}
                    src={
                        'Images/Logo.jpeg'
                    }
                />
            </Flex>
        </Box>
    );
}
