import { motion, useInView } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Sparkles } from './ui/layouts-sparkles'

const Hero3 = () => {
  const ref = React.useRef(null)
  const isInView = useInView(ref)

  const FADE_DOWN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { type: 'spring' } },
  }
  return (
    <div className="relative py-24">
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="py-12 sm:py-0">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial="hidden"
            ref={ref}
            animate={isInView ? 'show' : 'hidden'}
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            <motion.h1
              variants={FADE_DOWN_ANIMATION_VARIANTS}
              className="text-4xl font-bold tracking-tight sm:text-6xl"
            >
              Beautiful Framer Motion Animations
            </motion.h1>
            <motion.p
              variants={FADE_DOWN_ANIMATION_VARIANTS}
              className="mt-6 text-lg leading-8"
            >
              A collection of handmade, free, and ready to use animations &
              variants for your next project.
            </motion.p>

            <motion.div
              variants={FADE_DOWN_ANIMATION_VARIANTS}
              className="mt-10 flex items-center justify-center gap-x-6 "
            >
              <Link href="/contact-us" className="">
                <Button>Get API Keys</Button>
              </Link>

              {/* <Link href="/usage" className="z-50">
            <Button variant="outline">
              Learn more &nbsp;<span aria-hidden="true">→</span>
            </Button>
          </Link> */}
            </motion.div>
          </motion.div>
        </div>
      </div>
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div>
  )
}

export default Hero3
