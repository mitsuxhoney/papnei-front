import { Tabs, TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs'
import { Fingerprint, Layout, Pointer, Zap } from 'lucide-react'
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from '@tabler/icons-react'

import { FeaturesSectionWithHoverEffects } from './features-hover'

const features = {
  badge: 'Products & Services',
  heading: 'Comprehensive Verification Solutions',
  description:
    'Discover our suite of verification services designed to enhance your business operations.',
}

const tabs = [
  {
    value: 'tab-1',
    icon: <Zap className="h-auto w-4 shrink-0" />,
    label: 'Business Verification',
    content: {
      badge: 'Trust & Compliance',
      title: 'Verify Businesses with Ease',
      description:
        'Ensure business legitimacy with automated verification solutions for GST, PAN, and more.',
      buttonText: 'Explore Solutions',
      imageSrc: 'https://shadcnblocks.com/images/block/placeholder-dark-1.svg',
      imageAlt: 'Business Verification',
    },
    features: [
      {
        title: 'GST Verification',
        description: 'Validate GST details to ensure business legitimacy.',
        icon: <IconTerminal2 />,
      },
      {
        title: 'PAN Verification',
        description: 'Verify business PAN for compliance and authenticity.',
        icon: <IconEaseInOut />,
      },
      {
        title: 'CIN Verification',
        description: 'Check company registration details via MCA records.',
        icon: <IconCurrencyDollar />,
      },
      {
        title: 'Shop & Establishment Verification',
        description: 'Confirm business registration under state laws.',
        icon: <IconAdjustmentsBolt />,
      },
      {
        title: 'Bank Account Verification',
        description: 'Instantly verify business bank account details.',
        icon: <IconHeart />,
      },
      {
        title: 'UDYAM Registration Check',
        description:
          'Authenticate MSME registration for eligibility verification.',
        icon: <IconRouteAltLeft />,
      },
      {
        title: 'FSSAI License Verification',
        description: 'Ensure food businesses are legally registered.',
        icon: <IconHelp />,
      },
      {
        title: 'Trademark Verification',
        description: 'Validate trademark registration for brand protection.',
        icon: <IconCloud />,
      },
    ],
  },
  {
    value: 'tab-2',
    icon: <Pointer className="h-auto w-4 shrink-0" />,
    label: 'Identity Verification',
    content: {
      badge: 'Secure Identity',
      title: 'Authenticate Identities Seamlessly',
      description:
        'Leverage AI-driven verification for Aadhaar, PAN, and more to enhance security.',
      buttonText: 'Get Started',
      imageSrc: 'https://shadcnblocks.com/images/block/placeholder-dark-2.svg',
      imageAlt: 'Identity Verification',
    },
    features: [
      {
        title: 'Aadhaar Verification',
        description:
          'Instantly verify Aadhaar details for identity authentication.',
        icon: <IconTerminal2 />,
      },
      {
        title: 'PAN Verification',
        description: 'Validate individual PAN details for KYC compliance.',
        icon: <IconEaseInOut />,
      },
      {
        title: 'Driving License Check',
        description: 'Confirm license validity and ownership.',
        icon: <IconCurrencyDollar />,
      },
      {
        title: 'Voter ID Verification',
        description: 'Authenticate voter ID details for user validation.',
        icon: <IconAdjustmentsBolt />,
      },
      {
        title: 'Passport Verification',
        description: 'Verify passport details for enhanced identification.',
        icon: <IconHeart />,
      },
      {
        title: 'Face Match',
        description: 'Ensure user identity with AI-driven facial recognition.',
        icon: <IconRouteAltLeft />,
      },
      {
        title: 'OCR-Based Verification',
        description: 'Extract & validate details from ID documents.',
        icon: <IconHelp />,
      },
      {
        title: 'Liveness Detection',
        description: 'Prevent fraud with real-time user authentication.',
        icon: <IconCloud />,
      },
    ],
  },
  {
    value: 'tab-3',
    icon: <Layout className="h-auto w-4 shrink-0" />,
    label: 'KYC & KYB',
    content: {
      badge: 'Seamless Compliance',
      title: 'KYC & KYB Made Simple',
      description:
        'Automate user and business verification with cutting-edge compliance solutions.',
      buttonText: 'See How',
      imageSrc: 'https://shadcnblocks.com/images/block/placeholder-dark-3.svg',
      imageAlt: 'KYC & KYB',
    },
    features: [
      {
        title: 'Video KYC',
        description: 'Conduct live video verification for seamless onboarding.',
        icon: <IconTerminal2 />,
      },
      {
        title: 'Document Verification',
        description: 'Authenticate ID proofs with AI-powered checks.',
        icon: <IconEaseInOut />,
      },
      {
        title: 'AML Screening',
        description:
          'Detect risks with automated Anti-Money Laundering checks.',
        icon: <IconCurrencyDollar />,
      },
      {
        title: 'Address Verification',
        description: 'Validate user-provided addresses with trusted sources.',
        icon: <IconAdjustmentsBolt />,
      },
      {
        title: 'Bank Statement Analysis',
        description: 'Assess financial stability with automated insights.',
        icon: <IconHeart />,
      },
      {
        title: 'Income Proof Verification',
        description: 'Confirm income details for risk assessment.',
        icon: <IconRouteAltLeft />,
      },
      {
        title: 'E-Sign with Aadhaar',
        description: 'Secure agreements with Aadhaar-based digital signatures.',
        icon: <IconHelp />,
      },
      {
        title: 'Consent-Based Data Sharing',
        description: 'Ensure compliance with user-approved data access.',
        icon: <IconCloud />,
      },
    ],
  },
  {
    value: 'tab-4',
    icon: <Fingerprint className="h-auto w-4 shrink-0" />,
    label: 'Aadhaar E-Sign',
    content: {
      badge: 'Digital Signing',
      title: 'Legally Binding E-Signatures',
      description:
        'Simplify document signing with Aadhaar-based e-signature solutions.',
      buttonText: 'Learn More',
      imageSrc: 'https://shadcnblocks.com/images/block/placeholder-dark-4.svg',
      imageAlt: 'Aadhaar E-Sign',
    },
    features: [
      {
        title: 'Aadhaar OTP E-Sign',
        description: 'Digitally sign documents using Aadhaar-based OTP.',
        icon: <IconTerminal2 />,
      },
      {
        title: 'Biometric E-Sign',
        description: 'Authenticate signatures with Aadhaar biometrics.',
        icon: <IconEaseInOut />,
      },
      {
        title: 'Digital Agreement Signing',
        description: 'Enable legally binding e-signatures for contracts.',
        icon: <IconCurrencyDollar />,
      },
      {
        title: 'E-Mandate Registration',
        description: 'Automate recurring payment authorizations.',
        icon: <IconAdjustmentsBolt />,
      },
      {
        title: 'NSDL-Based E-Sign',
        description: 'Securely sign documents via NSDL integration.',
        icon: <IconHeart />,
      },
      {
        title: 'API-Based E-Sign',
        description: 'Seamlessly integrate Aadhaar e-sign into your workflows.',
        icon: <IconRouteAltLeft />,
      },
      {
        title: 'Bulk Document Signing',
        description: 'Sign multiple documents in a single workflow.',
        icon: <IconHelp />,
      },
      {
        title: 'Legal Validity & Compliance',
        description: 'Ensure compliance with IT Act 2000 regulations.',
        icon: <IconCloud />,
      },
    ],
  },
]

const Feature108 = () => {
  console.log(tabs[0].features)
  return (
    <section className="py-10">
      <div className="mx-auto">
        <div className="flex flex-col items-center gap-4 text-center">
          {/* <Badge
            variant="outline"
            className="bg-primary/10 border border-primary/20 text-xs font-medium text-primary"
          >
            {features.badge}
          </Badge> */}
          <div className="text-xl flex gap-2 justify-center items-center font-semibold md:text-5xl w-full">
            Comprehensive{' '}
            <div className="bg-primary rounded-md p-2 -rotate-2">
              <div className="inline-block rotate-2 text-white">
                Verification{' '}
              </div>
            </div>{' '}
            Solutions
          </div>
          <p className="text-muted-foreground">{features.description}</p>
        </div>
        <Tabs defaultValue={tabs[0].value} className="mt-8">
          <TabsList className="flex flex-col justify-center gap-4 sm:flex-row md:gap-10">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-muted-foreground data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                {tab.icon} {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="w-full">
            {tabs.map((tab) => (
              <TabsContent
                key={tab.value}
                value={tab.value}
                className="grid place-items-center gap-20 lg:grid-cols-1 lg:gap-10"
              >
                {console.log(tab.features)}
                <FeaturesSectionWithHoverEffects features={tab.features} />
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  )
}

export { Feature108 }
