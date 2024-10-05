'use client';

import React from 'react';
import {
    Box,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    Heading,
    Text,
    Image,
    VStack,
} from '@chakra-ui/react';
import { servicesData } from './serviceData';
const ServiceTabs = () => {
    return (
        <Box px={10}>
            <Heading textAlign="center" my={10} color="red.700">
                Agents You Can Hire
            </Heading>
            <Tabs variant="line" colorScheme="red" isFitted>
                <TabList>
                    {servicesData.map((service, index) => (
                        <Tab key={index} _selected={{ color: 'red.700', borderColor: 'red.700' }}>
                            {service.category}
                        </Tab>
                    ))}
                </TabList>
                <TabPanels>
                    {servicesData.map((service, index) => (
                        <TabPanel key={index}>
                            <VStack spacing={6} mt={4}>
                                <Image
                                    src={service.image}
                                    alt={service.category}
                                    rounded={'2xl'}
                                    boxShadow={'2xl'}
                                    objectFit="cover"
                                    width="500px"   // Setting a fixed width
                                    height="250px"  // Setting a fixed height
                                    border="2px solid" // Adding a border
                                    borderColor="gray.200" // Border color
                                    borderRadius="md" // Border radius for smooth edges
                                />
                                <Text
                                    fontWeight="bold"
                                    fontSize="xl"
                                    color="red.800"
                                    textAlign="center"
                                    p={4}
                                    maxW="600px"
                                >
                                    {service.title}
                                </Text>
                                <VStack
                                    spacing={4}
                                    alignItems="flex-start"
                                    p={4}
                                    border="1px solid"
                                    borderColor="gray.400"
                                    borderRadius="lg"
                                    maxW="80%"
                                    width="100%"
                                    bg="red.50"
                                >
                                    {service.services.map((serviceDetail, i) => (
                                        <Box key={i} width="100%">
                                            <Heading size="md" color={'red.700'} mb={2}>
                                                {serviceDetail.heading}
                                            </Heading>
                                            <Text>
                                                {serviceDetail.description}
                                            </Text>
                                        </Box>
                                    ))}
                                </VStack>
                            </VStack>
                        </TabPanel>
                    ))}
                </TabPanels>
            </Tabs>
        </Box>
    );
};
export default ServiceTabs;
