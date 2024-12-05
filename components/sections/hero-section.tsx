'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Play, Bot } from 'lucide-react';
import { useCallback } from 'react';

export default function HeroSection() {
  const handleDemoClick = useCallback(() => {
    const demoSection = document.getElementById('demo-section');
    demoSection?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:40px_40px] [mask-image:radial-gradient(white,transparent_85%)]" />
      </div>

      <div className="container relative z-10 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
            Revolutionizing Project Management with AI
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            The ultimate platform for tracking, automating, and scaling your business—all in real time.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
              Join the Beta Waitlist
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={handleDemoClick}
              className="group"
            >
              <Play className="mr-2 h-4 w-4 group-hover:text-purple-600 transition-colors" />
              Watch Demo
            </Button>
          </div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-12"
          >
            <Bot className="h-16 w-16 mx-auto text-purple-600 animate-bounce" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}