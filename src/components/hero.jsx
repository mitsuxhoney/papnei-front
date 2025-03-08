import { motion } from 'framer-motion'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Link } from 'react-router-dom'
import HeroBadge from '@/components/ui/hero-badge'
import { TiltedScroll } from './ui/tilted-scroll'
import { Cover } from './ui/cover'
import { AnimatedBeamDemo } from './ui/animated-beam-hero'
import LazyLoadMotion from './LazyLoadMotion'

const ease = [0.16, 1, 0.3, 1]

function HeroContent({
  title,
  titleHighlight,
  description,
  primaryAction,
  secondaryAction,
}) {
  return (
    <div className="flex flex-col space-y-4">
      <motion.h1
        className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease }}
      >
        {title}{' '}
        {titleHighlight && (
          // <Cover>
          // className="bg-clip-text text- text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white"
          <span>{titleHighlight}</span>
          // </Cover>
        )}
      </motion.h1>
      <motion.p
        className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-7"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.8, ease }}
      >
        {description}
      </motion.p>
      <motion.div
        className="flex flex-col sm:flex-row gap-4 pt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8, ease }}
      >
        {primaryAction && (
          <Link
            to="/contact-us"
            className={cn(
              buttonVariants({ size: 'lg' }),
              'gap-2 w-full sm:w-auto justify-center'
            )}
          >
            {primaryAction.icon}
            {primaryAction.text}
          </Link>
        )}
        {/* {secondaryAction && (
          <Link
            path={secondaryAction.href}
            className={cn(
              buttonVariants({ variant: 'outline', size: 'lg' }),
              'gap-2 w-full sm:w-auto justify-center'
            )}
          >
            {secondaryAction.icon}
            {secondaryAction.text}
          </Link>
        )} */}
      </motion.div>
    </div>
  )
}

const Hero = ({ pill, content, preview, background = undefined }) => {
  return (
    <div className="relative overflow-hidden mx-auto">
      <div className="py-10 flex flex-col gap-20 lg:flex-row lg:gap-14 justify-between items-center xl:max-w-[2160px] xl:mx-auto">
        {background}
        <div className="flex flex-col gap-4 w-full lg:max-w-2xl lg:w-[60%]">
          {pill && <HeroBadge {...pill} />}
          <HeroContent {...content} />
        </div>
        <div className="lg:w-[40%] w-full flex justify-end">
          <LazyLoadMotion>{preview}</LazyLoadMotion>
        </div>
      </div>
    </div>
  )
}

export { Hero }
