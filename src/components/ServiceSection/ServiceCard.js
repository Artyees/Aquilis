// components/ServiceCard.js

import React, { useState } from 'react';
import { Box, Heading, Text, Image, Flex, HStack, useColorModeValue } from '@chakra-ui/react';
import { BsArrowUpRight, BsHeartFill, BsHeart } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const ServiceCard = ({ title, imageSrc, services }) => {
    const [liked, setLiked] = useState(false);
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return (
        <Box
            w="xs"
            rounded={'sm'}
            my={5}
            mx={[0, 5]}
            overflow={'hidden'}
            bg="white"
            border={'1px'}
            borderColor="black"
            boxShadow={useColorModeValue('6px 6px 0 black', '6px 6px 0 cyan')}
        >
            {/* Image Section */}
            <Box h={'200px'} borderBottom={'1px'} borderColor="black">
                <Image
                    src={imageSrc}
                    alt={`${title} Image`}
                    roundedTop={'sm'}
                    // objectFit="cover"
                    h="full"
                    w="full"
                />
            </Box>

            {/* Text Section */}
            <Box p={4}>
                <Box bg="black" display={'inline-block'} px={2} py={1} color="white" mb={2}>
                    <Text fontSize={'xs'} fontWeight="medium">
                        {title}
                    </Text>
                </Box>
                <Heading color={'black'} fontSize={'2xl'} noOfLines={1} lineHeight={'normal'} mb={5}>
                    {title}
                </Heading>
                <Text color={'gray.500'} noOfLines={5} textAlign="left">
                    {services.map((service, index) => (
                        <Text key={index}>• {service}</Text>
                    ))}
                </Text>
            </Box>

            {/* Bottom Section with "View more" and Like Button */}
            <HStack borderTop={'1px'} color="black">
                <Flex
                    p={4}
                    alignItems="center"
                    justifyContent={'space-between'}
                    roundedBottom={'sm'}
                    cursor={'pointer'}
                    w="full"
                >
                    <Text fontSize={'md'} fontWeight={'semibold'} onClick={() => { handleNavigate('/services') }}>
                        View more
                    </Text>
                    <BsArrowUpRight onClick={() => { navigate('/services') }} />
                </Flex>
                <Flex
                    p={4}
                    alignItems="center"
                    justifyContent={'space-between'}
                    roundedBottom={'sm'}
                    borderLeft={'1px'}
                    cursor="pointer"
                    onClick={() => setLiked(!liked)}
                >
                    {liked ? (
                        <BsHeartFill fill="red" fontSize={'24px'} />
                    ) : (
                        <BsHeart fontSize={'24px'} />
                    )}
                </Flex>
            </HStack>
        </Box>
    );
};

export default ServiceCard;
