import {
  BanknoteIcon,
  BarChartIcon,
  BuildingIcon,
  ClipboardCheckIcon,
  DatabaseIcon,
  FactoryIcon,
  FileTextIcon,
  GlobeIcon,
  KeyIcon,
  PenIcon,
  PhoneIcon,
  SendIcon,
  ShieldCheckIcon,
  SmileIcon,
  UtensilsIcon,
} from 'lucide-react'

import Wrapper from '../../components/Wrapper'

import BusinessProducts from '../../components/BusinessProducts'
import FeaturesSection from '../../components/ui/features-section'
import { Hero1 } from '../../components/Hero1'
import { StaticTestimonialsEldora } from '../../components/StaticTestimonialsEldora'
import { IntegrationBenefits } from '../../components/IntegrationBenefits'
import { BusinessCTA } from '../../components/BusinessCTA'
import { FAQCTA } from '../../components/faq-cta'
import { InteractiveHoverButton } from '../../components/ui/interactive-hover'
import Hero2 from '../../components/Hero2'
import { Connect } from '../../components/ui/new-cta'

const features = [
  {
    badge: <ShieldCheckIcon className="w-4 h-4" />,
    title: 'HIPAA and SOC2 Compliant',
    description:
      'Our applications are HIPAA and SOC2 compliant, your data is safe with us, always.',
  },
  {
    badge: <SendIcon className="w-4 h-4" />,
    title: 'Automated Social Media Posting',
    description:
      'Schedule and automate your social media posts across multiple platforms to save time and maintain a consistent online presence.',
  },
  {
    badge: <BarChartIcon className="w-4 h-4" />,
    title: 'Advanced Analytics',
    description:
      'Gain insights into your social media performance with detailed analytics and reporting tools to measure engagement and ROI.',
  },
]

const featuresHeading = {
  badge: 'Features',
  heading: 'Features at a glance',
  description:
    'Discover our suite of verification services designed to enhance your business operations.',
}

const businessHero = {
  heading: 'Aadhaar E-Sign Verification, Instantly',
  description:
    'Our advanced technology simplifies the process while maintaining the highest security standards.',
  button: {
    text: 'GET API KEYS',
    url: 'https://www.shadcnblocks.com',
  },

  reviews: {
    count: 200,
    avatars: [
      {
        id: 1,
        name: 'John Doe',
        designation: 'Software Engineer',
        image:
          'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80',
      },
      {
        id: 2,
        name: 'Robert Johnson',
        designation: 'Product Manager',
        image:
          'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
      },
      {
        id: 3,
        name: 'Jane Smith',
        designation: 'Data Scientist',
        image:
          'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
      },
      {
        id: 4,
        name: 'Emily Davis',
        designation: 'UX Designer',
        image:
          'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
      },
      {
        id: 5,
        name: 'Tyler Durden',
        designation: 'Soap Developer',
        image:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80',
      },
      {
        id: 6,
        name: 'Dora',
        designation: 'The Explorer',
        image:
          'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80',
      },
    ],
  },
}

const featuresBenefits = [
  {
    title: 'Get Started Instantly',
    content: 'Sign up and access our API dashboard in minutes.',
    image:
      'https://images.unsplash.com/photo-1723958929247-ef054b525153?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Integrate with Ease',
    content:
      'Use our well-documented APIs to connect seamlessly with your system.',
    image:
      'https://images.unsplash.com/photo-1723931464622-b7df7c71e380?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Automate Verification',
    content:
      'Leverage our real-time verification tools to enhance security and compliance.',
    image:
      'https://images.unsplash.com/photo-1725961476494-efa87ae3106a?q=80&w=2070&auto=format&fit=crop',
  },
]

const FAQCTAData = {
  heading: 'Frequently Asked Questions',
  description:
    "Everything you need to know about Aadhaar E-Sign verification. Can't find the answer you're looking for? Feel free to contact our support team.",
  ctaHeading: 'Ready To Get Started',
  ctaDescription:
    'Join thousands of satisfied users leveraging our secure Aadhaar E-Sign verification for seamless document authentication.',
  items: [
    {
      id: 'faq-1',
      question: 'What is Aadhaar E-Sign verification?',
      answer:
        'Aadhaar E-Sign verification is an electronic signature service that allows individuals to digitally sign documents using their Aadhaar number and OTP authentication.',
    },
    {
      id: 'faq-2',
      question: 'How does Aadhaar E-Sign work?',
      answer:
        'Aadhaar E-Sign works by linking your Aadhaar number with an OTP-based authentication process, enabling you to digitally sign documents without needing a physical signature.',
    },
    {
      id: 'faq-3',
      question: 'Is Aadhaar E-Sign legally valid?',
      answer:
        'Yes, Aadhaar E-Sign is legally recognized under the Information Technology Act, 2000, making it a valid and secure way to sign digital documents.',
    },
    {
      id: 'faq-4',
      question: 'What are the benefits of using Aadhaar E-Sign?',
      answer:
        'Aadhaar E-Sign is secure, fast, cost-effective, and legally valid. It eliminates the need for physical paperwork and enables remote document signing.',
    },
    {
      id: 'faq-5',
      question: 'Who can use Aadhaar E-Sign verification?',
      answer:
        'Any individual with a valid Aadhaar number and linked mobile number can use Aadhaar E-Sign verification to sign documents digitally.',
    },
  ],
}

const aadharProducts = [
  {
    title: 'Face Verification',
    description: 'Verify identity through facial recognition.',
    icon: <SmileIcon className="w-4 h-4" />, // Replace with your preferred icon
    url: 'face-verification',
    button: (
      <InteractiveHoverButton className="rounded-md h-8 flex items-center text-sm">
        Learn More
      </InteractiveHoverButton>
    ),
  },
  {
    title: 'Aadhaar E-Sign',
    description: 'Digitally sign documents using Aadhaar-based e-signature.',
    icon: <PenIcon className="w-4 h-4" />, // Replace with your preferred icon
    url: 'e-sign',
    button: (
      <InteractiveHoverButton className="rounded-md h-8 flex items-center text-sm">
        Learn More
      </InteractiveHoverButton>
    ),
  },
]

const aadharProductsHeading = {
  badge: 'Instant Verification',
  title: 'Aadhar E-Sign Verification Solutions',
  description:
    'Seamlessly verify business details, tax compliance, and legal registrations with our comprehensive suite of verification tools.',
}

const otherProducts = [
  {
    title: 'Business Verfication',
    description: 'Verify GST details using OTP-based authentication.',
    icon: <KeyIcon className="w-4 h-4" />,
    url: '/business',
    button: (
      <InteractiveHoverButton className="rounded-md flex items-center text-sm">
        Learn More
      </InteractiveHoverButton>
    ),
  },
  {
    title: 'Identity Verfication',
    description: 'Authenticate businesses by verifying their GST details.',
    icon: <ShieldCheckIcon className="w-4 h-4 " />,
    url: '/identity',
    button: (
      <InteractiveHoverButton className="rounded-md flex items-center text-sm">
        Learn More
      </InteractiveHoverButton>
    ),
  },
]

const otherProductsHeading = {
  badge: 'Products',
  title: 'Other Products',
  description:
    'Seamlessly verify business details, tax compliance, and legal registrations with our comprehensive suite of verification tools.',
}

const Aadhar = () => {
  return (
    <div>
      <div className="mb-16">
        <Hero2 businessHero={businessHero} />
      </div>
      <Wrapper>
        <div className="mb-16">
          <StaticTestimonialsEldora />
        </div>
      </Wrapper>
      <Wrapper>
        <div className="mb-16">
          <BusinessProducts
            grid={aadharProducts}
            gridHeading={aadharProductsHeading}
            className="grid-cols-1 md:grid-cols-2 max-w-3xl mx-auto"
          />
        </div>
      </Wrapper>

      <Wrapper>
        <div className="w-full mb-16">
          <FeaturesSection grid={features} gridHeading={featuresHeading} />
        </div>
      </Wrapper>

      <Wrapper>
        <div className="mb-16">
          <IntegrationBenefits benefits={featuresBenefits} />
        </div>
      </Wrapper>

      {/* <div className="mb-16">
        <BusinessCTA />
      </div> */}
      <Wrapper>
        <div className="mb-16">
          <BusinessProducts
            grid={otherProducts}
            gridHeading={otherProductsHeading}
            className="grid-cols-1 md:grid-cols-2 max-w-3xl mx-auto"
          />
        </div>
      </Wrapper>
      <div className="">
        <FAQCTA FAQCTAData={FAQCTAData} />
      </div>
      <div className="mb-16">
        <Connect />
      </div>
    </div>
  )
}

export default Aadhar
