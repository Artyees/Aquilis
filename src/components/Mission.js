'use client'

import { Flex, Heading, Image, Stack, Text, useBreakpointValue } from '@chakra-ui/react'

export default function Mission() {
    return (
        <Stack minH={'80vh'} direction={{ base: 'column', md: 'row-reverse' }} spacing={8} p={8}>
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
                                bg: 'blue.400',
                                zIndex: -1,
                            }}>
                            Our Mission
                        </Text>
                        <br />
                        <Text color={'blue.400'} as={'span'}>
                            Driving Excellence
                        </Text>
                    </Heading>
                    <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
                        At Aquilis, our main mission is to be one stop service provider for all your business needs. Whether it be customer centric, admin or business support solutions. We have got you covered while ensuring you feel easy to do with us and have a complete update as well.
                        <br />
                        Our core belief is to empower the young talent while helping the business to create the best working environment for both and let glooming magic happen. Through our efforts, we're not just filling positions; we're cultivating a global community connected by a commitment to growth, fulfillment, and purposeful work.
                    </Text>
                </Stack>
            </Flex>

            {/* Image Section */}
            <Flex flex={1} justifyContent={'center'}>
                <Image
                    alt={'Mission Image'}
                    height={'600px'}
                    objectFit={'cover'}
                    src={
                        'https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTkzN3wwfDF8c2VhcmNofDF8fG1pc3Npb258ZW58MHx8fHwxNjMzMjIxODAw&ixlib=rb-1.2.1&q=80&w=1080'
                    }
                />
            </Flex>
        </Stack>
    )
}
