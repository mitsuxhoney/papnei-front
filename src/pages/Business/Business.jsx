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
  PhoneIcon,
  SendIcon,
  ShieldCheckIcon,
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
import { AuroraBackground } from '../../components/ui/aurora-background'
import Hero2 from '../../components/Hero2'
import Ripple from '../../components/ui/Ripple'
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
  heading: 'Business Verification Made Simple with XRAY ',
  description:
    'Trust, Transparency, and Security for Your Business',
  button: {
    text: 'Get API Keys',
    url: 'https://www.shadcnblocks.com',
  },
  background: <Ripple />,
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
const businessProducts = [
  {
    title: 'GST OTP Verification',
    description: 'Verify GST details using OTP-based authentication.',
    icon: <KeyIcon className="w-4 h-4" />,
    url: 'gst-otp-verification',
    button: (
      <InteractiveHoverButton className="rounded-md h-8 flex items-center text-sm">
        Learn More
      </InteractiveHoverButton>
    ),
  },
  {
    title: 'GST Verification',
    description: 'Authenticate businesses by verifying their GST details.',
    icon: <ShieldCheckIcon className="w-4 h-4" />,
    url: 'gst-verification',
    button: (
      <InteractiveHoverButton className="rounded-md h-8 flex items-center text-sm">
        Learn More
      </InteractiveHoverButton>
    ),
  },
  {
    title: 'GST To Phone Number',
    description: 'Retrieve phone numbers linked to a given GST number.',
    icon: <PhoneIcon className="w-4 h-4" />,
    url: 'gst-to-phone',
    button: (
      <InteractiveHoverButton className="rounded-md h-8 flex items-center text-sm">
        Learn More
      </InteractiveHoverButton>
    ),
  },
  {
    title: 'MCA Data (CIN / DIN)',
    description: 'Access company and director details via MCA database.',
    icon: <DatabaseIcon className="w-4 h-4" />,
    url: 'mca-data',
    button: (
      <InteractiveHoverButton className="rounded-md h-8 flex items-center text-sm">
        Learn More
      </InteractiveHoverButton>
    ),
  },
  {
    title: 'MCA Filed Doc Pull',
    description: 'Retrieve documents filed with MCA for compliance.',
    icon: <FileTextIcon className="w-4 h-4" />,
    url: 'mca-filed-docs',
    button: (
      <InteractiveHoverButton className="rounded-md h-8 flex items-center text-sm">
        Learn More
      </InteractiveHoverButton>
    ),
  },
  {
    title: 'TDS-206 Compliance',
    description: 'Verify TDS-206 compliance for tax purposes.',
    icon: <BanknoteIcon className="w-4 h-4" />,
    url: 'tds-206-compliance',
    button: (
      <InteractiveHoverButton className="rounded-md h-8 flex items-center text-sm">
        Learn More
      </InteractiveHoverButton>
    ),
  },
  {
    title: 'FSSAI Verification',
    description: 'Validate FSSAI license details for food businesses.',
    icon: <UtensilsIcon className="w-4 h-4" />,
    url: 'fssai-verification',
    button: (
      <InteractiveHoverButton className="rounded-md h-8 flex items-center text-sm">
        Learn More
      </InteractiveHoverButton>
    ),
  },
  {
    title: 'TAN Verification',
    description:
      'Authenticate Tax Deduction and Collection Account Number (TAN).',
    icon: <ClipboardCheckIcon className="w-4 h-4" />,
    url: 'tan-verification',
    button: (
      <InteractiveHoverButton className="rounded-md h-8 flex items-center text-sm">
        Learn More
      </InteractiveHoverButton>
    ),
  },
  {
    title: 'Udyog Verification',
    description: 'Verify Udyog Aadhaar details of MSMEs.',
    icon: <FactoryIcon className="w-4 h-4" />,
    url: 'udyog-verification',
    button: (
      <InteractiveHoverButton className="rounded-md h-8 flex items-center text-sm">
        Learn More
      </InteractiveHoverButton>
    ),
  },
  {
    title: 'Udyam Verification',
    description: 'Authenticate Udyam Registration details of MSMEs.',
    icon: <BuildingIcon className="w-4 h-4" />,
    url: 'udyam-verification',
    button: (
      <InteractiveHoverButton className="rounded-md h-8 flex items-center text-sm">
        Learn More
      </InteractiveHoverButton>
    ),
  },
  {
    title: 'IEC Verification',
    description: 'Validate Importer Exporter Code (IEC) details.',
    icon: <GlobeIcon className="w-4 h-4" />,
    url: 'iec-verification',
    button: (
      <InteractiveHoverButton className="rounded-md h-8 flex items-center text-sm">
        Learn More
      </InteractiveHoverButton>
    ),
  },
]

const BusinessProductsHeading = {
  badge: 'Instant Verification',
  title: 'Business & Compliance Verification Solutions',
  description:
    'Seamlessly verify business details, tax compliance, and legal registrations with our comprehensive suite of verification tools.',
}

const otherProducts = [
  {
    title: 'Identity Verfication',
    description: 'Verify GST details using OTP-based authentication.',
    icon: <KeyIcon className="w-4 h-4" />,
    url: '/identity',
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

const Business = () => {
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
            grid={businessProducts}
            gridHeading={BusinessProductsHeading}
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

      <div className="mb-16">
        <BusinessCTA />
      </div>

      <Wrapper>
        <div className="mb-16">
          <BusinessProducts
            grid={otherProducts}
            gridHeading={otherProductsHeading}
            className="grid-cols-1 md:grid-cols-2 max-w-3xl mx-auto"
          />
        </div>
      </Wrapper>
      {/* <div className="">
        <FAQCTA FAQCTAData={FAQCTAData} />
      </div> */}
      {/* <div className="mb-16">
        <BusinessCTA />
      </div> */}
      <div className="mb-16 px-16">
        <Connect />
      </div>
    </div>
  )
}

export default Business
