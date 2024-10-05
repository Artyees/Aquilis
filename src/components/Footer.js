import {
    Box,
    VStack,
    HStack,
    Link,
    Text,
    SimpleGrid,
    Stack,
    Image,
} from '@chakra-ui/react'
import {
    FaFacebook,
    FaTwitter,
    FaLinkedin,
    FaInstagram,
    FaYoutube,
    FaTiktok,
} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
    const navigate = useNavigate()

    const handleNavigation = (path) => {
        if (path === 'contact') {
            navigate('/')
            setTimeout(() => {
                document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
            }, 300) // Delay to ensure the homepage is loaded before scrolling
        } else {
            navigate(path)
        }
    }

    return (
        <Box bg="white" color="black" py={10} borderTop="2px solid" borderColor="red.700">
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} textAlign="center">
                {/* Logo and Branding */}
                <Stack alignItems="center" cursor="pointer" onClick={() => navigate('/')}>
                    <Image src="/Images/Logo.png" alt="Aqualis Logo" width="200px" />
                    <Text fontSize="sm" mt={4}>
                        © 2024 AQUILIS. All rights reserved.
                    </Text>
                </Stack>

                {/* Contact Information */}
                <VStack alignItems="center">
                    <Text fontSize="xl" fontWeight="bold">Contact Us</Text>
                    <Text>Call Us Now: <Link href="tel:+923153155645" color="red.600">(+92) 315 315 545</Link></Text>
                    <Text>
                        Business Inquiries:{' '}
                        <Link href="mailto:getinfo@aqualis.co" color="red.600">getinfo@aquilis.co</Link>
                    </Text>
                    <Text>
                        Client Support:{' '}
                        <Link href="mailto:support@aqualis.co" color="red.600">support@aquilis.co</Link>
                    </Text>
                </VStack>

                {/* Resources */}
                <VStack alignItems="center">
                    <Text fontSize="xl" fontWeight="bold">Resources</Text>
                    <Text
                        onClick={() => handleNavigation('/about')}
                        color="red.600"
                        cursor="pointer"
                    >
                        About Us
                    </Text>
                    <Text
                        onClick={() => handleNavigation('/services')}
                        color="red.600"
                        cursor="pointer"
                    >
                        Services
                    </Text>
                    <Text
                        onClick={() => handleNavigation('contact')}
                        color="red.600"
                        cursor="pointer"
                    >
                        Contact Us
                    </Text>
                </VStack>
            </SimpleGrid>

            {/* Social Media Icons */}
            <HStack spacing={6} mt={6} justify="center">
                <Link href="https://x.com/aquilisco" isExternal>
                    <FaTwitter size={24} />
                </Link>
                <Link href="https://www.instagram.com/aquilisco/" isExternal>
                    <FaInstagram size={24} />
                </Link>
                <Link href="https://www.tiktok.com/@aquilisco?is_from_webapp=1&sender_device=pc" isExternal>
                    <FaTiktok size={24} />
                </Link>
            </HStack>
        </Box>
    )
}

export default Footer
