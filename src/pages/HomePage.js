import { Box } from "@chakra-ui/react";
import MainFeatureComponent from "../components/MainFeatures/MainFeatureComponent";
import VideoSection from "../components/VideoSection/VideoSection";
import ServiceSection from "../components/ServiceSection/ServiceSection";
import CalendlyEmbed from "../components/Calendly/Calendly";
import RedLineSpacer from "../utils/RedLineSpacer";
import HowItWorks from "../components/ServicePage/HowItWorks";

const HomePage = () => {
    return (
        <Box>
            <MainFeatureComponent />
            <RedLineSpacer />
            <VideoSection />
            <RedLineSpacer />
            <ServiceSection />
            <RedLineSpacer />
            <HowItWorks />
            <RedLineSpacer />
            <CalendlyEmbed />
        </Box>
    );
};

export default HomePage;
