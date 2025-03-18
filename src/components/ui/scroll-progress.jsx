import { cn } from '@/lib/utils'
import { motion, useScroll } from 'motion/react'
import React from 'react'

export const ScrollProgress = React.forwardRef(
  ({ className, ...props }, ref) => {
    const { scrollYProgress } = useScroll()

    return (
      <motion.div
        ref={ref}
        className={cn(
          'fixed inset-x-0 z-0 h-px origin-left bg-tertiary',
          className
        )}
        style={{
          scaleX: scrollYProgress,
        }}
        {...props}
      />
    )
  }
)

ScrollProgress.displayName = 'ScrollProgress'
