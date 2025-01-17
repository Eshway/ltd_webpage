import { ThemeProvider } from '@/components/theme-provider';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import StructuredData from '@/components/structured-data';
import GoogleAnalytics from '@/components/google-analytics';

const inter = Inter({ subsets: ['latin'] });

// export const metadata: Metadata = {
//   title: 'LTD',
//   description: 'Live Tracking Dashboard',
// };
export const metadata: Metadata = {
  metadataBase: new URL('https://ltd.eshway.com'),
  title: 'LTD - AI-Powered Project Management Platform',
  description: "Transform your project management with LTD's AI-driven platform. Real-time tracking, automated workflows, and intelligent resource allocation for modern teams.",
  keywords: 'project management, AI project management, task tracking, workflow automation, team collaboration, sprint planning, resource allocation',
  openGraph: {
    title: 'LTD - AI-Powered Project Management Platform',
    description: "Transform your project management with LTD's AI-driven platform. Real-time tracking, automated workflows, and intelligent resource allocation for modern teams.",
    url: 'https://ltd.eshway.com',
    siteName: 'LTD',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://ltd.eshway.com/_next/static/media/hero.622d2353.png',
        width: 1200,
        height: 630,
        alt: 'LTD - AI-Powered Project Management Dashboard'
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LTD - AI-Powered Project Management Platform',
    description: "Transform your project management with LTD's AI-driven platform. Real-time tracking, automated workflows, and intelligent resource allocation for modern teams.",
    images: ['https://ltd.eshway.com/_next/static/media/hero.622d2353.png'],
  },
  alternates: {
    canonical: 'https://ltd.eshway.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    other: {
      'google-analytics': 'G-B9Q1YPWKVG'
    }
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <StructuredData />
        <GoogleAnalytics GA_MEASUREMENT_ID="G-B9Q1YPWKVG" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
