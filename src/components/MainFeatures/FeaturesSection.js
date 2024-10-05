import React from 'react';
import { Box, Heading, SimpleGrid, Text, Flex } from '@chakra-ui/react';
import FeatureItem from './FeatureItem';

const FeaturesSection = () => {
    const features = [
        {
            title: 'Fast and Flexible Scalability',
            description: 'The system is designed to move with speed and scale your business faster. Our trained team helps you achieve more while maintaining data security and efficiency of operations.',
        },
        {
            title: 'Stay Focused on What Matters',
            description: 'Your main focus is to grow your business and not to get side tracked while managing operations. Let us handle the operations so you can keep your focus where it matters on driving your business forward.',
        },
        {
            title: 'Trained and Skilled Employees:',
            description: 'Access a pool of highly-skilled, dedicated professionals in Digital Marketing, Accounting, HR, IT, and Administration, ready to drive your business forward.',
        },
    ];

    return (
        <Box textAlign="center" py={10} position="relative">
            <Heading as="h2" fontSize="2xl" color="red.700" mb={4}>
                What We Do
            </Heading>
            <Text
                mx="auto" // Centers the text horizontally
                width={{ base: '100%', md: '70%', lg: '60%' }} // Constrains the width on larger screens
                mb={8}

            >
                We are Aquilis, we provide top offshore outsourced services and talented individuals tailored for start ups and scale ups that helps you grow your business by streamline your daily business operations with us to remove time consuming tasks and help you focus on what matters the most, your growth. With our support, the business can scale up faster and better.           </Text>

            {/* Line above features */}
            <Box position="relative" mb={8}>
                <Box
                    position="absolute"
                    top="0"
                    left="0"
                    right="0"
                    borderTop="2px solid black"
                    width="100%"
                    zIndex={1}
                />

                {/* Black Dots */}
                <Flex justify="space-between" position="relative" zIndex={2} top="-5px">
                    {features.map((_, index) => (
                        <Box key={index} position="relative" width="33.33%">
                            <Box
                                as="span"
                                display="block"
                                width="12px"
                                height="12px"
                                bg="black"
                                borderRadius="50%"
                                mx="auto"
                                position="absolute"
                                left="50%"
                                transform="translateX(-50%)" // This will center the dot
                            />
                        </Box>
                    ))}
                </Flex>



            </Box>

            {/* Features List */}
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
                {features.map((feature, index) => (
                    <FeatureItem key={index} title={feature.title} description={feature.description} />
                ))}
            </SimpleGrid>
        </Box>
    );
};

export default FeaturesSection;
