import HeroDemo from '../../components/HeroDemo'

import { Logos3 as Partners } from '../../components/ui/logos3'

import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from '@tabler/icons-react'

import { Icons } from '@/components/ui/icons'
import { Code, Layout, Pointer, Zap } from 'lucide-react'
import { Feature108 as Features } from '@/components/ui/features'
import Wrapper from '../../components/Wrapper'
import { Testimonials } from '../../components/ui/eldora-testimonials'
import { IntegrationBenefits } from '../../components/IntegrationBenefits'
import { CaseStudies } from '../../components/case-studies'
import { FAQCTA } from '../../components/faq-cta'
import { AnimatedBeamDemo as HomeHero } from '../../components/ui/animated-beam-hero'
import LazyLoadMotion from '../../components/LazyLoadMotion'

import Who from '../../components/Who'
import { Why } from '../../components/Why'
import { Connect } from '../../components/ui/new-cta'
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
    'Real-world success stories showcasing how our verification solutions drive security, compliance, and efficiency.',
  items: [
    {
      id: 'study1',
      title: 'Business Verification: Ensuring Trust & Compliance',
      description:
        'How our GST, PAN, and Bank Account verification helped businesses maintain compliance, prevent fraud, and establish trust.',
      href: 'https://yourwebsite.com/case-study/business-verification',
      image:
        'https://images.unsplash.com/photo-1591696205602-2f950c417cb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    },
    // {
    //   id: 'study2',
    //   title: 'Identity Verification: Enhancing Security & User Trust',
    //   description:
    //     'Learn how our Aadhaar, PAN, and other identity verification services reduced fraud and streamlined customer onboarding.',
    //   href: 'https://yourwebsite.com/case-study/identity-verification',
    //   image:
    //     'https://images.unsplash.com/photo-1578496479763-5464c01c0b9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    // },
    {
      id: 'study3',
      title: 'Aadhaar E-Sign: Enabling Secure Digital Transactions',
      description:
        'Discover how Aadhaar E-Sign transformed businesses by facilitating legally binding digital document signing.',
      href: 'https://yourwebsite.com/case-study/aadhaar-esign',
      image:
        'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=1080&q=80',
    },
    {
      id: 'study4',
      title: 'Trademark & FSSAI Verification: Protecting Brands & Businesses',
      description:
        'A deep dive into how businesses safeguarded their brand identity and ensured regulatory compliance through verification solutions.',
      href: 'https://yourwebsite.com/case-study/trademark-verification',
      image:
        'https://images.unsplash.com/photo-1605379399642-870262d3d051?w=1080&q=80',
    },
    {
      id: 'study5',
      title: 'KYC & KYB: Enabling Seamless Customer Onboarding',
      description:
        'How our Video KYC and document verification solutions accelerated user onboarding while maintaining compliance standards.',
      href: 'https://yourwebsite.com/case-study/kyc-kyb',
      image:
        'https://images.pexels.com/photos/6476587/pexels-photo-6476587.jpeg?auto=compress&cs=tinysrgb&fit=max&w=1080',
    },

    {
      id: 'study6',
      title: 'Bank Account Verification: Preventing Payment Fraud',
      description:
        'Case study on how our bank account verification solution helped businesses validate transactions and prevent financial fraud.',
      href: 'https://yourwebsite.com/case-study/bank-verification',
      image:
        'https://images.unsplash.com/photo-1513530534585-c7b1394c6d51?w=1080&q=80',
    },
    // {
    //   id: 'study7',
    //   title: 'Loan & Credit Verification: Simplifying Lending Processes',
    //   description:
    //     'See how financial institutions leveraged our verification services to streamline loan approvals and reduce risk.',
    //   href: 'https://yourwebsite.com/case-study/loan-verification',
    //   image:
    //     'https://images.unsplash.com/photo-1565374391161-0901f4db04c3?w=1080&q=80',
    // },
    {
      id: 'study8',
      title: 'E-commerce Verification: Reducing Fraudulent Transactions',
      description:
        'Learn how online platforms used our verification solutions to authenticate sellers and enhance buyer trust.',
      href: 'https://yourwebsite.com/case-study/ecommerce-verification',
      image:
        'https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=1080&q=80',
    },
  ],
}

const FAQCTAData = {
  heading: 'Frequently Asked Questions',
  description:
    "Everything you need to know about our verification solutions. Can't find the answer you're looking for? Feel free to contact our support team.",
  ctaHeading: 'Ready to Get Started?',
  ctaDescription:
    'Join thousands of businesses using our platform for seamless verification and compliance.',
  items: [
    {
      id: 'faq-1',
      question: 'What services do you offer?',
      answer:
        'We provide identity, business, and document verification solutions, including Aadhaar, PAN, GST, bank verification, and more.',
    },
    {
      id: 'faq-2',
      question: 'How secure is your verification process?',
      answer:
        'Our platform uses industry-leading encryption and compliance measures to ensure secure data processing and fraud prevention.',
    },
    {
      id: 'faq-3',
      question: 'Do you provide API access?',
      answer:
        'Yes, we offer developer-friendly APIs for seamless integration into your workflows, ensuring quick and efficient verification.',
    },
    {
      id: 'faq-4',
      question: 'What industries can benefit from your services?',
      answer:
        'Our solutions cater to fintech, banking, e-commerce, insurance, and various other sectors that require identity and compliance verification.',
    },
    {
      id: 'faq-5',
      question: 'Do you offer support for integration?',
      answer:
        'Yes, our support team is available to assist with integration, documentation, and troubleshooting any technical issues.',
    },
  ],
  supportHeading: 'Still have questions?',
  supportDescription:
    "Can't find the answer you're looking for? Our support team is here to help with any technical questions or concerns.",
  supportButtonText: 'Contact Support',
  supportButtonUrl: 'https://yourwebsite.com/contact',
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

const staticProps = {
  title: 'Open API',
  description: 'Open API for Aadhaar, PAN, GST, Bank Verification, and more.',
  repository: 'codehagen/prismui',
  stars: 300,
  contributors: [
    {
      login: 'codehagen',
      avatar_url: 'https://avatars.githubusercontent.com/u/12345678?v=4',
    },
    {
      login: 'contributor2',
      avatar_url: 'https://avatars.githubusercontent.com/u/23456789?v=4',
    },
    {
      login: 'contributor3',
      avatar_url: 'https://avatars.githubusercontent.com/u/34567890?v=4',
    },
  ],
}

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
        <div className="my-16">
          <Partners />
        </div>
        <div className="my-16">
          <OpenSource {...staticProps} />
        </div>
      </Wrapper>
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
      <div className="my-16">
        <Features {...tabsData} />
      </div>
      <div className="w-full my-16">
        <Who />
      </div>
      <div className="my-16 py-12">
        <Why />
      </div>
      {/* <TestimonialsSection
          title="Trusted by developers worldwide"
          description="Join thousands of developers who are already building the future with our AI platform"
          testimonials={testimonials}
        /> */}
      {/* <div className="mb-16">
          <LazyLoadMotion>
            <StepsIntegration
              features={featureSteps}
              title="Your Journey Starts Here"
              autoPlayInterval={4000}
              imageHeight="h-[500px]"
            />
          </LazyLoadMotion>
        </div> */}
      {/* <Wrapper>
        <div className="my-16">
          <Cta10Demo />
        </div>
      </Wrapper> */}
      <Wrapper>
        <div className="my-16 py-10">
          <IntegrationBenefits benefits={featureSteps} />
        </div>
      </Wrapper>
      <Wrapper>
        <LazyLoadMotion>
          <CaseStudies {...caseStudiesData} />
        </LazyLoadMotion>
      </Wrapper>
      <Wrapper>
        <div className="relative z-10 h-[600px] w-full overflow-hidden rounded-lg border bg-background my-16">
          <Testimonials />
        </div>
      </Wrapper>
      <div className="my-16 py-16">
        <FAQCTA FAQCTAData={FAQCTAData} />
      </div>
      <div className="my-16 w-full">
        <Wrapper>
          <Connect />
        </Wrapper>
      </div>
    </div>
  )
}

export default Home
