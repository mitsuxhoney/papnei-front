import {
  BanknoteIcon,
  BuildingIcon,
  ClipboardCheckIcon,
  DatabaseIcon,
  FactoryIcon,
  FileTextIcon,
  GlobeIcon,
  KeyIcon,
  PhoneIcon,
  ShieldCheckIcon,
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
import Hero3 from '../../components/Hero3'

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
  },
  {
    title: 'GST Verification',
    description: 'Authenticate businesses by verifying their GST details.',
    icon: <ShieldCheckIcon className="w-4 h-4" />,
  },
  {
    title: 'GST To Phone Number',
    description: 'Retrieve phone numbers linked to a given GST number.',
    icon: <PhoneIcon className="w-4 h-4" />,
  },
  {
    title: 'MCA Data (CIN / DIN)',
    description: 'Access company and director details via MCA database.',
    icon: <DatabaseIcon className="w-4 h-4" />,
  },
  {
    title: 'MCA Filed Doc Pull',
    description: 'Retrieve documents filed with MCA for compliance.',
    icon: <FileTextIcon className="w-4 h-4" />,
  },
  {
    title: 'TDS-206 Compliance',
    description: 'Verify TDS-206 compliance for tax purposes.',
    icon: <BanknoteIcon className="w-4 h-4" />,
  },
  {
    title: 'FSSAI Verification',
    description: 'Validate FSSAI license details for food businesses.',
    icon: <UtensilsIcon className="w-4 h-4" />,
  },
  {
    title: 'TAN Verification',
    description:
      'Authenticate Tax Deduction and Collection Account Number (TAN).',
    icon: <ClipboardCheckIcon className="w-4 h-4" />,
  },
  {
    title: 'Udyog Verification',
    description: 'Verify Udyog Aadhaar details of MSMEs.',
    icon: <FactoryIcon className="w-4 h-4" />,
  },
  {
    title: 'Udyam Verification',
    description: 'Authenticate Udyam Registration details of MSMEs.',
    icon: <BuildingIcon className="w-4 h-4" />,
  },
  {
    title: 'IEC Verification',
    description: 'Validate Importer Exporter Code (IEC) details.',
    icon: <GlobeIcon className="w-4 h-4" />,
  },
  {
    title: 'IEC Verificatione',
    description: 'Validate Importer Exporter Code (IEC) details.',
    icon: <GlobeIcon className="w-4 h-4" />,
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
    button: (
      <InteractiveHoverButton className="rounded-md h-8 flex items-center text-sm">
        Learn More
      </InteractiveHoverButton>
    ),
  },
  {
    title: 'Aadhar E-Signature',
    description: 'Authenticate businesses by verifying their GST details.',
    icon: <ShieldCheckIcon className="w-4 h-4 " />,
    button: (
      <InteractiveHoverButton className="rounded-md h-8 flex items-center text-sm">
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
      <div className="mb-16 relative">
        <Hero3 />
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
      <div className="">
        <FAQCTA FAQCTAData={FAQCTAData} />
      </div>
    </div>
  )
}

export default Aadhar
