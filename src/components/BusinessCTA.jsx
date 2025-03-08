import { Button } from '@/components/ui/button'
import { BackgroundBeams } from './ui/background-beam'
import { SparklesText } from './ui/sparkle-text'
import { PulsatingButton } from './ui/pulsating-button'
import { TypingAnimation } from './ui/typing-animation'
import { InteractiveHoverButton } from './ui/interactive-hover'
import { Link } from 'react-router-dom'
import { Ripple } from './ui/Ripple'

const BusinessCTA = ({
  heading = 'Ready to Get Started?',
  description = 'Join thousands of satisfied customers using our platform to build amazing websites.',
  buttons = {
    primary: {
      text: 'GET API KEYS',
      url: '/contact-us',
    },
  },
}) => {
  return (
    <div className="relative flex flex-col items-center justify-center text-center py-14 px-14 overflow-hidden">
      {/* Ripple Background */}
      <div className="absolute inset-0 h-[60vh] max-w-full flex items-center justify-end gap-2 -z-10">
        <Ripple />
      </div>

      {/* Content */}
      <h2 className="text-3xl font-bold mb-4">
        <SparklesText text={heading} className="text-xl font-semibold md:text-5xl" />
      </h2>
      <p className="text-lg mb-6 text-muted-foreground lg:text-md">{description}</p>

      {/* Buttons */}
      <div className="flex space-x-4">
        {buttons.primary && (
          <PulsatingButton className="text-sm font-semibold" asChild>
            <Link to={buttons.primary.url}>{buttons.primary.text}</Link>
          </PulsatingButton>
        )}
        {buttons.secondary && (
          <InteractiveHoverButton variant="outline" className="rounded-md" asChild>
            <a href={buttons.secondary.url}>{buttons.secondary.text}</a>
          </InteractiveHoverButton>
        )}
      </div>
    </div>
  )
}

export { BusinessCTA }
