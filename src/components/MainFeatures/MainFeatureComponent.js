import React from 'react';
import { Box, Flex, Stack } from '@chakra-ui/react';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import FeaturesSection from './FeaturesSection';

const MainFeatureComponent = () => {
    return (
        <Box py={3} px={5}>
            {/* Hero Section */}
            <Flex direction={{ base: 'column', md: 'row' }} align="center" justify="space-between">
                {/* Left side with image */}
                <LeftSection />

                {/* Right side with text */}
                <RightSection />
            </Flex>

            {/* Features Section */}
            <Box mt={3}>
                <FeaturesSection />
            </Box>
        </Box>
    );
};

export default MainFeatureComponent;
