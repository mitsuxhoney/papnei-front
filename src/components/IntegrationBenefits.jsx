import { useState } from 'react'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { TerminalDemo } from './TerminalDemo'

export function IntegrationBenefits({
  benefits,
  className,
  title = 'How to get Started',
  autoPlayInterval = 3000,
  imageHeight = 'h-[400px]',
}) {
  return (
    <div className={cn('', className)}>
      <div className=" mx-auto w-full">
        <div className="flex flex-col items-center gap-4 text-center mb-10">
          <Badge variant="outline">How it works ?</Badge>
          <h1 className="max-w-2xl text-3xl font-semibold md:text-4xl">
            Seamless API Integration
          </h1>
          <p className="text-muted-foreground">
            Our APIs are designed to be developer-friendly, secure, and easy to
            implement—ensuring a hassle-free verification process.
          </p>
        </div>

        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-12">
          <div
            className={cn(
              'order-1 md:order-2 relative lg:h-[370px] overflow-hidden rounded-lg'
            )}
          >
            <TerminalDemo />
          </div>
          <div className="order-2 md:order-1 space-y-8 flex flex-col justify-center">
            {benefits.map((feature, index) => (
              <motion.div
                key={index}
                className={cn(
                  'flex items-center gap-6 md:gap-8 cursor-pointer'
                )}
              >
                <motion.div
                  className={cn(
                    'w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center border-2 bg-primary border-primary text-primary-foreground'
                  )}
                >
                  <span className="text-lg font-bold">✓</span>
                </motion.div>

                <div className="flex-1">
                  <h3 className="max-md:text-xs md:text-2xl font-semibold">
                    {feature.title || feature.step}
                  </h3>
                  <p className="max-md:text-sm md:text-lg text-muted-foreground">
                    {feature.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
