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

const businessHeroContent = {
  title: 'Instant. Secure. Hassle-Free Verification',

  description:
    'Integrate our robust APIs to streamline Business Verification, Identity Verification, KYC/KYB compliance, and Aadhaar E-Sign processes.',
  primaryAction: {
    href: '/docs/getting-started',
    text: 'Get API Keys',
    icon: <Code className="h-4 w-4" />,
  },
  secondaryAction: {
    href: '/contact-us',
    text: 'Contact Sales',
    icon: <Icons.component className="h-4 w-4" />,
  },
}

const businessHeroBadge = {
  text: "Introducing new API's",
  href: '/',
  icon: <Icons.logo className="h-4 w-4" />,
  variant: 'default',
  size: 'md',
}

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

const Business = () => {
  return (
    <div>
      <Wrapper>
        <div>
          <HeroDemo
            content={businessHeroContent}
            pill={businessHeroBadge}
            preview={
              <GridBackground
                title="Welcome to JatinVerse"
                description="Transforming your ideas into stunning visual experiences. Explore the world of creative design with us."
              />
            }
            // background={
            //   <DotPattern
            //     className={cn(
            //       ' [mask-image:radial-gradient(500px_circle_at_center,white,transparent)]'
            //     )}
            //   />
            // }
          />
        </div>
        <div className="mt-4">
          <BusinessProducts />
        </div>
        <div className="w-full">
          <FeaturesSection grid={features} gridHeading={featuresHeading} />
        </div>
      </Wrapper>
    </div>
  )
}

export default Business
