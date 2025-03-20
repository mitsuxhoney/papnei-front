// import { ArrowLeft, ArrowRight } from 'lucide-react'
// import { useEffect, useState } from 'react'
// import { Badge } from '@/components/ui/badge'
// import { Button } from '@/components/ui/button'
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
// } from '@/components/ui/eldora-carousel'
// import { Link } from 'react-router-dom'

// const data = [
//   {
//     id: 'shadcn-ui',
//     title: 'shadcn/ui: Building a Modern Component Library',
//     description:
//       'Explore how shadcn/ui revolutionized React component libraries by providing a unique approach to component distribution and customization, making it easier for developers to build beautiful, accessible applications.',
//     href: 'https://ui.shadcn.com',
//     image:
//       'https://images.unsplash.com/photo-1551250928-243dc937c49d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjN8fHx8fHwyfHwxNzIzODA2OTM5fA&ixlib=rb-4.0.3&q=80&w=1080',
//   },
//   {
//     id: 'tailwind',
//     title: 'Tailwind CSS: The Utility-First Revolution',
//     description:
//       'Discover how Tailwind CSS transformed the way developers style their applications, offering a utility-first approach that speeds up development while maintaining complete design flexibility.',
//     href: 'https://tailwindcss.com',
//     image:
//       'https://images.unsplash.com/photo-1551250928-e4a05afaed1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjR8fHx8fHwyfHwxNzIzODA2OTM5fA&ixlib=rb-4.0.3&q=80&w=1080',
//   },
//   {
//     id: 'astro',
//     title: 'Astro: The All-in-One Web Framework',
//     description:
//       "Learn how Astro's innovative 'Islands Architecture' and zero-JS-by-default approach is helping developers build faster websites while maintaining rich interactivity where needed.",
//     href: 'https://astro.build',
//     image:
//       'https://images.unsplash.com/photo-1536735561749-fc87494598cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxNzd8fHx8fHwyfHwxNzIzNjM0NDc0fA&ixlib=rb-4.0.3&q=80&w=1080',
//   },
//   {
//     id: 'react',
//     title: 'React: Pioneering Component-Based UI',
//     description:
//       'See how React continues to shape modern web development with its component-based architecture, enabling developers to build complex user interfaces with reusable, maintainable code.',
//     href: 'https://react.dev',
//     image:
//       'https://images.unsplash.com/photo-1548324215-9133768e4094?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMzF8fHx8fHwyfHwxNzIzNDM1MzA1fA&ixlib=rb-4.0.3&q=80&w=1080',
//   },
//   {
//     id: 'nextjs',
//     title: 'Next.js: The React Framework for Production',
//     description:
//       'Explore how Next.js has become the go-to framework for building full-stack React applications, offering features like server components, file-based routing, and automatic optimization.',
//     href: 'https://nextjs.org',
//     image:
//       'https://images.unsplash.com/photo-1550070881-a5d71eda5800?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjV8fHx8fHwyfHwxNzIzNDM1Mjk4fA&ixlib=rb-4.0.3&q=80&w=1080',
//   },
// ]

// const CaseStudies = ({
//   title = 'Case Studies',
//   description = 'Discover how leading companies and developers are leveraging modern web technologies to build exceptional digital experiences. These case studies showcase real-world applications and success stories.',
//   items = data,
// }) => {
//   const [carouselApi, setCarouselApi] = useState()
//   const [canScrollPrev, setCanScrollPrev] = useState(false)
//   const [canScrollNext, setCanScrollNext] = useState(false)
//   const [currentSlide, setCurrentSlide] = useState(0)

//   useEffect(() => {
//     if (!carouselApi) {
//       return
//     }
//     const updateSelection = () => {
//       setCanScrollPrev(carouselApi.canScrollPrev())
//       setCanScrollNext(carouselApi.canScrollNext())
//       setCurrentSlide(carouselApi.selectedScrollSnap())
//     }
//     updateSelection()
//     carouselApi.on('select', updateSelection)
//     return () => {
//       carouselApi.off('select', updateSelection)
//     }
//   }, [carouselApi])

//   return (
//     <section className="py-10">
//       <div className="mx-auto ">
//         <div className="mb-8 flex items-center justify-center md:mb-14 lg:mb-10">
//           <div className="flex flex-col items-center gap-4 text-center mb-10">
//             <Badge
//               variant="outline"
//               className="bg-primary/10 border border-primary/20 text-xs font-medium text-primary"
//             >
//               Success Stories
//             </Badge>
//             <h1 className="max-w-2xl text-3xl font-semibold md:text-5xl">
//               Case Studies
//             </h1>
//             <p className="text-muted-foreground">
//               Real-world success stories highlighting our impact, expertise, and
//               innovative solutions.
//             </p>
//           </div>
//         </div>
//       </div>
//       <div className="shrink-0 gap-2 flex justify-center -mt-16 mb-6">
//         <Button
//           size="icon"
//           variant="ghost"
//           onClick={() => {
//             carouselApi?.scrollPrev()
//           }}
//           disabled={!canScrollPrev}
//           className="disabled:pointer-events-auto rounded-full"
//         >
//           <ArrowLeft className="size-5" />
//         </Button>
//         <Button
//           size="icon"
//           variant="ghost"
//           onClick={() => {
//             carouselApi?.scrollNext()
//           }}
//           disabled={!canScrollNext}
//           className="disabled:pointer-events-auto rounded-full"
//         >
//           <ArrowRight className="size-5" />
//         </Button>
//       </div>
//       <div className="w-full">
//         <div className="mx-auto ">
//           <Carousel setApi={setCarouselApi}>
//             <CarouselContent className="">
//               {items.map((item) => (
//                 <CarouselItem
//                   key={item.id}
//                   className="max-w-[320px] lg:max-w-[360px] basis-[100%] md:basis-1/3 mx-auto"
//                 >
//                   <Link to={item.href} className="group rounded-xl">
//                     <div className="group relative h-full min-h-[18rem] lg:min-h-[24rem] max-w-full overflow-hidden rounded-xl md:aspect-[5/4] lg:aspect-[16/9]">
//                       <img
//                         src={item.image}
//                         alt={item.title}
//                         className="absolute h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
//                       />
//                       <div className="absolute inset-0 h-full bg-[linear-gradient(hsl(var(--primary)/0),hsl(var(--primary)/0.4),hsl(var(--primary)/0.8)_100%)] mix-blend-multiply" />
//                       <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-6 text-primary-foreground md:p-8">
//                         <div className="mb-2 pt-4 text-xl font-semibold md:mb-3 md:pt-4 lg:pt-4">
//                           {item.title}
//                         </div>
//                         <div className="mb-8 line-clamp-2 md:mb-12 lg:mb-9">
//                           {item.description}
//                         </div>
//                         <div className="flex items-center text-sm">
//                           Read more{' '}
//                           <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
//                         </div>
//                       </div>
//                     </div>
//                   </Link>
//                 </CarouselItem>
//               ))}
//             </CarouselContent>
//           </Carousel>
//         </div>

//         <div className="mt-8 flex justify-center gap-2">
//           {items.map((_, index) => (
//             <button
//               key={index}
//               className={`h-2 w-2 rounded-full transition-colors ${
//                 currentSlide === index ? 'bg-primary' : 'bg-primary/20'
//               }`}
//               onClick={() => carouselApi?.scrollTo(index)}
//               aria-label={`Go to slide ${index + 1}`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// export { CaseStudies }

import { motion } from 'framer-motion'
import {
  Building2,
  Landmark,
  ShieldCheck,
  Briefcase,
  Building,
  Plane,
  ShoppingBag,
  Stethoscope,
  Wallet,
  GraduationCap,
  Truck,
  Home,
} from 'lucide-react'
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useEffect, useState } from 'react'
import { cn } from '../lib/utils'
export function CaseStudies() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    slidesToScroll: 1,
  })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState([])
  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  )
  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])
  useEffect(() => {
    if (!emblaApi) return

    onSelect()
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)

    let autoplay

    const startAutoplay = () => {
      autoplay = setInterval(() => {
        if (emblaApi) {
          emblaApi.scrollNext()
        }
      }, 3000)
    }

    const stopAutoplay = () => {
      clearInterval(autoplay)
    }

    startAutoplay() // Start autoplay initially

    // Add event listeners to pause on hover
    const carouselElement = emblaApi.containerNode()
    carouselElement.addEventListener('mouseenter', stopAutoplay)
    carouselElement.addEventListener('mouseleave', startAutoplay)

    return () => {
      stopAutoplay() // Cleanup
      carouselElement.removeEventListener('mouseenter', stopAutoplay)
      carouselElement.removeEventListener('mouseleave', startAutoplay)
    }
  }, [emblaApi, onSelect])
  const industries = [
    {
      title: (
        <h3 className="text-lg font-semibold text-yellow-500">
          Fintech Startup
        </h3>
      ),
      heading: (
        <p className="text-md font-semibold ">
          Boosted Loan Approvals with Instant KYC
        </p>
      ),
      description: (
        <p className="text-sm  mb-4">
          A fintech startup reduced onboarding time by 60% using Aadhaar-based
          e-KYC verification.{' '}
        </p>
      ),
      image: '/src/assets/case1.png',
      color: 'bg-yellow-500/10',
    },
    {
      title: (
        <h3 className="text-lg font-semibold text-purple-500">
          E-commerce Platform
        </h3>
      ),
      heading: (
        <p className="text-md font-semibold ">
          Prevented Fraudulent Sellers with Business
        </p>
      ),
      description: (
        <p className="text-sm  mb-4">
          An e-commerce giant verified business registrations to eliminate fake
          sellers and ensure trust.
        </p>
      ),
      image: '/src/assets/case2.png',
      color: 'bg-purple-500/10',
    },
    {
      title: (
        <h3 className="text-lg font-semibold text-pink-500">
          Ride-Sharing Company
        </h3>
      ),
      heading: (
        <p className="text-md font-semibold ">
          Enhanced Driver Verification with Identity API
        </p>
      ),
      description: (
        <p className="text-sm  mb-4">
          A mobility startup ensured passenger safety by verifying driver
          backgrounds in real time.
        </p>
      ),
      image: '/src/assets/case3.png',
      color: 'bg-pink-500/10',
    },
    {
      title: (
        <h3 className="text-lg font-semibold text-violet-500">
          Fintech1 Startup
        </h3>
      ),
      heading: (
        <p className="text-md font-semibold ">
          Boosted Loan Approvals with Instant KYC
        </p>
      ),
      description: (
        <p className="text-sm  mb-4">
          A fintech startup reduced onboarding time by 60% using Aadhaar-based
          e-KYC verification.{' '}
        </p>
      ),
      image: '/src/assets/case1.png',
      color: 'bg-violet-500/10',
    },
    {
      title: (
        <h3 className="text-lg font-semibold text-cyan-500">
          E-commerce Platform1
        </h3>
      ),
      heading: (
        <p className="text-md font-semibold ">
          Prevented Fraudulent Sellers with Business
        </p>
      ),
      description: (
        <p className="text-sm  mb-4">
          An e-commerce giant verified business registrations to eliminate fake
          sellers and ensure trust.
        </p>
      ),
      image: '/src/assets/case2.png',
      color: 'bg-cyan-500/10',
    },
    {
      title: (
        <h3 className="text-lg font-semibold text-yellow-500">
          Ride-Sharing Company1
        </h3>
      ),
      heading: (
        <p className="text-md font-semibold ">
          Enhanced Driver Verification with Identity API
        </p>
      ),
      description: (
        <p className="text-sm  mb-4">
          A mobility startup ensured passenger safety by verifying driver
          backgrounds in real time.
        </p>
      ),
      image: '/src/assets/case3.png',
      color: 'bg-yellow-500/10',
    },
    {
      title: (
        <h3 className="text-lg font-semibold text-purple-500">
          Fintech Startup2
        </h3>
      ),
      heading: (
        <p className="text-md font-semibold ">
          Boosted Loan Approvals with Instant KYC
        </p>
      ),
      description: (
        <p className="text-sm  mb-4">
          A fintech startup reduced onboarding time by 60% using Aadhaar-based
          e-KYC verification.{' '}
        </p>
      ),
      image: '/src/assets/case1.png',
      color: 'bg-purple-500/10',
    },
    {
      title: (
        <h3 className="text-lg font-semibold text-violet-500">
          E-commerce Platform2
        </h3>
      ),
      heading: (
        <p className="text-md font-semibold ">
          Prevented Fraudulent Sellers with Business
        </p>
      ),
      description: (
        <p className="text-sm  mb-4">
          An e-commerce giant verified business registrations to eliminate fake
          sellers and ensure trust.
        </p>
      ),
      image: '/src/assets/case2.png',
      color: 'bg-violet-500/10',
    },
    {
      title: (
        <h3 className="text-lg font-semibold text-cyan-500">
          Ride-Sharing Company2
        </h3>
      ),
      heading: (
        <p className="text-md font-semibold ">
          Enhanced Driver Verification with Identity API
        </p>
      ),
      description: (
        <p className="text-sm  mb-4">
          A mobility startup ensured passenger safety by verifying driver
          backgrounds in real time.
        </p>
      ),
      image: '/src/assets/case3.png',
      color: 'bg-cyan-500/10',
    },
    {
      title: (
        <h3 className="text-lg font-semibold text-pink-500">
          Fintech Startup3
        </h3>
      ),
      heading: (
        <p className="text-md font-semibold ">
          Boosted Loan Approvals with Instant KYC
        </p>
      ),
      description: (
        <p className="text-sm  mb-4">
          A fintech startup reduced onboarding time by 60% using Aadhaar-based
          e-KYC verification.{' '}
        </p>
      ),
      image: '/src/assets/case1.png',
      color: 'bg-pink-500/10',
    },
  ]
  return (
    <section className="pb-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10" />
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-4 text-center text-5xl font-bold leading-[1.2]">
              Recent Case Studies
              {/* <div className="inline-block bg-primary rounded-md -rotate-2 p-2">
                <div className="rotate-2 text-white ">Case Studies</div>
              </div>{' '} */}
            </div>
            <p className="mx-auto mb-8 max-w-lg text-center text-lg font-medium text-foreground/80">
              Explore our recent case studies showcasing real-world success
              stories and impactful solutions.
            </p>
          </motion.div>
        </div>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] pl-4"
              >
                <div
                  className={cn(
                    'group overflow-hidden relative rounded-[4px] lg:h-[400px] px-4 py-4 border border-primary-100 transition-all duration-300 hover:shadow-sm h-full',
                    industry.color
                  )}
                >
                  <div className="flex flex-col gap-3 items-start">
                    <div>{industry.title}</div>
                    <div className="text-neutral-600">{industry.heading}</div>
                    <div className="text-foreground/80">
                      {industry.description}
                    </div>
                  </div>
                  <div className="absolute lg:-right-1">
                    <img
                      src={industry.image}
                      className="h-full w-full rounded-md"
                      alt=""
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="flex justify-center gap-2 mt-8">
          {emblaApi &&
            scrollSnaps.length > 0 &&
            scrollSnaps.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === selectedIndex
                    ? 'bg-primary w-6'
                    : 'bg-primary/10 hover:bg-primary/40'
                }`}
                onClick={() => scrollTo(index)}
              />
            ))}
        </div>
      </div>
    </section>
  )
}
