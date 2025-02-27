import { Code } from 'lucide-react'
import HeroDemo from '../../components/HeroDemo'
import Wrapper from '../../components/Wrapper'
import { Icons } from '@/components/ui/icons'
import { BorderBeamForm } from '../../components/border-beam-form'
import BusinessProducts from '../../components/BusinessProducts'
import FeaturesSection from '../../components/ui/features-section'
import ExpandableCardBasic from '../../components/ExpandableCardDemo'
import { DotPattern } from '../../components/ui/dot-pattern'
import { DotPatternDemo } from '../../components/DotPatternDemo'
import { cn } from '@/lib/utils'
import { GridBackground } from '../../components/ui/glowing-card'
import { BusinessHero } from '../../components/ui/modern-hero'

const features = [
  {
    title: 'HIPAA and SOC2 Compliant',
    description:
      'Our applications are HIPAA and SOC2 compliant, your data is safe with us, always.',
  },
  {
    title: 'Automated Social Media Posting',
    description:
      'Schedule and automate your social media posts across multiple platforms to save time and maintain a consistent online presence.',
  },
  {
    title: 'Advanced Analytics',
    description:
      'Gain insights into your social media performance with detailed analytics and reporting tools to measure engagement and ROI.',
  },
  {
    title: 'Content Calendar',
    description:
      'Plan and organize your social media content with an intuitive calendar view, ensuring you never miss a post.',
  },
  {
    title: 'Audience Targeting',
    description:
      'Reach the right audience with advanced targeting options, including demographics, interests, and behaviors.',
  },
  {
    title: 'Social Listening',
    description:
      'Monitor social media conversations and trends to stay informed about what your audience is saying and respond in real-time.',
  },
  {
    title: 'Customizable Templates',
    description:
      "Create stunning social media posts with our customizable templates, designed to fit your brand's unique style and voice.",
  },
  {
    title: 'Collaboration Tools',
    description:
      'Work seamlessly with your team using our collaboration tools, allowing you to assign tasks, share drafts, and provide feedback in real-time.',
  },
]

const featuresHeading = {
  badge: 'Features',
  heading: 'Features at a glance',
  description:
    'Discover our suite of verification services designed to enhance your business operations.',
}

const businessHero = {
  heading: 'A Collection of Components Built With Shadcn & Tailwind',
  description:
    'Finely crafted components built with React, Tailwind and Shadcn UI. Developers can copy and paste these blocks directly into their project.',
  button: {
    text: 'Discover all components',
    url: 'https://www.shadcnblocks.com',
  },
  reviews: {
    count: 200,
    avatars: [
      {
        src: 'https://www.shadcnblocks.com/images/block/avatar-1.webp',
        alt: 'Avatar 1',
      },
      {
        src: 'https://www.shadcnblocks.com/images/block/avatar-2.webp',
        alt: 'Avatar 2',
      },
      {
        src: 'https://www.shadcnblocks.com/images/block/avatar-3.webp',
        alt: 'Avatar 3',
      },
      {
        src: 'https://www.shadcnblocks.com/images/block/avatar-4.webp',
        alt: 'Avatar 4',
      },
      {
        src: 'https://www.shadcnblocks.com/images/block/avatar-5.webp',
        alt: 'Avatar 5',
      },
    ],
  },
}

const Business = () => {
  return (
    <div>
      <div className="mb-16">
        <BusinessHero businessHero={businessHero} />
      </div>
      <Wrapper>
        <div className="mb-16">
          <BusinessProducts />
        </div>
        <div className="w-full mb-16">
          <FeaturesSection grid={features} gridHeading={featuresHeading} />
        </div>
      </Wrapper>
    </div>
  )
}

export default Business
