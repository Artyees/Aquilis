'use client';

import {
    Box,
    VStack,
    HStack,
    Stack,
    Flex,
    Icon,
    Text,
    Heading,
    Divider,
    useColorModeValue,
} from '@chakra-ui/react';
import { FaClipboardList, FaUsers, FaUserCheck, FaRocket } from 'react-icons/fa';

const steps = [
    {
        title: 'Tell Us About Your Requirements',
        description:
            'To accomplish this, you can give us specific details about your needs. We will create a Job Description for you and send it to you with the exact quote.',
        icon: FaClipboardList,
    },
    {
        title: 'Shortlist the Best 2-3 Candidates',
        description:
            'Once our team analyzes your requirements, they will shortlist the best candidates out of 300+ applications. You can choose to interview the shortlisted ones.',
        icon: FaUsers,
    },
    {
        title: 'Interview Selected Candidates',
        description:
            'Interview the shortlisted candidates by having a casual conversation with them. Find out if they are the right fit in terms of skillset and company culture.',
        icon: FaUserCheck,
    },
    {
        title: 'Hire the Best & Ready, Get, Set, Go!',
        description:
            'Hire the best candidate who matches your requirements. Our IT team will set up all the hardware and software for the remote worker.',
        icon: FaRocket,
    },
];

const HowItWorks = () => {
    const borderColor = useColorModeValue('gray.300', 'gray.600');

    return (
        <Box p={8} my={5} backgroundColor={'white'}>
            <Box mx="auto" maxW="5xl">
                <Heading as="h2" size="xl" textAlign="center" mb={10} >
                    How It Works
                </Heading>
                <VStack spacing={6} align="stretch" position="relative" width={"86%"} margin={'auto'}>
                    {steps.map((step, index) => (
                        <HStack
                            key={index}
                            alignItems="flex-start"
                            spacing={5}
                            justifyContent={index % 2 === 0 ? 'flex-start' : 'flex-end'}
                        >
                            {index % 2 === 0 && (
                                <StepCard title={step.title} description={step.description} />
                            )}
                            <Flex
                                direction="column"
                                align="center"
                                position="relative"
                                minH="150px"
                            >
                                <Icon
                                    as={step.icon}
                                    boxSize={10}
                                    color="red.700"
                                    zIndex={1}
                                    bg="white"
                                    p={2}
                                    borderRadius="full"
                                    border="2px solid"
                                    borderColor="red.700"
                                />
                                {index < steps.length - 1 && (
                                    <Divider
                                        orientation="vertical"
                                        borderWidth={2}
                                        borderColor={borderColor}
                                        height="full"
                                    />
                                )}
                            </Flex>
                            {index % 2 === 1 && (
                                <StepCard title={step.title} description={step.description} />
                            )}
                        </HStack>
                    ))}
                </VStack>
            </Box>
        </Box>
    );
};

const StepCard = ({ title, description }) => {
    return (
        <Box
            p={5}
            borderWidth={1}
            borderRadius="md"
            bg="white"
            maxW="400px"
            boxShadow="md"
            borderColor="red.50"
        >
            <Heading as="h3" size="md" mb={3} color="red.700">
                {title}
            </Heading>
            <Text>{description}</Text>
        </Box>
    );
};

export default HowItWorks;
