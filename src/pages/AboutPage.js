import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import AboutHero from '../components/AboutHero/AboutHero';
import Vision from '../components/Vision';
import Mission from '../components/Mission';
import WhyChooseUs from '../components/WhyChooseUs';

const AboutPage = () => {
    return (
        <Box >
            <AboutHero />
            <Vision />
            <Mission />
            <WhyChooseUs />
        </Box>
    );
};

export default AboutPage;
