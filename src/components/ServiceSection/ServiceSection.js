// components/ServiceSection.js

import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import ServiceGrid from './ServiceGrid';
// import GetStartedButton from './GetStartedButton';

const ServiceSection = () => {
    return (
        <Box textAlign="center" py={10} px={4}>
            <Heading as="h1" size="xl" mb={4}>
                Scale your business according to your specific service needs
            </Heading>
            <Text fontSize="lg" color="gray.600" mb={8}>
                Elevate your operations with our ready-to-go services, designed to support your growth seamlessly.
            </Text>

            {/* Service Cards */}
            <ServiceGrid />
        </Box>
    );
};

export default ServiceSection;
