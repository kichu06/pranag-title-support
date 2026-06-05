import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import StatsSection from '@/components/sections/StatsSection';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import WhyChooseUsSection from '@/components/sections/WhyChooseUsSection';
import CoverageSection from '@/components/sections/CoverageSection';
import PartnershipsSection from '@/components/sections/PartnershipsSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <CoverageSection />
      <PartnershipsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}