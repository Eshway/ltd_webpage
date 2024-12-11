'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const testimonials = [
  {
    name: 'Neelu Koli',
    role: 'Project Manager at N.K Associates',
    // image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&auto=format&fit=crop&q=60',
    image: 'https://media.licdn.com/dms/image/v2/D4E35AQEbMAxH-W8tOg/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1627731262144?e=1734008400&v=beta&t=GF8Sv05T-IWkavEIZy4LgWfAxIijhLpWQSr6Qvj6bcc',
    content: 'We’re excited about LTD’s potential to revolutionize how we manage projects. The promise of real-time tracking and intelligent automation could drastically improve how we allocate resources and ensure timely project delivery.',
  },
  {
    name: 'Abhinav Srivastava',
    role: 'Business Analyst at Patient Billing Ltd',
    image: 'https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png',
    content: "I am excited to see LTD spread its wings. The most important aspect of the tool that I am thrilled about is the integration of AI and ML in decision making and backlog item selection. The clean UI interface and easy functionality will definitely intrigue existing and aspiring project management professionals to streamline their new and existing agile projects.",
  },
  {
    name: 'Emily Rodriguez',
    role: 'CEO at StartupX',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&auto=format&fit=crop&q=60',
    content: 'After seeing the prototype of LTD, we’re confident it will be a game-changer for our project management needs. The seamless integration of real-time tracking and task automation is exactly what our fast-paced startup needs to stay ahead.',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background to-background/95">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Industry Leaders Are Saying
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover how LTD is helping companies transform their project management.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Card className="p-6 h-full bg-card/50 backdrop-blur-sm">
                <div className="flex items-center mb-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="ml-4">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-muted-foreground">{testimonial.content}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}