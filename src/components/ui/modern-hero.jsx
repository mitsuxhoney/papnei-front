import { Star } from 'lucide-react'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Boxes } from './background-boxes'
import { cn } from '@/lib/utils'
import { InteractiveGridPattern } from './interactive-grid'

const BusinessHero = ({ businessHero }) => {
  return (
    <section className="py-16 text-center relative z-[1] w-full overflow-hidden bg-white dark:bg-black flex flex-col items-center justify-center">
      <div className="w-full">
        {/* <InteractiveGridPattern
          className={cn('[mask-image:radial-gradient(white,transparent)]')}
          width={20}
          height={20}
          squares={[80, 80]}
          squaresClassName="hover:fill-black "
        /> */}

        <div className="mx-auto flex max-w-screen-lg flex-col gap-6">
          <h1 className="text-3xl font-bold lg:text-6xl">
            {businessHero.heading}
          </h1>
          <p className="text-balance text-muted-foreground lg:text-lg">
            {businessHero.description}
          </p>
        </div>
        <Button asChild size="lg" className="mt-10">
          <a href={businessHero.button.url}>{businessHero.button.text}</a>
        </Button>
        <div className="mx-auto mt-10 flex w-fit flex-col items-center gap-4 sm:flex-row">
          <span className="mx-4 inline-flex items-center -space-x-4">
            {businessHero.reviews.avatars.map((avatar, index) => (
              <Avatar key={index} className="size-14 border">
                <AvatarImage src={avatar.src} alt={avatar.alt} />
              </Avatar>
            ))}
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
    </section>
  )
}

export { BusinessHero }
