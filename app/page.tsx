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
import Head from 'next/head';
import StructuredData from '@/components/structured-data';

export default function Home() {
  return (
    <>
      <Head>
        <StructuredData />
        <title>LTD - Live Tracking Dashboard</title>
        <meta name="description" content="Track your projects in real time with LTD. Stay on top of every task and manage your teams efficiently." />
        <meta property="og:title" content="LTD - Live Tracking Dashboard" />
        <meta property="og:description" content="Track your projects in real time with LTD. Stay on top of every task and manage your teams efficiently." />
        <meta property="og:image" content="https://ltd.eshway.com/images/og-image.png" />
        <meta name="twitter:title" content="LTD - Live Tracking Dashboard" />
        <meta name="twitter:description" content="Track your projects in real time with LTD. Stay on top of every task and manage your teams efficiently." />
        <meta name="twitter:image" content="https://ltd.eshway.com/images/twitter-image.png" />
      </Head>
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
    </>
  );
}