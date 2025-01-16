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
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'LTD - Live Tracking Dashboard',
  description: 'Track your projects in real time with LTD. Stay on top of every task and manage your teams efficiently.',
  openGraph: {
    title: 'LTD - Live Tracking Dashboard',
    description: 'Track your projects in real time with LTD. Stay on top of every task and manage your teams efficiently.',
    images: ['https://ltd.eshway.com/images/og-image.png'],
  },
  twitter: {
    title: 'LTD - Live Tracking Dashboard',
    description: 'Track your projects in real time with LTD. Stay on top of every task and manage your teams efficiently.',
    images: ['https://ltd.eshway.com/images/twitter-image.png'],
  },
};

export default function Home() {
  return (
    <>
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
    </>
  );
}