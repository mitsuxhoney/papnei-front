import { Button } from '@/components/ui/button'
import { BackgroundBeams } from './ui/background-beam'
import { SparklesText } from './ui/sparkle-text'
import { PulsatingButton } from './ui/pulsating-button'
import { TypingAnimation } from './ui/typing-animation'
import { InteractiveHoverButton } from './ui/interactive-hover'
import { Link } from 'react-router-dom'
import { AuroraBackground } from './ui/aurora-background'

const BusinessCTA = ({
  heading = 'Ready to Get Started ?',
  description = 'Join thousands of satisfied customers using our platform to build amazing websites.',
  buttons = {
    primary: {
      text: 'GET API KEYS',
      url: '/contact-us',
    },
  },
}) => {
  return (
    <section className="relative antialiased">
      <AuroraBackground className="h-[30vh] overflow-hidden">
        <div className="w-screen">
          <div className="flex w-full flex-col gap-4 overflow-hidden bg-slate-100 dark:bg-neutral-900 p-8 lg:flex-row lg:justify-between lg:items-center lg:p-16">
            <div className="flex flex-col gap-2">
              {/* <h3 className="text-xl font-semibold md:text-4xl">{heading}</h3> */}
              <SparklesText
                className={`text-xl font-semibold md:text-5xl`}
                text={heading}
              />
              {/* <TypingAnimation>{heading}</TypingAnimation> */}
              <p className="text-muted-foreground lg:text-md">{description}</p>
            </div>
            <div className="flex shrink-0 flex-col gap-4 sm:flex-row">
              {buttons.primary && (
                <PulsatingButton className="text-sm font-semibold" asChild>
                  <Link to="/contact-us">{buttons.primary.text}</Link>
                </PulsatingButton>
              )}
              {/* {buttons.secondary && (
              <InteractiveHoverButton
                variant="outline"
                className="rounded-md"
                asChild
              >
                <a href={buttons.secondary.url}>{buttons.secondary.text}</a>
              </InteractiveHoverButton>
            )} */}
            </div>
          </div>
        </div>
      </AuroraBackground>
    </section>
  )
}

export { BusinessCTA }
