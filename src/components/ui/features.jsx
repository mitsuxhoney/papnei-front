import { Tabs, TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs'
import { File, Fingerprint, IdCard, Layout, Pointer, Zap } from 'lucide-react'
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
    icon: <File className="h-auto w-4 shrink-0" />,
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
        iconColor: 'bg-yellow-500/10 text-yellow-500',
      },
      {
        title: 'PAN Verification',
        description: 'Verify business PAN for compliance and authenticity.',
        icon: <IconEaseInOut />,
        iconColor: 'bg-violet-500/10 text-violet-500',
      },
      {
        title: 'CIN Verification',
        description: 'Check company registration details via MCA records.',
        icon: <IconCurrencyDollar />,
        iconColor: 'bg-cyan-500/10 text-cyan-500',
      },
      {
        title: 'Shop & Establishment Verification',
        description: 'Confirm business registration under state laws.',
        icon: <IconAdjustmentsBolt />,
        iconColor: 'bg-pink-500/10 text-pink-500',
      },
      {
        title: 'Bank Account Verification',
        description: 'Instantly verify business bank account details.',
        icon: <IconHeart />,
        iconColor: 'bg-yellow-500/10 text-yellow-500',
      },
      {
        title: 'UDYAM Registration Check',
        description:
          'Authenticate MSME registration for eligibility verification.',
        icon: <IconRouteAltLeft />,
        iconColor: 'bg-violet-500/10 text-violet-500',
      },
      {
        title: 'FSSAI License Verification',
        description: 'Ensure food businesses are legally registered.',
        icon: <IconHelp />,
        iconColor: 'bg-cyan-500/10 text-cyan-500',
      },
      {
        title: 'Trademark Verification',
        description: 'Validate trademark registration for brand protection.',
        icon: <IconCloud />,
        iconColor: 'bg-pink-500/10 text-pink-500',
      },
    ],
  },
  {
    value: 'tab-2',
    icon: <IdCard className="h-auto w-4 shrink-0" />,
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
        iconColor: 'bg-yellow-500/10 text-yellow-500',
      },
      {
        title: 'PAN Verification',
        description: 'Validate individual PAN details for KYC compliance.',
        icon: <IconEaseInOut />,
        iconColor: 'bg-violet-500/10 text-violet-500',
      },
      {
        title: 'Driving License Check',
        description: 'Confirm license validity and ownership.',
        icon: <IconCurrencyDollar />,
        iconColor: 'bg-cyan-500/10 text-cyan-500',
      },
      {
        title: 'Voter ID Verification',
        description: 'Authenticate voter ID details for user validation.',
        icon: <IconAdjustmentsBolt />,
        iconColor: 'bg-pink-500/10 text-pink-500',
      },
      {
        title: 'Passport Verification',
        description: 'Verify passport details for enhanced identification.',
        icon: <IconHeart />,
        iconColor: 'bg-pink-500/10 text-pink-500',
      },
      {
        title: 'Face Match',
        description: 'Ensure user identity with AI-driven facial recognition.',
        icon: <IconRouteAltLeft />,
        iconColor: 'bg-cyan-500/10 text-cyan-500',
      },
      {
        title: 'OCR-Based Verification',
        description: 'Extract & validate details from ID documents.',
        icon: <IconHelp />,
        iconColor: 'bg-violet-500/10 text-violet-500',
      },
      {
        title: 'Liveness Detection',
        description: 'Prevent fraud with real-time user authentication.',
        icon: <IconCloud />,
        iconColor: 'bg-pink-500/10 text-pink-500',
      },
    ],
  },
  {
    value: 'tab-3',
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
        iconColor: 'bg-yellow-500/10 text-yellow-500',
      },
      {
        title: 'Biometric E-Sign',
        description: 'Authenticate signatures with Aadhaar biometrics.',
        icon: <IconEaseInOut />,
        iconColor: 'bg-cyan-500/10 text-cyan-500',
      },
      {
        title: 'Digital Agreement Signing',
        description: 'Enable legally binding e-signatures for contracts.',
        icon: <IconCurrencyDollar />,
        iconColor: 'bg-violet-500/10 text-violet-500',
      },
      {
        title: 'E-Mandate Registration',
        description: 'Automate recurring payment authorizations.',
        icon: <IconAdjustmentsBolt />,
        iconColor: 'bg-pink-500/10 text-pink-500',
      },
      {
        title: 'NSDL-Based E-Sign',
        description: 'Securely sign documents via NSDL integration.',
        icon: <IconHeart />,
        iconColor: 'bg-pink-500/10 text-pink-500',
      },

      {
        title: 'API-Based E-Sign',
        description: 'Seamlessly integrate Aadhaar e-sign into your workflows.',
        icon: <IconRouteAltLeft />,
        iconColor: 'bg-cyan-500/10 text-cyan-500',
      },
      {
        title: 'Bulk Document Signing',
        description: 'Sign multiple documents in a single workflow.',
        icon: <IconHelp />,
        iconColor: 'bg-violet-500/10 text-violet-500',
      },
      {
        title: 'Legal Validity & Compliance',
        description: 'Ensure compliance with IT Act 2000 regulations.',
        icon: <IconCloud />,
        iconColor: 'bg-yellow-500/10 text-yellow-500',
      },
    ],
  },
]

const Feature108 = () => {
  console.log(tabs[0].features)
  return (
    <section className="py-10">
      <div className="mx-auto">
        <div className="text-center">
          {/* <Badge
            variant="outline"
            className="bg-primary/10 border border-primary/20 text-xs font-medium text-primary"
          >
            {features.badge}
          </Badge> */}
          <div className="mb-4 flex items-center gap-2 justify-center text-center text-wrap text-2xl lg:text-5xl font-bold leading-[1.2]">
            Comprehensive Verification Solutions
          </div>
          <p className="mx-auto mb-8 max-w-lg text-center text-md lg:text-lg font-medium text-foreground/80">
            {features.description}
          </p>
        </div>
        <Tabs defaultValue={tabs[0].value} className="mt-8">
          <TabsList className="flex flex-col justify-center gap-4 sm:flex-row md:gap-10">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-muted-foreground data-[state=active]:bg-secondary data-[state=active]:text-white"
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
