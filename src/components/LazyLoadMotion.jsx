import { useInView } from 'react-intersection-observer'
import { Card, CardContent } from '@/components/ui/card'
import { motion } from 'framer-motion'

export default function LazyLoadMotion({ children }) {
  const { ref, inView } = useInView({
    triggerOnce: true, // Ensures it loads only once
    threshold: 0.2, // Triggers when 20% is visible
  })

  return (
    <div ref={ref} className="w-full">
      {inView && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {children}
        </motion.div>
      )}
    </div>
  )
}
