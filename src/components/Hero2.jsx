import { Star } from 'lucide-react'
import { Sparkles } from './ui/layouts-sparkles'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { AnimatedTooltip } from './ui/animated-tooltip'
import Wrapper from './Wrapper'

function Hero2({ businessHero }) {
  return (
    <>
      <main className="w-full overflow-hidden dark:bg-black bg-white">
        <section className=" mx-auto relative z-[1] border-white/10 w-full overflow-hidden">
          {/* <img
            src="https://res.cloudinary.com/dzl9yxixg/image/upload/bg-image_inxjdx.png"
            width={1000}
            height={1000}
            className="w-full h-full absolute top-0 left-0"
            alt="bg-image"
          /> */}

          <Wrapper>
            <div className="w-full flex flex-col items-center py-24 relative z-[5]">
              <div className="mx-auto flex max-w-screen-lg flex-col gap-6 items-center justify-center h-full">
                <h1 className="2xl:text-6xl xl:text-5xl text-xl text-center font-semibold bg-gradient-to-b from-[#edeffd] to-[#7b9cda] bg-clip-text ">
                  {businessHero.heading}
                </h1>
                <p className="text-balance text-muted-foreground lg:text-lg text-center">
                  {businessHero.description}
                </p>
              </div>

              <Button asChild size="lg" className="mt-10">
                <a href={businessHero.button.url}>{businessHero.button.text}</a>
              </Button>

              <div className=" mx-auto mt-10 flex flex-col items-center gap-4 sm:flex-row">
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

            {/* <article className="grid gap-4 text-center relative z-10 py-10 h-full place-content-center">
            <h1 className="2xl:text-6xl xl:text-5xl text-5xl font-semibold bg-gradient-to-b text-primary from-[#edeffd] to-[#7b9cda] bg-clip-text leading-[100%] tracking-tighter">
              Become an Animation Expert <br /> Easily at Our Academy
            </h1>
            <span>
              Our expert-led courses are perfect for all skill levels. Gain{' '}
              <br />
              hands-on experience and create stunning animations <br />{' '}
              effortlessly. Join us today!
            </span>
            <button className="border border-blue-400 w-fit p-2 px-4 rounded-md bg-blue-900/40 hover:bg-blue-900/60  backdrop-blur-2xl mx-auto text-white">
              Take The Course
            </button>
          </article> */}

            <div className="absolute bottom-0 z-[2] h-full w-screen overflow-hidden [mask-image:radial-gradient(closest-side_at_center,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(closest-side_at_bottom_center,#3273ff,transparent_90%)] before:opacity-40 after:absolute">
              <Sparkles
                density={1800}
                speed={1.2}
                color="#48b6ff"
                direction="top"
                className="absolute inset-x-0 bottom-0 h-full w-full z-[-1]"
              />
            </div>
          </Wrapper>
        </section>
      </main>
    </>
  )
}
export default Hero2
