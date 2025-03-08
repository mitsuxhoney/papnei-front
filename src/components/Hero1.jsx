import { Star } from 'lucide-react'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { AuroraBackground } from './ui/aurora-background'
import { AnimatedTooltip } from './ui/animated-tooltip'
import Wrapper from './Wrapper'
import { Link } from 'react-router-dom'

const Hero1 = ({ businessHero }) => {
  return (
    <section className="text-center relative z-[1] w-full overflow-hidden flex flex-col items-center justify-center">
      <AuroraBackground className="h-full overflow-hidden">
        <Wrapper>
          <div className="w-screen py-24">
            <div className="mx-auto flex max-w-screen-lg flex-col gap-6 ">
              <h1 className="2xl:text-6xl xl:text-5xl text-3xl font-semibold bg-gradient-to-b from-[#edeffd] to-[#7b9cda] bg-clip-text">
                {businessHero.heading}
              </h1>
              <p className="text-balance text-muted-foreground lg:text-lg">
                {businessHero.description}
              </p>
            </div>
            <Button asChild size="lg" className="mt-8 relative">
              <Link to="/contact-us">{businessHero.button.text}</Link>
            </Button>
            <div className="mx-auto mt-10 flex w-fit flex-col items-center gap-4 sm:flex-row">
              <span className="mx-4 inline-flex items-center -space-x-4">
                <AnimatedTooltip items={businessHero.reviews.avatars} />
              </span>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      className="size-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-left font-medium text-muted-foreground">
                  from {businessHero.reviews.count}+ reviews
                </p>
              </div>
            </div>
          </div>
        </Wrapper>
      </AuroraBackground>
    </section>
  )
}

export { Hero1 }
