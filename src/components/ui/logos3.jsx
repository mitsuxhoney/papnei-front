// This template requires the Embla Auto Scroll plugin to be installed:
// npm install embla-carousel-auto-scroll

import AutoScroll from 'embla-carousel-auto-scroll'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/eldora-carousel'

const Logos3 = ({
  heading = '',
  logos = [
    {
      id: 'logo-1',
      description: 'Logo 1',
      image: 'https://shadcnblocks.com/images/block/logos/astro.svg',
      className: 'h-7 w-full',
    },
    {
      id: 'logo-2',
      description: 'Logo 2',
      image: 'https://shadcnblocks.com/images/block/logos/figma.svg',
      className: 'h-7 w-full',
    },
    {
      id: 'logo-3',
      description: 'Logo 3',
      image: 'https://shadcnblocks.com/images/block/logos/nextjs.svg',
      className: 'h-7 w-full',
    },
    {
      id: 'logo-4',
      description: 'Logo 4',
      image: 'https://shadcnblocks.com/images/block/logos/react.png',
      className: 'h-7 w-full',
    },
    {
      id: 'logo-5',
      description: 'Logo 5',
      image: 'https://shadcnblocks.com/images/block/logos/shadcn-ui.svg',
      className: 'h-7 w-full',
    },
    {
      id: 'logo-6',
      description: 'Logo 6',
      image: 'https://shadcnblocks.com/images/block/logos/supabase.svg',
      className: 'h-7 w-full',
    },
    {
      id: 'logo-7',
      description: 'Logo 7',
      image: 'https://shadcnblocks.com/images/block/logos/tailwind.svg',
      className: 'h-4 w-full',
    },
    {
      id: 'logo-8',
      description: 'Logo 8',
      image: 'https://shadcnblocks.com/images/block/logos/vercel.svg',
      className: 'h-7 w-full',
    },
  ],
}) => {
  return (
    <section className="w-full">
      {/* <div className="container flex flex-col items-center text-center">
        <h1 className="my-6 text-pretty text-2xl font-bold lg:text-4xl">
          {heading}
        </h1>
      </div> */}

      <div className="relative flex items-center justify-center xl:max-w-[2160px] xl:mx-auto">
        <Carousel
          opts={{ loop: true }}
          plugins={[AutoScroll({ playOnInit: true })]}
          className="w-full "
        >
          <CarouselContent className="flex gap-2">
            {logos.map((logo) => (
              <CarouselItem
                key={logo.id}
                className="flex justify-center max-sm:basis-1/2 max-sm:md:basis-1/3 basis-1/3 lg:basis-1/5"
              >
                <div className="flex items-center justify-center">
                  <div>
                    <img
                      src={logo.image}
                      alt={logo.description}
                      className={`${logo.className}`}
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background to-transparent"></div>
        <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background to-transparent"></div>
      </div>
    </section>
  )
}

export { Logos3 }
