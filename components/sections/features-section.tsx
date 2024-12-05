'use client';

import { motion } from 'framer-motion';
import { LineChart, Bot, Workflow, Users, TrendingUp } from 'lucide-react';
import { Card } from '@/components/ui/card';

const features = [
  {
    icon: LineChart,
    title: 'Real-Time Tracking',
    description: 'Monitor project progress and team performance as it happens.',
  },
  {
    icon: Bot,
    title: 'AI Automation',
    description: 'Let our AI assistant handle resource allocation and task management.',
  },
  {
    icon: Workflow,
    title: 'Customizable Workflows',
    description: 'Create and modify workflows that match your unique processes.',
  },
  {
    icon: Users,
    title: 'Integrated Marketplace',
    description: 'Find and collaborate with top talent from our curated network.',
  },
  {
    icon: TrendingUp,
    title: 'Scalability',
    description: 'Grow your business with a platform that scales with you.',
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background/95 to-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose LTD?</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Experience the next generation of project management tools designed for modern teams.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-shadow group">
                <feature.icon className="h-12 w-12 mb-4 text-[#D86DFC] group-hover:text-[#6DE1FC] transition-colors" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}