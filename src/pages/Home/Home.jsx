import HeroDemo from '../../components/HeroDemo'
import { FaReact } from 'react-icons/fa'
import { SiNextdotjs, SiFramer } from 'react-icons/si'
import { Logos3 } from '../../components/ui/logos3'

import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid'

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

const items = [
  {
    title: 'Business Verification',
    description:
      'Verify business entities with our comprehensive multiple API suites.',
    header: <Skeleton />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: 'Identity Verification',
    description:
      'Secure and fast identity verification for your customers through multiple API suites.',
    header: <Skeleton />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: 'Aadhar E-signature',
    description: 'Seamless digital document signing with Aadhar verification.',
    header: <Skeleton />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
]

const Home = () => {
  return (
    <div>
      <HeroDemo />

      {/* <AnimatedTestimonialsDemo /> */}
      <Logos3 />
      {/* <SpotlightCard cards={cardData} /> */}
      <BentoGrid className=" pt-4 pb-12 mx-auto">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={i === 3 || i === 6 ? 'md:col-span-2' : ''}
          />
        ))}
      </BentoGrid>
      <TestimonialsSection
        title="Trusted by developers worldwide"
        description="Join thousands of developers who are already building the future with our AI platform"
        testimonials={testimonials}
      />
    </div>
  )
}

export default Home
