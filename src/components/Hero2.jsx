import { Star } from 'lucide-react'
import { Sparkles } from './ui/layouts-sparkles'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { AnimatedTooltip } from './ui/animated-tooltip'
import Wrapper from './Wrapper'
import { InteractiveGridPattern } from './ui/interactive-grid'
import { cn } from '../lib/utils'
import { DotPattern } from "@/components/ui/dot-pattern";
import { Tiles } from '@/components/ui/tiles'
function Hero2({ businessHero }) {
  return (
    <>
      <main className="w-full overflow-hidden dark:bg-black bg-white relative">
        {/* Full-Height Dot Pattern */}
        <DotPattern
          cy={2}
          cr={2}
          cx={2}
          className={cn(
            "absolute inset-0 h-full w-full opacity-40",
            "[mask-image:radial-gradient(1000px_circle_at_center,white,transparent)]"
          )}
        />

        <section className="mx-auto relative z-10 border-white/10 w-full overflow-hidden">
          <Wrapper>
            <div className="w-full flex flex-col items-center py-24 relative z-20">
              {/* Hero Content */}
              <div className="relative flex flex-col items-center text-center">
                <h1 className="2xl:text-6xl xl:text-5xl text-xl font-semibold bg-gradient-to-b from-[#edeffd] to-[#7b9cda] bg-clip-text relative">
                  {businessHero.heading}
                </h1>

                <p className="text-balance text-muted-foreground pt-4 lg:text-lg relative">
                  {businessHero.description}
                </p>

                <Button asChild size="lg" className="mt-8 relative">
                  <a href={businessHero.button.url}>{businessHero.button.text}</a>
                </Button>
              </div>

              {/* Reviews Section */}
              <div className="mx-auto mt-10 flex flex-col items-center gap-4 sm:flex-row">
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
        </section>
      </main>
    </>
  )
}
export default Hero2



