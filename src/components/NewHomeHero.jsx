import { ArrowRight, Sparkle, SparklesIcon, Star } from 'lucide-react'
import { AnimatedTooltip } from './ui/animated-tooltip'
import { Badge } from '@/components/ui/badge'
import { motion } from 'framer-motion'
import Wrapper from './Wrapper'
import BoxStroke from '@/assets/boxStroke.png'

const NewHomeHero = ({ businessHero }) => {
  return (
    <div className="py-20 mx-auto w-full overflow-hidden bg-cover bg-center bg-no-repeat bg-[url('@/assets/homeHeroPNG.png')]">
      <Wrapper>
        <div className="w-full flex flex-col gap-8 items-center mx-auto text-center">
          <Badge
            variant="outline"
            className="bg-primary/10 border border-primary/20 text-sm font-medium text-primary flex gap-1 cursor-pointer hover:bg-primary/20"
          >
            <SparklesIcon size={14} /> Start Verfying In Minutes
          </Badge>
          <h2 className="text-5xl xl:text-[82px] xl:leading-[95px] tracking-[-2px] font-bold max-w-[1171px] capitalize">
            Onboard{' '}
            <span className="px-4 text-secondary bg-[url('@/assets/boxStroke.png')] bg-contain bg-no-repeat">
              Verified
            </span>
            <span className="">Customers In Minutes</span>
          </h2>
          <p className="text-balance text-muted-foreground font-medium text-md lg:text-lg relative lg:max-w-[60%]">
            Streamline your verification process with our comprehensive suite of
            API&apos;s. Fast, secure and compliant solutions designed for modern
            enterprises.
          </p>
          <div className=" flex flex-col gap-2 sm:flex-row items-center font-bold">
            <span className="inline-flex items-start -space-x-4">
              <AnimatedTooltip items={businessHero.reviews.avatars} />
            </span>
            <div>
              <p className="text-left font-medium text-muted-foreground italic text-primary">
                We are trusted by fortune {businessHero.reviews.count}+
                companies
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-6 py-4 bg-secondary text-primary-foreground 
                rounded-lg flex items-center justify-center group font-semibold
                hover:bg-primary/90 transition-colors"
            >
              Get API Keys
              <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-6 py-4 rounded-lg
                border border-border bg-background/50
                text-foreground hover:bg-accent/5
                transition-colors font-semibold"
            >
              View Documentation
            </motion.button>
          </div>
        </div>
      </Wrapper>
    </div>
  )
}

export default NewHomeHero
