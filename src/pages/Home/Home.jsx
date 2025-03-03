import HeroDemo from '../../components/HeroDemo'
import { FaReact } from 'react-icons/fa'
import { SiNextdotjs, SiFramer } from 'react-icons/si'
import { Logos3 as Partners } from '../../components/ui/logos3'
import { useTheme } from '@/components/theme-provider'
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from '@tabler/icons-react'
import {
  Banknote,
  ShoppingCart,
  Rocket,
  Briefcase,
  BanknoteIcon,
  ShoppingCartIcon,
  RocketIcon,
  BriefcaseIcon,
  CodeIcon,
  Clock,
  ShieldCheck,
  Server,
} from 'lucide-react'
import { Icons } from '@/components/ui/icons'
import { Code, Key, Layout, Pointer, Zap } from 'lucide-react'
import { Feature108 as Features } from '@/components/ui/features'
import Wrapper from '../../components/Wrapper'
import { Testimonials } from '../../components/ui/eldora-testimonials'
import { FeatureSteps as StepsIntegration } from '../../components/steps-section'
import { CaseStudies } from '../../components/case-studies'
import { FAQCTA } from '../../components/faq-cta'
import { AnimatedBeamDemo as HomeHero } from '../../components/ui/animated-beam-hero'
import LazyLoadMotion from '../../components/LazyLoadMotion'
import { BentoGrid, BentoGridItem } from '../../components/ui/bento-grid'
import { CardDemo } from '../../components/ui/aceternity-card'
import { MagicCard } from '../../components/ui/magic-card'
import Who from '../../components/Who'
import { Why } from '../../components/Why'
import { BusinessCTA } from '../../components/BusinessCTA'
import OpenSource from '../../components/ui/open-source'

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

const featureSteps = [
  {
    step: 'Step 1',
    title: 'Get Started Instantly',
    content: 'Sign up and access our API dashboard in minutes.',
    image:
      'https://images.unsplash.com/photo-1723958929247-ef054b525153?q=80&w=2070&auto=format&fit=crop',
  },
  {
    step: 'Step 2',
    title: 'Integrate with Ease',
    content:
      'Use our well-documented APIs to connect seamlessly with your system.',
    image:
      'https://images.unsplash.com/photo-1723931464622-b7df7c71e380?q=80&w=2070&auto=format&fit=crop',
  },
  {
    step: 'Step 3',
    title: 'Automate Verification',
    content:
      'Leverage our real-time verification tools to enhance security and compliance.',
    image:
      'https://images.unsplash.com/photo-1725961476494-efa87ae3106a?q=80&w=2070&auto=format&fit=crop',
  },
]

const caseStudiesData = {
  title: 'Case Studies',
  description:
    'Real-world success stories highlighting our impact, expertise, and innovative solutions.',
  items: [
    {
      id: 'study1',
      title: 'Business Verification: Ensuring Trust & Compliance',
      description:
        'How our GST, PAN, and Bank Account verification helped businesses maintain compliance and prevent fraud.',
      href: 'https://ui.shadcn.com',
      image:
        'https://images.unsplash.com/photo-1551250928-243dc937c49d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjN8fHx8fHwyfHwxNzIzODA2OTM5fA&ixlib=rb-4.0.3&q=80&w=1080',
    },
    {
      id: 'study2',
      title: 'Identity Verification: Enhancing Security & User Trust',
      description:
        'Learn how our Aadhaar, PAN, and other identity verification services reduced fraud and streamlined onboarding.',
      href: 'https://nextjs.org',
      image:
        'https://images.unsplash.com/photo-1550070881-a5d71eda5800?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjV8fHx8fHwyfHwxNzIzNDM1Mjk4fA&ixlib=rb-4.0.3&q=80&w=1080',
    },
    {
      id: 'study3',
      title: 'Aadhaar E-Sign: Simplifying Digital Transactions',
      description:
        'Discover how Aadhaar E-Sign transformed businesses by enabling secure, legally compliant document signing.',
      href: 'https://tailwindcss.com',
      image:
        'https://images.unsplash.com/photo-1551250928-e4a05afaed1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjR8fHx8fHwyfHwxNzIzODA2OTM5fA&ixlib=rb-4.0.3&q=80&w=1080',
    },
    {
      id: 'study4',
      title: 'Trademark & FSSAI Verification: Protecting Brands & Businesses',
      description:
        'Case study on how businesses safeguarded their brand identity and ensured regulatory compliance.',
      href: 'https://astro.build',
      image:
        'https://images.unsplash.com/photo-1536735561749-fc87494598cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxNzd8fHx8fHwyfHwxNzIzNjM0NDc0fA&ixlib=rb-4.0.3&q=80&w=1080',
    },
    {
      id: 'study5',
      title: 'KYC & KYB: Enabling Seamless Customer Onboarding',
      description:
        'How our Video KYC and document verification solutions accelerated user onboarding and compliance processes.',
      href: 'https://react.dev',
      image:
        'https://images.unsplash.com/photo-1548324215-9133768e4094?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMzF8fHx8fHwyfHwxNzIzNDM1MzA1fA&ixlib=rb-4.0.3&q=80&w=1080',
    },
  ],
}

const FAQCTAData = {
  heading: 'Frequently asked questions',
  description:
    "Everything you need to know about shadcnblocks. Can't find the answer you're looking for? Feel free to contact our support team.",
  ctaHeading: 'Ready To Get Started',
  ctaDescription:
    'Join thousand of satisfied customers using our platform to build amazing websites.',
  items: [
    {
      id: 'faq-1',
      question: 'What is shadcnblocks?',
      answer:
        'shadcnblocks is a collection of ready-to-use block components built on top of shadcn/ui, designed to help you build beautiful websites faster.',
    },
    {
      id: 'faq-2',
      question: 'How do I install shadcnblocks?',
      answer:
        'shadcnblocks components are designed to be copied and pasted into your project. Simply browse the components, click on the one you want to use, and copy the code directly into your project. This gives you full control over the code and allows for easy customization.',
    },
    {
      id: 'faq-3',
      question: 'Is shadcnblocks free to use?',
      answer:
        'Yes, shadcnblocks is open-source and free to use in both personal and commercial projects. You can customize and modify the blocks to suit your needs.',
    },
    {
      id: 'faq-4',
      question: 'Can I customize the blocks?',
      answer:
        'Absolutely! All blocks are built with customization in mind. You can modify the styling, content, and behavior through props and Tailwind CSS classes.',
    },
    {
      id: 'faq-5',
      question: 'Do you offer support?',
      answer:
        'Yes, we provide support through our GitHub repository where you can report issues, suggest features, or ask questions about implementation.',
    },
  ],
  supportHeading: 'Still have questions?',
  supportDescription:
    "Can't find the answer you're looking for? Our support team is here to help with any technical questions or concerns.",
  supportButtonText: 'Contact Support',
  supportButtonUrl: 'https://shadcnblocks.com',
}

const homeHeroContent = {
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

const homeHeroBadge = {
  text: "Introducing new API's",
  href: '/',
  icon: <Icons.logo className="h-4 w-4" />,
  variant: 'default',
  size: 'md',
}

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
)
const items = [
  {
    title: 'The Dawn of Innovation',
    description: 'Explore the birth of groundbreaking ideas and inventions.',
    header: <Skeleton />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: 'The Digital Revolution',
    description: 'Dive into the transformative power of technology.',
    header: <Skeleton />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: 'The Art of Design',
    description: 'Discover the beauty of thoughtful and functional design.',
    header: <Skeleton />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: 'The Power of Communication',
    description:
      'Understand the impact of effective communication in our lives.',
    header: <Skeleton />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: 'The Pursuit of Knowledge',
    description: 'Join the quest for understanding and enlightenment.',
    header: <Skeleton />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: 'The Joy of Creation',
    description: 'Experience the thrill of bringing ideas to life.',
    header: <Skeleton />,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: 'The Spirit of Adventure',
    description: 'Embark on exciting journeys and thrilling discoveries.',
    header: <Skeleton />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
]

const Home = () => {
  return (
    <div>
      <Wrapper>
        <div>
          <HeroDemo
            preview={<HomeHero />}
            content={homeHeroContent}
            pill={homeHeroBadge}
          />
        </div>
        {/* <AnimatedTestimonialsDemo /> */}
        <div>
          <Partners />
        </div>
        <div className="mb-16">
          <OpenSource
            repository="codehagen/prismui"
            title="Join our community"
            description="PrismUI is built by the community, for the community. We'd love to have you join us!"
            buttonText="View on GitHub"
            defaultStats={{
              stars: 300,
              contributors: [
                {
                  login: 'codehagen',
                  avatar_url:
                    'https://avatars.githubusercontent.com/u/12345678?v=4',
                },
                {
                  login: 'contributor2',
                  avatar_url:
                    'https://avatars.githubusercontent.com/u/23456789?v=4',
                },
              ],
            }}
          />
        </div>
        {/* <SpotlightCard cards={cardData} /> */}
        {/* <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1280px] xl:max-w-[2160px] xl:gap-10 mx-auto">
            {cardsData?.map((card) => (
              <MagicCard
                key={card.title}
                className="cursor-pointer flex-col items-center justify-center overflow-hidden py-4 px-4 w-full h-[180px] border"
                gradientColor={theme === 'dark' ? '#262626' : '#D9D9D955'}
              >
                <div className="flex flex-col gap-4">
                  <div className="flex gap-2">
                    <div className="flex items-center gap-2">{card.icon}</div>
                    <h3 className=" text-neutral-800 dark:text-neutral-100 text-lg font-bold">
                      {card.title}
                    </h3>
                  </div>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300">
                    {card.description}
                  </p>
                </div>
              </MagicCard>
            ))}
          </div>
        </div> */}
        <div className="w-full">
          <Who />
        </div>
        <div className="mb-6">
          <Features {...tabsData} />
        </div>
        <div className="mb-16">
          <Why />
        </div>
        {/* <TestimonialsSection
          title="Trusted by developers worldwide"
          description="Join thousands of developers who are already building the future with our AI platform"
          testimonials={testimonials}
        /> */}
        <div className="mb-16">
          <LazyLoadMotion>
            <StepsIntegration
              features={featureSteps}
              title="Your Journey Starts Here"
              autoPlayInterval={4000}
              imageHeight="h-[500px]"
            />
          </LazyLoadMotion>
        </div>
        <LazyLoadMotion>
          <CaseStudies {...caseStudiesData} />
        </LazyLoadMotion>
        <div className="relative z-10 h-[600px] w-full overflow-hidden rounded-lg border bg-background mb-20">
          <Testimonials />
        </div>
      </Wrapper>
      <div>
        <FAQCTA FAQCTAData={FAQCTAData} />
      </div>
    </div>
  )
}

export default Home
