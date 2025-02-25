import { Code } from 'lucide-react'
import HeroDemo from '../../components/HeroDemo'
import Wrapper from '../../components/Wrapper'
import { Icons } from '@/components/ui/icons'
import { BorderBeamForm } from '../../components/border-beam-form'
import BusinessProducts from '../../components/BusinessProducts'

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

const Business = () => {
  return (
    <div>
      <Wrapper>
        <div>
          <HeroDemo
            content={businessHeroContent}
            pill={businessHeroBadge}
            preview={<BorderBeamForm />}
          />
        </div>
        <div>
          <BusinessProducts />
        </div>
      </Wrapper>
    </div>
  )
}

export default Business
