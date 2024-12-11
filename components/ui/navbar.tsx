'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Menu, X, Moon, Sun } from 'lucide-react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
// import logo from '@/components/assets/logo.png'
import white_logo from '@/components/assets/white_logo.png'
import Image from 'next/image';

const navItems = [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Demo', href: '#demo-section' },
    { name: 'Beta', href: '#beta' },
    { name: 'Investors', href: '#investors' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const { scrollY } = useScroll();
    const [scrolled, setScrolled] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
        return scrollY.onChange((latest) => {
            setScrolled(latest > 50);
        });
    }, [scrollY]);

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <motion.nav
            className={`fixed w-full p-2 z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.3 }}
        >
            <div className="max-w-screen mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center">
                            {/* <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600"> */}
                            {/* LTD */}
                            {mounted && theme === 'light' ? (
                                <Image src="/ltd-logo.png" alt="" width={50} height={50} />
                                // <Image src={logo} alt="" width={50} height={50} />
                            ) : (
                                <Image src="/ltd-logo_white.png" alt="" width={50} height={50} />
                                // <Image src={white_logo} alt="" width={50} height={50} />
                            )}
                            {/* </span> */}
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-8">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-foreground/80 hover:text-foreground transition-colors"
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-full hover:bg-foreground/10 transition-colors"
                            >
                                {mounted && theme === 'dark' ? (
                                    <Sun className="h-5 w-5" />
                                ) : (
                                    <Moon className="h-5 w-5" />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Navigation Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-md hover:bg-foreground/10 transition-colors"
                        >
                            {isOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            <motion.div
                className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
                transition={{ duration: 0.2 }}
            >
                <div className="px-2 pt-2 pb-3 space-y-1 bg-background/80 backdrop-blur-lg shadow-lg">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="block px-3 py-2 rounded-md text-foreground/80 hover:text-foreground hover:bg-foreground/10 transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <button
                        onClick={toggleTheme}
                        className="w-full text-left px-3 py-2 rounded-md text-foreground/80 hover:text-foreground hover:bg-foreground/10 transition-colors"
                    >
                        {mounted && theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                    </button>
                </div>
            </motion.div>
        </motion.nav>
    );
}