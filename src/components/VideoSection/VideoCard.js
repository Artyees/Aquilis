import {
    Box,
    Flex,
    useColorModeValue,
    Circle,
    Badge,
} from '@chakra-ui/react';

function VideoCard({ videoSrc, title, isNew }) {
    return (
        <Flex p={6} w="full" alignItems="center" justifyContent="center">
            <Box
                bg={useColorModeValue('white', 'gray.800')}
                maxW="2xl"  // Increased width for a rectangular look
                borderWidth="1px"
                rounded="xl"
                shadow="lg"
                position="relative"
                style={{ borderRadius: '5%' }}

            >

                {isNew && (
                    <Circle size="10px" position="absolute" top={2} right={2} bg="red.200" />
                )}

                {/* Video Section */}
                <Box h={'400px'} borderBottom={'1px'} borderColor="black">
                    <video
                        src={videoSrc}
                        controls
                        style={{
                            objectFit: 'cover',
                            height: '100%',
                            width: '100%',
                            borderRadius: '15px 15px 0 0',
                        }}
                    />
                </Box>

                {/* Text Section */}
                <Box p={6}>
                    <Box display="flex" alignItems="baseline">
                        {isNew && (
                            <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                                Video
                            </Badge>
                        )}
                    </Box>

                    <Flex mt="1" justifyContent="space-between" alignContent="center">
                        <Box
                            fontSize="2xl"
                            fontWeight="semibold"
                            as="h4"
                            lineHeight="tight"
                            isTruncated>
                            {title}
                        </Box>
                    </Flex>
                </Box>
            </Box>
        </Flex>
    );
}

export default VideoCard;
