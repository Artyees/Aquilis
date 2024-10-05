import React from 'react';
import { SimpleGrid, Box } from '@chakra-ui/react';
import ServiceCard from './ServiceCard';

const ServiceGrid = () => {
    const servicesData = [
        {
            title: 'Cleric & Admin',
            imageSrc: '/Images/VA2.jpeg', // Replace with the actual image path
            services: [
                'Virtual/administrative assistant',
                'Personal virtual assistant',
                'Data Entry Clerk',
                'Customer support Representative',
                'Ecommerce store management',
            ],
        },
        {
            title: 'Digital Marketing',
            imageSrc: '/Images/DM.jpg', // Replace with the actual image path
            services: [
                'Social media management',
                'Digital marketing',
                'Email marketing specialist',
                'Content writing',
                'SEO and PPC',
            ],
        },
        {
            title: 'Information Technology',
            imageSrc: '/Images/IT.jpeg', // Replace with the actual image path
            services: [
                'Web development (Fullstack)',
                'Web design (UI/UX)',
                'Website and Application Maintenance',
                'Logo Design',
                'Graphic Design',
            ],
        },
    ];

    return (
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} mt={8} justifyContent={'center'}>
            {servicesData.map((service, index) => (
                <Box key={index} display="flex" justifyContent="center">

                    <ServiceCard
                        key={index}
                        title={service.title}
                        imageSrc={service.imageSrc}
                        services={service.services}
                    />
                </Box>
            ))}
        </SimpleGrid>
    );
};

export default ServiceGrid;
