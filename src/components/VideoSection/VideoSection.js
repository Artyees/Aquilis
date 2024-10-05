// components/Layout.js

import { Flex, Box } from '@chakra-ui/react';
import VideoCard from './VideoCard';
import TextContent from './TextContent';

export default function VideoSection() {
    return (
        <Flex direction={{ base: 'column', md: 'row' }} my={8} justify="space-around" align="center">
            {/* Left Content */}
            <Box flex={1.5} p={3} ml={3}>
                <TextContent />
            </Box>

            {/* Right Video Card */}
            <Box flex={2.5} p={3}>
                <VideoCard
                    videoSrc="Images/Aquilis.mp4" // Replace with your video URL
                    title="How it works?"
                    tag="Video"
                    isNew={true}
                />
            </Box>
        </Flex>
    );
}
