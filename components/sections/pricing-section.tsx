'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const plans = [
    {
        name: 'Free',
        price: '$0',
        description: 'Perfect for individuals and small teams getting started',
        features: [
            'Up to 5 team members',
            'Basic AI task automation',
            'Basic project tracking',
            'Simple task management',
            'Email support',
            'Basic analytics',
            'Access to freelancer marketplace.',
        ],
        buttonText: 'Get Started',
        popular: false,
    },
    {
        name: 'Professional',
        price: '$7.5',
        description: 'Ideal for growing teams and organizations',
        features: [
            // 'Up to 20 team members',
            'Up to 50 users per workspace.',
            'Advanced AI task automation',
            'AI-powered risk prediction for project delays',
            'AI-enabled team performance analysis and recommendations',
            'Advanced project tracking',
            'AI-powered task automation',
            'Priority support',
            'Advanced analytics',
            'Custom workflows',
            'Integration with popular tools',
            'Access to freelancer marketplace.',
        ],
        buttonText: 'Start Free Trial',
        popular: true,
    },
    {
        name: 'Enterprise',
        price: 'Custom',
        description: 'For large organizations with specific needs',
        features: [
            'Unlimited team members',
            'Advanced AI task automation',
            'AI-powered risk prediction for project delays',
            'AI-enabled team performance analysis and recommendations',
            'Enterprise-grade security',
            'Dedicated account manager',
            '24/7 premium support',
            'Custom AI models',
            'Advanced API access',
            'Custom integrations',
            'On-premise deployment option',
            'Access to freelancer marketplace.',
        ],
        buttonText: 'Contact Sales',
        popular: false,
    },
];

export default function PricingSection() {
    return (
        <section className="py-24 px-4 bg-gradient-to-b from-background to-background/95" id="pricing">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Choose the perfect plan for your team's needs
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                        >
                            <Card className={`p-8 h-full flex flex-col justify-between relative ${plan.popular ? 'border-2 border-purple-500' : ''
                                }`}>
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-500 text-white px-4 py-1 rounded-full text-sm">
                                        Most Popular
                                    </div>
                                )}
                                <div>
                                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                                    <div className="mb-4">
                                        <span className="text-4xl font-bold">{plan.price}</span>
                                        {plan.price !== 'Custom' && <span className="text-muted-foreground"> /user/month</span>}
                                    </div>
                                    <p className="text-muted-foreground mb-6">{plan.description}</p>
                                    <ul className="space-y-3 mb-8">
                                        {plan.features.map((feature) => (
                                            <li key={feature} className="flex items-center">
                                                <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <Button
                                    className={`w-full ${plan.popular
                                        ? 'bg-purple-500 hover:bg-purple-600'
                                        : ''
                                        }`}
                                    variant={plan.popular ? 'default' : 'outline'}
                                >
                                    {plan.buttonText}
                                </Button>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
} 