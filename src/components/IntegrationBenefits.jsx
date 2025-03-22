import { useState } from 'react'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

export function IntegrationBenefits({
  benefits,
  className,
  title = 'How to get Started',
  autoPlayInterval = 3000,
  imageHeight = 'h-[400px]',
}) {
  const [step, setStep] = useState('Step 1')
  return (
    <div className={cn('', className)}>
      <div className=" mx-auto w-full">
        <div className="text-center mb-10">
          <h2 className="mb-4 sora-heading text-center text-3xl lg:text-5xl font-bold leading-[1.2]">
            Seamless API Integration
          </h2>
          <p className="mx-auto mb-8 text-center text-md font-medium text-foreground/80">
            Our APIs are designed to be developer-friendly, secure, and easy to
            implement—ensuring a hassle-free verification process.
          </p>
        </div>

        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-12">
          <div
            className={cn(
              'order-1 md:order-2 relative overflow-hidden rounded-lg'
            )}
          >
            {benefits.map((feature) => {
              if (feature.step === step) {
                return (
                  <motion.div
                    key={feature.step}
                    className="h-full"
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                  >
                    {feature.terminal}
                  </motion.div>
                )
              }
            })}
          </div>
          <div className="order-2 md:order-1 space-y-2 flex flex-col justify-center">
            {benefits.map((feature, index) => (
              <motion.div
                key={index}
                className={cn(
                  `flex items-start gap-6 md:gap-4 cursor-pointer rounded-md px-6 py-4 relative ${
                    step === feature.step ? 'bg-secondary/5' : ''
                  } `
                )}
                onClick={() => {
                  setStep(feature.step)
                }}
              >
                <motion.div
                  className={cn(
                    'w-8 h-8 md:w-10 md:h-10 flex items-start justify-center'
                  )}
                >
                  <span className={`text-md font-semibold`}>
                    {feature.icon}
                  </span>
                </motion.div>

                <div className="flex-1">
                  <h3
                    className={`max-md:text-sm md:text-xl font-semibold ${
                      step === feature.step ? 'text-secondary' : ''
                    }`}
                  >
                    {feature.title || feature.step}
                  </h3>
                  {step === feature.step && (
                    <p className="max-md:text-sm md:text-lg text-muted-foreground">
                      {feature.content}
                    </p>
                  )}
                </div>
                {step === feature.step && (
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-secondary rounded-md"
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 4, ease: 'easeInOut' }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
