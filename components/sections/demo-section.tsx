'use client';

import { motion } from 'framer-motion';
import { Play, CircuitBoard } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

export default function DemoSection() {
  return (
    <section id="demo-section" className="py-24 px-4 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">See LTD in Action</h2>

          <Dialog>
            <DialogTrigger asChild>
              <Button
                size="lg"
                className="group relative bg-gradient-to-r from-[#d86dfc] to-[#a756c2] hover:from-[#a756c2] hover:to-[#d86dfc] hover:transition-all transition-all"
              >
                <Play className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                Watch Demo Video
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[800px]">
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center p-2">
                <iframe src="https://www.youtube.com/embed/QrvbPccez4s" className="w-full h-full" title="LTD Introduction" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                {/* <p className="text-muted-foreground">Demo video player would be here</p> */}
              </div>
            </DialogContent>
          </Dialog>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="absolute inset-0 pointer-events-none"
        >
          <CircuitBoard className="absolute top-1/4 left-1/4 h-12 w-12 text-[#d86dfc]/20" />
          <CircuitBoard className="absolute bottom-1/4 right-1/4 h-16 w-16 text-[#d86dfc]/20" />
        </motion.div>
      </div>
    </section>
  );
}