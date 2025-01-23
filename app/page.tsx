'use client'
import BetaSignupSection from '@/components/sections/beta-signup-section';
import BrandsSection from '@/components/sections/brands-section';
import { HeroVideoDialogDemo } from '@/components/sections/demo-video-section';
import { FeaturesSectionDemo } from '@/components/sections/features-section-demo';
import FooterSection from '@/components/sections/footer-section';
import { HeroScrollDemo } from '@/components/sections/hero-scroll-section';
import InvestorSection from '@/components/sections/investor-section';
import PricingSection from '@/components/sections/pricing-section';
import { SafariSection } from '@/components/sections/safari-section';
import TestimonialsSection from '@/components/sections/testimonials-section';
import { ReactLenis, useLenis } from 'lenis/react'


export default function Home() {
  const lenis = useLenis();
  return (
    <ReactLenis root
      options={{
        duration: 1.2,
        touchMultiplier: 2,
        infinite: false,
      }}
    >
      <main className="min-h-screen bg-gradient-to-b from-background to-background/95">
        <HeroScrollDemo />
        {/* <GoogleGeminiEffectDemo /> */}
        {/* <FeaturesSection /> */}
        <FeaturesSectionDemo />
        <SafariSection />
        <HeroVideoDialogDemo />
        <TestimonialsSection />
        <InvestorSection />
        <BrandsSection />
        <PricingSection />
        {/* <DemoSection /> */}
        <BetaSignupSection />
        <FooterSection />
      </main>
    </ReactLenis>
  );
}