import HeroDemo from '../../components/HeroDemo'
import { FaReact } from 'react-icons/fa'
import { SiNextdotjs, SiFramer } from 'react-icons/si'
import { Logos3 } from '../../components/ui/logos3'

import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid'

import { useTheme } from '@/components/theme-provider'

import { TestimonialsSection } from '@/components/ui/testimonials-with-marquee'
// import Squares from '@/components/ui/Squares'
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from '@tabler/icons-react'
import { Layout, Pointer, Zap } from 'lucide-react'
import { Feature108 } from '@/components/ui/features'
import { FeaturesSectionWithHoverEffects } from '../../components/ui/features-hover'
import { Cta11 } from '../../components/ui/cta'
import Wrapper from '../../components/Wrapper'
import { MagicCard } from '../../components/ui/magic-card'

const cardData = [
  {
    title: 'Next.js',
    description:
      'A React framework for server-rendered or statically-exported React apps.',
    icon: <SiNextdotjs size={40} />,
  },
  {
    title: 'React',
    description: 'A JavaScript library for building user interfaces.',
    icon: <FaReact size={40} />,
  },
  {
    title: 'Framer Motion',
    description: ' A production-ready motion library for React.',
    icon: <SiFramer size={40} />,
  },
]

const testimonials = [
  {
    author: {
      name: 'Emma Thompson',
      handle: '@emmaai',
      avatar:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
    },
    text: 'Using this AI platform has transformed how we handle data analysis. The speed and accuracy are unprecedented.',
    href: 'https://twitter.com/emmaai',
  },
  {
    author: {
      name: 'David Park',
      handle: '@davidtech',
      avatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    },
    text: "The API integration is flawless. We've reduced our development time by 60% since implementing this solution.",
    href: 'https://twitter.com/davidtech',
  },
  {
    author: {
      name: 'Sofia Rodriguez',
      handle: '@sofiaml',
      avatar:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
    },
    text: 'Finally, an AI tool that actually understands context! The accuracy in natural language processing is impressive.',
  },
]

const Skeleton = () => (
  <div className="flex w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
)

const tabsData = {
  badge: 'shadcnblocks.com',
  heading: 'A Collection of Components Built With Shadcn & Tailwind',
  description: 'Join us to build flawless web solutions.',
  tabs: [
    {
      value: 'tab-1',
      icon: <Zap className="h-auto w-4 shrink-0" />,
      label: 'Boost Revenue',
      content: {
        badge: 'Modern Tactics',
        title: 'Make your site a true standout.',
        description:
          'Discover new web trends that help you craft sleek, highly functional sites that drive traffic and convert leads into customers.',
        buttonText: 'See Plans',
        imageSrc:
          'https://www.shadcnblocks.com/images/block/placeholder-dark-1.svg',
        imageAlt: 'placeholder',
      },
    },
    {
      value: 'tab-2',
      icon: <Pointer className="h-auto w-4 shrink-0" />,
      label: 'Higher Engagement',
      content: {
        badge: 'Expert Features',
        title: 'Boost your site with top-tier design.',
        description:
          'Use stellar design to easily engage users and strengthen their loyalty. Create a seamless experience that keeps them coming back for more.',
        buttonText: 'See Tools',
        imageSrc:
          'https://www.shadcnblocks.com/images/block/placeholder-dark-2.svg',
        imageAlt: 'placeholder',
      },
    },
    {
      value: 'tab-3',
      icon: <Layout className="h-auto w-4 shrink-0" />,
      label: 'Stunning Layouts',
      content: {
        badge: 'Elite Solutions',
        title: 'Build an advanced web experience.',
        description:
          'Lift your brand with modern tech that grabs attention and drives action. Create a digital experience that stands out from the crowd.',
        buttonText: 'See Options',
        imageSrc:
          'https://www.shadcnblocks.com/images/block/placeholder-dark-3.svg',
        imageAlt: 'placeholder',
      },
    },
  ],
}

const ctaData = {
  heading: 'Ready to Get Started?',
  description:
    'Join thousands of satisfied customers using our platform to build amazing websites.',
  buttons: {
    primary: {
      text: 'Get Started',
      url: 'https://www.shadcnblocks.com',
    },
    secondary: {
      text: 'Learn More',
      url: 'https://www.shadcnblocks.com',
    },
  },
}

const cardsData = [
  {
    title: 'Business Verification',
    description:
      'Verify business entities with our comprehensive multiple API suites.',

    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: 'Identity Verification',
    description:
      'Secure and fast identity verification for your customers through API suites.',

    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: 'Aadhar E-signature',
    description: 'Seamless digital document signing with Aadhar verification.',

    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
]

const Home = () => {
  const { theme } = useTheme()
  return (
    <div>
      <Wrapper>
        <HeroDemo />
        {/* <AnimatedTestimonialsDemo /> */}
        <Logos3 />
        {/* <SpotlightCard cards={cardData} /> */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1280px] xl:w-[2160px] xl:gap-10 mx-auto">
          {cardsData?.map((card) => (
            <MagicCard
              key={card.title}
              className="cursor-pointer flex-col items-center justify-center overflow-hidden py-4 px-4 w-full h-[180px]"
              gradientColor={theme === 'dark' ? '#262626' : '#D9D9D955'}
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            </MagicCard>
          ))}
        </div>

        <Feature108 {...tabsData} />
        <TestimonialsSection
          title="Trusted by developers worldwide"
          description="Join thousands of developers who are already building the future with our AI platform"
          testimonials={testimonials}
        />
      </Wrapper>
      <Cta11 {...ctaData} />
    </div>
  )
}

export default Home
