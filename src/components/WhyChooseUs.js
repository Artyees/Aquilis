'use client'

import {
    Box,
    Container,
    Flex,
    Heading,
    Icon,
    Stack,
    Text,
    VStack,
    GridItem,
    useColorModeValue
} from '@chakra-ui/react'
import { FcAssistant, FcCollaboration, FcBullish, FcAdvertising, FcManager } from 'react-icons/fc'

const Feature = ({ heading, description, icon }) => {
    return (
        <GridItem>
            <Box
                maxW={{ base: 'full', md: '275px' }}
                w={'full'}
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                p={5}
            >
                <Stack align={'center'} spacing={3}>
                    <Flex
                        w={16}
                        h={16}
                        align={'center'}
                        justify={'center'}
                        rounded={'full'}
                        bg={useColorModeValue('gray.100', 'gray.700')}
                    >
                        {icon}
                    </Flex>
                    <Box mt={2}>
                        <Heading size="md" fontWeight="700" color="gray.700" textAlign={'center'}>
                            {heading}
                        </Heading>
                        <Text mt={1} fontSize={'sm'} color="gray.600" textAlign={'center'}>
                            {description}
                        </Text>
                    </Box>
                </Stack>
            </Box>
        </GridItem>
    )
}

export default function WhyChooseUs() {
    return (
        <Box as={Container} maxW="7xl" mt={14} p={4}>
            <VStack spacing={4} mb={10} textAlign="center">
                <Heading as="h2" fontSize="4xl" fontWeight="bold" color="gray.700">
                    Why Choose Us?
                </Heading>
                <Text fontSize="lg" color="gray.500" maxW="3xl">
                    We provide expert solutions to ensure that your business thrives in an efficient and scalable manner. Here's why we're the right choice for you.
                </Text>
            </VStack>

            <Container maxW={'6xl'} mt={12}>
                <Flex flexWrap="wrap" gridGap={6} justify="center">

                    <Feature
                        heading="Access to Skilled Labor"
                        description="Gain access to a highly skilled and talented pool of individuals that may be unavailable or too costly to hire locally."
                        icon={<Icon as={FcAssistant} w={10} h={10} />}
                    />
                    <Feature
                        heading="Focus on Core Business"
                        description="Focus on building business strategies for long-term growth while we handle your administrative tasks efficiently."
                        icon={<Icon as={FcCollaboration} w={10} h={10} />}
                    />
                    <Feature
                        heading="Increased Efficiency"
                        description="With 24/7 operations and support, experience faster turnaround times and uninterrupted business operations."
                        icon={<Icon as={FcBullish} w={10} h={10} />}
                    />
                    <Feature
                        heading="Risk Management"
                        description="By spreading operations across different regions, you can mitigate risks from economic downturns or political upheavals."
                        icon={<Icon as={FcManager} w={10} h={10} />}
                    />
                    <Feature
                        heading="Improved Service Quality"
                        description="Leverage specialized services and experts to significantly boost your service quality, especially in technical and IT domains."
                        icon={<Icon as={FcAdvertising} w={10} h={10} />}
                    />
                </Flex>
            </Container>
        </Box>
    )
}
