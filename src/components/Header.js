'use client'

import {
    Box,
    Flex,
    Text,
    IconButton,
    Stack,
    Collapse,
    useColorModeValue,
    useDisclosure,
    Image,
    Heading,
} from '@chakra-ui/react'
import {
    HamburgerIcon,
    CloseIcon,
} from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom'

export default function Header() {
    const { isOpen, onToggle } = useDisclosure()
    const navigate = useNavigate() // Initialize useNavigate

    const handleNavigation = (path) => {
        if (path === 'contact') {
            navigate('/') // Navigate to the homepage first
            setTimeout(() => {
                document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
            }, 300) // Delay for scroll to ensure the homepage is loaded
        } else {
            navigate(path)
        }
    }

    return (
        <Box>
            <Flex
                bg={useColorModeValue('white', 'gray.800')}
                color={useColorModeValue('gray.600', 'white')}
                minH={'80px'} // Adjusting height to accommodate bigger logo
                py={{ base: 2 }}
                px={{ base: 4 }}
                borderBottom={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.900')}
                align={'center'}
                justify={'space-between'} // To separate logo and nav items
            >
                {/* Logo Section */}
                <Flex flex={{ base: 1 }} justify={{ base: 'start' }} cursor="pointer" >

                    <Image
                        src={'/Images/Logo.png'}
                        alt="Logo"
                        h={{ base: 12, md: 20 }}
                        cursor="pointer" // Set cursor as pointer for logo click
                        onClick={() => navigate('/')}
                    />
                </Flex>

                {/* Hamburger Menu Icon for Mobile */}
                <Flex
                    flex={{ base: 1, md: 'auto' }}
                    ml={{ base: -2 }}
                    display={{ base: 'flex', md: 'none' }}
                >
                    <IconButton
                        onClick={onToggle}
                        icon={
                            isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={6} h={6} />
                        }
                        variant={'ghost'}
                        aria-label={'Toggle Navigation'}
                    />
                </Flex>

                {/* Desktop Navigation Links */}
                <Flex
                    flex={{ base: 1 }}
                    justify={{ base: 'center', md: 'end' }}
                    display={{ base: 'none', md: 'flex' }}
                >
                    <DesktopNav onNavigate={handleNavigation} />
                </Flex>
            </Flex>

            {/* Mobile Menu */}
            <Collapse in={isOpen} animateOpacity>
                <MobileNav onNavigate={handleNavigation} />
            </Collapse>
        </Box>
    )
}

const DesktopNav = ({ onNavigate }) => {
    const linkColor = useColorModeValue('gray.600', 'gray.200')
    const linkHoverColor = useColorModeValue('gray.800', 'white')

    return (
        <Stack direction={'row'} spacing={8} align="center">
            {NAV_ITEMS.map((navItem) => (
                <Box key={navItem.label}>
                    <Text
                        as="button" // Use button to handle click
                        onClick={() => onNavigate(navItem.path)}
                        p={2}
                        fontSize={{ base: 'lg', md: 'xl' }}
                        fontWeight={600}
                        color={linkColor}
                        _hover={{
                            textDecoration: 'none',
                            color: linkHoverColor,
                        }}
                    >
                        {navItem.label}
                    </Text>
                </Box>
            ))}
        </Stack>
    )
}

const MobileNav = ({ onNavigate }) => {
    return (
        <Stack bg={useColorModeValue('white', 'gray.800')} p={4} display={{ md: 'none' }}>
            {NAV_ITEMS.map((navItem) => (
                <MobileNavItem key={navItem.label} {...navItem} onNavigate={onNavigate} />
            ))}
        </Stack>
    )
}

const MobileNavItem = ({ label, path, onNavigate }) => {
    return (
        <Box
            py={2}
            as="button"
            onClick={() => onNavigate(path)}
            justifyContent="space-between"
            alignItems="center"
            _hover={{
                textDecoration: 'none',
            }}
        >
            <Text fontWeight={600} color={useColorModeValue('gray.600', 'gray.200')}>
                {label}
            </Text>
        </Box>
    )
}

const NAV_ITEMS = [
    {
        label: 'Services',
        path: '/services',
    },
    {
        label: 'About Us',
        path: '/about',
    },
    {
        label: 'Contact Us',
        path: 'contact',
    },
]
