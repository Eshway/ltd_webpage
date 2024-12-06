import { ThemeProvider } from '@/components/theme-provider';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

// export const metadata: Metadata = {
//   title: 'LTD',
//   description: 'Live Tracking Dashboard',
// };
export const metadata: Metadata = {
  title: 'LTD - Empowering Businesses',
  description: 'Live Tracking Dashboard that helps businesses stay on top of their projects with real-time tracking and insights.',
  openGraph: {
    title: 'LTD - Empowering Businesses',
    description: 'Discover the ultimate project management dashboard with live tracking features for real-time business insights.',
    url: 'https://ltd.eshway.com',
    siteName: 'LTD',
    images: [
      {
        url: 'https://ltd.eshway.com/_next/static/media/hero.622d2353.png',
        width: 1200,
        height: 630,
        alt: 'LTD - Live Tracking Dashboard'
      },
    ],
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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
