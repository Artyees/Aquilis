'use client'

import { Flex, Heading, Image, Stack, Text, useBreakpointValue } from '@chakra-ui/react'

export default function Vision() {
    return (
        <Stack minH={'80vh'} direction={{ base: 'column', md: 'row' }} spacing={8} p={8}>
            {/* Text Section */}
            <Flex p={8} flex={1} align={'center'} justify={'center'}>
                <Stack spacing={6} w={'full'} maxW={'lg'}>
                    <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                        <Text
                            as={'span'}
                            position={'relative'}
                            _after={{
                                content: "''",
                                width: 'full',
                                height: useBreakpointValue({ base: '20%', md: '30%' }),
                                position: 'absolute',
                                bottom: 1,
                                left: 0,
                                bg: 'red.700',
                                zIndex: -1,
                            }}>
                            Our Vision
                        </Text>
                        <br />
                        <Text color={'red.700'} as={'span'}>
                            Shaping the Future
                        </Text>
                    </Heading>
                    <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
                        To be best in business support and provide the best customer centric solution. We help companies to achieve more and become the best performing company in a certain industry. We build a virtual offshore workforce for you to deliver exceptional services through advanced technology and a dedicated team to drive long-term success. </Text>
                </Stack>
            </Flex>

            {/* Image Section */}
            <Flex flex={1} justifyContent={'center'}>
                <Image
                    alt={'Vision Image'}
                    height={'600px'}
                    objectFit={'cover'}
                    src={
                        'Images/mission.jpg'
                    }
                />
            </Flex>
        </Stack>
    )
}
