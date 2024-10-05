import React from 'react'
import ServiceTabs from '../components/ServicePage/ServiceTabs'
import ServiceHero from '../components/ServicePage/ServiceHero'
import HowItWorks from '../components/ServicePage/HowItWorks'

const ServicesPage = () => {
    return (
        <div>
            <ServiceHero />
            <ServiceTabs />
            <HowItWorks />
        </div>
    )
}

export default ServicesPage
