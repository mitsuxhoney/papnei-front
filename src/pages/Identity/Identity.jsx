import {
  BanknoteIcon,
  BarChartIcon,
  BuildingIcon,
  CarIcon,
  CheckCircleIcon,
  ClipboardCheckIcon,
  ClipboardListIcon,
  DatabaseIcon,
  EyeOffIcon,
  FactoryIcon,
  FileTextIcon,
  FingerprintIcon,
  GlobeIcon,
  IdCardIcon,
  ImageIcon,
  KeyIcon,
  Landmark,
  LinkIcon,
  PackageSearchIcon,
  PhoneIcon,
  SendIcon,
  ShieldCheckIcon,
  TextIcon,
  TextSearchIcon,
  TruckIcon,
  UtensilsIcon,
} from 'lucide-react'
import Wrapper from '../../components/Wrapper'

import BusinessProducts from '../../components/BusinessProducts'
import FeaturesSection from '../../components/ui/features-section'
import { StaticTestimonialsEldora } from '../../components/StaticTestimonialsEldora'
import { IntegrationBenefits } from '../../components/IntegrationBenefits'
import { BusinessCTA } from '../../components/BusinessCTA'
import { FAQCTA } from '../../components/faq-cta'
import { InteractiveHoverButton } from '../../components/ui/interactive-hover'
import { Hero1 } from '../../components/Hero1'
import Hero2 from '../../components/Hero2'
import { Connect } from '../../components/ui/new-cta'

const businessHero = {
  heading: 'Fast & Secure Identity Verification XRAY AI',
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

const features = [
  {
    badge: <ShieldCheckIcon className="w-4 h-4" />,
    title: 'Fast & Reliable',
    description:
      'Get instant verification with real-time data checks, ensuring accuracy and speed',
  },
  {
    badge: <SendIcon className="w-4 h-4" />,
    title: 'Secure & Compliant',
    description:
      ' We follow industry-leading security standards to safeguard your data and ensure compliance. ',
  },
  {
    badge: <BarChartIcon className="w-4 h-4" />,
    title: 'Seamless Integration',
    description:
      'Our API-based verification enables effortless automation, reducing manual work and errors.',
  },
]
const featuresHeading = {
  badge: 'Features',
  heading: 'Features at a glance',
  description:
    'Discover our suite of verification services designed to enhance your business operations.',
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
    "Everything you need to know about our identity verification solutions. Can't find the answer you're looking for? Feel free to contact our support team.",
  ctaHeading: 'Ready To Get Started',
  ctaDescription:
    'Join thousands of businesses using our fast and secure identity verification solutions to prevent fraud and ensure compliance.',
  items: [
    {
      id: 'faq-1',
      question: 'What is identity verification?',
      answer:
        'Identity verification is the process of confirming a person’s identity using official documents, biometric data, or digital verification methods.',
    },
    {
      id: 'faq-2',
      question: 'How does your identity verification process work?',
      answer:
        'Our system verifies identities by cross-checking government-issued IDs, biometric data, and other authentication factors to ensure accuracy and security.',
    },
    {
      id: 'faq-3',
      question: 'Why is identity verification important?',
      answer:
        'Identity verification helps prevent fraud, enhances security, ensures regulatory compliance, and builds trust between businesses and customers.',
    },
    {
      id: 'faq-4',
      question: 'Is the verification process secure?',
      answer:
        'Yes, we use industry-leading encryption and compliance measures to ensure that all identity verification data is protected and secure.',
    },
    {
      id: 'faq-5',
      question: 'How long does the verification process take?',
      answer:
        'Our identity verification process is instant or takes just a few minutes, depending on the method used and the data provided.',
    },
  ],
}


const identityProducts = [
  {
    title: 'PAN Verification',
    description: 'Verify the validity of PAN details.',
    icon: <IdCardIcon className="w-4 h-4" />,
    url: 'pan-verification',
    button: (
      <InteractiveHoverButton className="rounded-md h-8 flex items-center text-sm">
        Learn More
      </InteractiveHoverButton>
    ),
  },
  {
    title: 'PAN Comprehensive',
    description: 'Get comprehensive details of a PAN card.',
    icon: <ClipboardListIcon className="w-4 h-4" />,
    url: 'pan-comprehensive',
    button: (
      <InteractiveHoverButton className="rounded-md h-8 flex items-center text-sm">
        Learn More
      </InteractiveHoverButton>
    ),
  },
  {
    title: 'Aadhaar to PAN',
    description: 'Link and verify Aadhaar with PAN.',
    icon: <LinkIcon className="w-4 h-4" />,
    url: 'aadhaar-to-pan',
    button: (
      <InteractiveHoverButton className="rounded-md h-8 flex items-center text-sm">
        Learn More
      </InteractiveHoverButton>
    ),
  },
  {
    title: 'PAN Validation',
    description: 'Validate the structure and authenticity of a PAN.',
    icon: <CheckCircleIcon className="w-4 h-4" />,
    url: 'pan-validation',
    button: (
      <InteractiveHoverButton className="rounded-md h-8 flex items-center text-sm">
        Learn More
      </InteractiveHoverButton>
    ),
  },
  {
    title: 'Aadhaar Verification',
    description: 'Verify Aadhaar details for an individual.',
    icon: <FingerprintIcon className="w-4 h-4" />,
    url: 'aadhaar-verification',
    button: (
      <InteractiveHoverButton className="rounded-md h-8 flex items-center text-sm">
        Learn More
      </InteractiveHoverButton>
    ),
  },
  {
    title: 'Voter ID OCR',
    description: 'Extract details from Voter ID using OCR.',
    icon: <TextSearchIcon className="w-4 h-4" />,
    url: 'voter-id-ocr',
    button: (
      <InteractiveHoverButton className="rounded-md h-8 flex items-center text-sm">
        Learn More
      </InteractiveHoverButton>
    ),
  },

  {
    title: 'Driving License Verification',
    description: 'Verify driving license details.',
    icon: <CarIcon className="w-4 h-4" />,
    url: 'dl-verification',
    button: (
      <InteractiveHoverButton className="rounded-md h-8 flex items-center text-sm">
        Learn More
      </InteractiveHoverButton>
    ),
  },
  {
    title: 'Passport Verification',
    description: 'Verify passport details.',
    icon: <GlobeIcon className="w-4 h-4" />,
    url: 'passport-verification',
    button: (
      <InteractiveHoverButton className="rounded-md h-8 flex items-center text-sm">
        Learn More
      </InteractiveHoverButton>
    ),
  },
  {
    title: 'Passport OCR',
    description: 'Extract passport details using OCR.',
    icon: <TextIcon className="w-4 h-4" />,
    url: 'passport-ocr',
    button: (
      <InteractiveHoverButton className="rounded-md h-8 flex items-center text-sm">
        Learn More
      </InteractiveHoverButton>
    ),
  },
  {
    title: 'Photo ID OCR',
    description: 'Extract details from any photo ID using OCR.',
    icon: <ImageIcon className="w-4 h-4" />,
    url: 'photo-id-ocr',
    button: (
      <InteractiveHoverButton className="rounded-md h-8 flex items-center text-sm">
        Learn More
      </InteractiveHoverButton>
    ),
  },
  {
    title: 'Vehicle RC Verification',
    description: 'Verify vehicle Registration Certificate details.',
    icon: <TruckIcon className="w-4 h-4" />,
    url: 'vehicle-rc-verification',
    button: (
      <InteractiveHoverButton className="rounded-md h-8 flex items-center text-sm">
        Learn More
      </InteractiveHoverButton>
    ),
  },
  {
    title: 'Chassis to RC',
    description: 'Get RC details from chassis number.',
    icon: <PackageSearchIcon className="w-4 h-4" />,
    url: 'chassis-to-rc',
    button: (
      <InteractiveHoverButton className="rounded-md h-8 flex items-center text-sm">
        Learn More
      </InteractiveHoverButton>
    ),
  },
  {
    title: 'RC with Financer',
    description: 'Check RC details along with financer info.',
    icon: <Landmark className="w-4 h-4" />,
    url: 'rc-with-financer',
    button: (
      <InteractiveHoverButton className="rounded-md h-8 flex items-center text-sm">
        Learn More
      </InteractiveHoverButton>
    ),
  },
  {
    title: 'Aadhaar Masking',
    description: 'Mask Aadhaar number for privacy and compliance.',
    icon: <EyeOffIcon className="w-4 h-4" />,
    url: 'aadhaar-masking',
    button: (
      <InteractiveHoverButton className="rounded-md h-8 flex items-center text-sm">
        Learn More
      </InteractiveHoverButton>
    ),
  },
]

const identityProductsHeading = {
  badge: 'Instant Verification',
  title: 'Identity Verification Solutions',
  description:
    'Seamlessly verify business details, tax compliance, and legal registrations with our comprehensive suite of verification tools.',
}

const otherProducts = [
  {
    title: 'Business Verification',
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
    title: 'Aadhar E-Signature',
    description: 'Authenticate businesses by verifying their GST details.',
    icon: <ShieldCheckIcon className="w-4 h-4 " />,
    url: '/aadhar',
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

const Identity = () => {
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
            grid={identityProducts}
            gridHeading={identityProductsHeading}
            className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
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

      
      <Wrapper>
        <div className=" py-16">
          <BusinessProducts
            grid={otherProducts}
            gridHeading={otherProductsHeading}
            className="grid-cols-1 md:grid-cols-2 max-w-3xl mx-auto"
          />
        </div>
      </Wrapper>
      <div className="py-16">
        <FAQCTA FAQCTAData={FAQCTAData} />
      </div>
      <div className="mb-16">
        <Connect />
      </div>
    </div>
  )
}

export default Identity
