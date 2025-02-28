'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { useState } from 'react';

export default function BetaSignupSection() {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setIsValid(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value));
  };

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background to-background/95" id="beta">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Be the First to Experience LTD!</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Sign up now to join the exclusive beta and shape the future of project management.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="max-w-md mx-auto"
        >
          <div className="w-full justify-center flex p-4 pt-0">
            <a
              href="https://ltd-app.vercel.app/signup"
              className="w-full"
            >
              <button
                className="hover:scale-105 transition-all relative w-full inline-flex h-10 overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-150 px-7 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                  Beta is LIVE &nbsp;
                  <span className="animate-ping">
                    🔴
                  </span>
                </span>
              </button>
            </a>
          </div>
          <Card className="p-6 backdrop-blur-sm bg-card/50 border-2 border-purple-500/20">
            <form action="https://formspree.io/f/mpwznwwv" method="POST" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <div className="relative">
                  <Input
                    name="email"
                    id="email"
                    type="email"
                    placeholder="you@company.com"
                    value={email}
                    onChange={handleEmailChange}
                    className="pr-10"
                  />
                  {email && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className={`absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 rounded-full ${isValid ? 'bg-green-500' : 'bg-red-500'
                        }`}
                    />
                  )}
                </div>
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-[#d86dfc] to-[#a756c2] hover:from-[#d86dfc]/50 hover:to-[#a756c2]/50 text-white"
              >
                Join Beta Newsletter
              </Button>
            </form>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}