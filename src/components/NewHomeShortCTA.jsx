import { motion } from 'framer-motion'
import { ArrowRight, Zap } from 'lucide-react'
import Wrapper from './Wrapper'
export function ShortCTA() {
  return (
    <section className="py-16 bg-gradient-to-r bg-primary relative overflow-hidden">
      <Wrapper>
        <div className="absolute inset-0 bg-grid-primary-700/[0.05] -z-10" />
        {/* Animated background elements */}
        <div className="absolute inset-0">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-64 w-64 bg-white/5 rounded-full"
              initial={{
                x: -100,
                y: Math.random() * 100,
                scale: 0.8,
                opacity: 0.3,
              }}
              animate={{
                x: '120%',
                rotate: 360,
                scale: [0.8, 1.2, 0.8],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                delay: i * 5,
                ease: 'linear',
              }}
            />
          ))}
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1 text-center md:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center justify-center md:justify-start gap-2 mb-4"
              >
                <Zap className="h-5 w-5 text-[#E0E7FF]" />
                <span className="text-[#E0E7FF] font-regular">
                  Ready to get started?
                </span>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-2xl md:text-3xl font-bold text-white mb-2"
              >
                Start verifying in minutes
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="font-regular text-[#E0E7FF]"
              >
                No credit card required. Free trial available.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 bg-white text-primary rounded-lg hover:bg-primary-50 transition-colors flex items-center justify-center group font-bold"
              >
                GET API KEYS
                <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <button className="px-8 py-3 border border-white/20 text-white rounded-lg hover:bg-white/10 transition-colors">
                Contact Us
              </button>
            </motion.div>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}
