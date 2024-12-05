import HeroSection from '@/components/sections/hero-section';
import FeaturesSection from '@/components/sections/features-section';
import DemoSection from '@/components/sections/demo-section';
import BetaSignupSection from '@/components/sections/beta-signup-section';
import InvestorSection from '@/components/sections/investor-section';
import TestimonialsSection from '@/components/sections/testimonials-section';
import FooterSection from '@/components/sections/footer-section';
import { HeroScrollDemo } from '@/components/sections/hero-scroll-section';
import { FeaturesSectionDemo } from '@/components/sections/features-section-demo';
import { GoogleGeminiEffectDemo } from '@/components/sections/gemini-hero-section';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-background/95">
      <HeroScrollDemo />
      {/* <GoogleGeminiEffectDemo /> */}
      {/* <FeaturesSection /> */}
      <FeaturesSectionDemo />
      <DemoSection />
      <BetaSignupSection />
      <InvestorSection />
      <TestimonialsSection />
      <FooterSection />
    </main>
  );
}