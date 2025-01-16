'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Globe2 } from 'lucide-react';

const metrics = [
  { label: 'Faster Workflows', value: '80%' },
  { label: 'Higher Turnover', value: '76%' },
  { label: 'ROI Increase', value: '3.5x' },
  { label: 'Time Saved', value: '20hrs/week' },
];

export default function InvestorSection() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background/95 to-background relative overflow-hidden" id="investors">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 0.1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute right-0 top-1/2 -translate-y-1/2"
      >
        <Globe2 className="w-96 h-96 text-purple-600" />
      </motion.div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Investors Are Excited About LTD
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our platform is revolutionizing project management with proven results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Card className="p-6 text-center h-full bg-card/50 backdrop-blur-sm">
                <motion.p
                  className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#d86dfc] to-[#d86dfc]/50"
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
                >
                  {metric.value}
                </motion.p>
                <p className="text-muted-foreground mt-2">{metric.label}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}