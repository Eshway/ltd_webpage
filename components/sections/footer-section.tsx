'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Github, Twitter, Linkedin, MessageCircle, Facebook, Instagram, Mail } from 'lucide-react';

export default function FooterSection() {
  return (
    <footer className="py-16 px-4 bg-background">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#d86dfc] to-blue-600">
              LTD
            </h3>
            <p className="text-muted-foreground">
              Revolutionizing project management with AI-powered solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="space-y-4"
          >
            <h4 className="font-semibold">Product</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</a></li>
              <li><a href="#beta" className="text-muted-foreground hover:text-foreground transition-colors">Beta Program</a></li>
              {/* <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Roadmap</a></li> */}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-4"
          >
            <h4 className="font-semibold">Company</h4>
            <ul className="space-y-2">
              <li><a href="https://eshway.com" target='_blank' className="text-muted-foreground hover:text-foreground transition-colors">About</a></li>
              {/* <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Blog</a></li> */}
              <li><a href="https://eshway.com/contact" target='_blank' className="text-muted-foreground hover:text-foreground transition-colors">Careers</a></li>
              <li><a href="https://eshway.com/contact" target='_blank' className="text-muted-foreground hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="space-y-4"
          >
            <h4 className="font-semibold">Stay Updated</h4>
            <div className="flex space-x-2">
              <form action="https://formspree.io/f/mpwznwwv" method="POST" className="flex space-x-2">
                <Input placeholder="Enter your email" className="bg-background" />
                <Button type="submit">Subscribe</Button>
              </form>
            </div>
            <div className="flex space-x-4 pt-4">
              <a href="https://www.instagram.com/esh_way/" target='_blank' className="text-muted-foreground hover:text-foreground transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/eshway" target='_blank' className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://www.facebook.com/eshway2801" target='_blank' className="text-muted-foreground hover:text-foreground transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="mailto:business@eshway.com" target='_blank' className="text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              {/* <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <MessageCircle className="h-5 w-5" />
              </a> */}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 pt-8 border-t border-border text-center text-sm text-muted-foreground"
        >
          <p>&copy; {new Date().getFullYear()} LTD. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}