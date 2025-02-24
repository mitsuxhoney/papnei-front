import HeroDemo from '../../components/HeroDemo'
import { FaReact } from 'react-icons/fa'
import { SiNextdotjs, SiFramer } from 'react-icons/si'
import { Logos3 as Partners } from '../../components/ui/logos3'

import { useTheme } from '@/components/theme-provider'

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
import { Feature108 as Features } from '@/components/ui/features'
import { FeaturesSectionWithHoverEffects } from '../../components/ui/features-hover'
import { Cta11 } from '../../components/ui/cta'
import Wrapper from '../../components/Wrapper'
import { MagicCard } from '../../components/ui/magic-card'
import { Testimonials } from '../../components/ui/eldora-testimonials'
import { Tabs } from '../../components/ui/aceternity-tabs'
import { StickyScroll } from '../../components/ui/sticky-scroll-reveal'
import { TracingBeam } from '../../components/ui/tracing-beam'
import { FeatureSteps as StepsIntegration } from '../../components/steps-section'
import { CaseStudies } from '../../components/case-studies'
import { FAQCTA } from '../../components/faq-cta'

const DummyContent = () => {
  return (
    <img
      src="https://ui.aceternity.com/_next/image?url=%2Flinear.webp&w=2048&q=75"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%] md:h-[90%] absolute -bottom-20 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  )
}

const tabs = [
  {
    title: 'Xettle',
    value: 'Xettle',
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
        <p>Xettle</p>
        <DummyContent />
      </div>
    ),
  },
  {
    title: 'ONO',
    value: 'ONO',
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
        <p>ONO</p>
        <DummyContent />
      </div>
    ),
  },
  {
    title: 'Privacy Card',
    value: 'Privacy Card',
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
        <p>Privacy Card</p>
        <DummyContent />
      </div>
    ),
  },
  {
    title: 'Mahagram',
    value: 'Mahagram',
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
        <p>Mahagram</p>
        <DummyContent />
      </div>
    ),
  },
  {
    title: 'Bharat ATM',
    value: 'Bharat ATM',
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
        <p>Bharat ATM</p>
        <DummyContent />
      </div>
    ),
  },
]

const integrationsData = [
  {
    title: 'Collaborative Editing',
    description:
      'Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.',
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: 'Real time changes',
    description:
      'See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.',
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src="https://ui.aceternity.com/_next/image?url=%2Flinear.webp&w=640&q=75"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: 'Version control',
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Version control
      </div>
    ),
  },
  {
    title: 'Running out of content',
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
  },
]

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

const Home = () => {
  const { theme } = useTheme()
  return (
    <div>
      <Wrapper>
        <div>
          <HeroDemo />
        </div>
        {/* <AnimatedTestimonialsDemo /> */}
        <div>
          <Partners />
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
        <div className="mb-6">
          <Features {...tabsData} />
        </div>
        {/* <TestimonialsSection
          title="Trusted by developers worldwide"
          description="Join thousands of developers who are already building the future with our AI platform"
          testimonials={testimonials}
        /> */}
        <div className="mb-16">
          <StepsIntegration
            features={featureSteps}
            title="Your Journey Starts Here"
            autoPlayInterval={4000}
            imageHeight="h-[500px]"
          />
        </div>
        <div className="">
          <CaseStudies {...caseStudiesData} />
        </div>
        <div className="relative z-10 h-[600px] w-full overflow-hidden rounded-lg border bg-background mb-20">
          <Testimonials />
        </div>
      </Wrapper>
      <FAQCTA {...FAQCTAData} />
      {/* <Cta11 {...ctaData} /> */}
    </div>
  )
}

export default Home
