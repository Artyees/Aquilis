'use client'

import { Stack, Flex, Button, Text, VStack, useBreakpointValue, Box } from '@chakra-ui/react'

export default function ServiceHero() {
    return (
        <Flex
            w={'full'}
            h={'60vh'}
            backgroundImage={
                '/Images/OurServices.jpeg'
            }
            backgroundSize={'contain'}
            backgroundRepeat="no-repeat"
            backgroundPosition={'center'}
        >
            <VStack
                w={'full'}
                justify={'center'}
                px={useBreakpointValue({ base: 4, md: 8 })}
                bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
                <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
                    {/* <Box
                        border="3px solid white"
                        p={4}
                        borderRadius="md"
                        textAlign="center"
                    >
                        <Text
                            color={'white'}
                            fontWeight={700}
                            lineHeight={1.2}
                            textAlign={'center'}
                            fontSize={useBreakpointValue({ base: '4xl', md: '5xl' })}
                        >

                            Our Services
                        </Text>
                    </Box> */}
                </Stack>
            </VStack>
        </Flex>
    )
}