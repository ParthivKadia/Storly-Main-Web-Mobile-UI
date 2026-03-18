// import BottomBanner from "../sections/BottomBanner";
// import { FaqSection } from "../sections/RegistrationSection";
import AboutSection from "../sections/AboutSection";
import ServiceSection from "../sections/ServiceSection";
import HeroSection from "../sections/HeroSection";
import ContactSection from "../sections/ContactSection";
import PricingSection from "../sections/PricingSection";
import RegistrationSection from "../sections/RegistrationSection";
// import SectionWrapper from "../components/SectionWrapper";
// import TrustedCompanies from "../sections/TrustedCompanies";

export default function Home() {
    return (
        <>
            <HeroSection />
            {/* <TrustedCompanies /> */}
            <AboutSection/>
            <ServiceSection />
            <PricingSection />
            <ContactSection />
            <RegistrationSection />
            {/* <BottomBanner /> */}
        </>
    );
}