'use client'

import { Stack, Flex, Button, Text, VStack, useBreakpointValue } from '@chakra-ui/react'

export default function AboutHero() {
    return (
        <Flex
            w={'full'}
            h={'70vh'}
            backgroundImage={
                '/Images/About.png'
            }
            backgroundSize={'cover'}
            backgroundPosition={'center'}
            backgroundRepeat="no-repeat"        >
        </Flex>
    )
}