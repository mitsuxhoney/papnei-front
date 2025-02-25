import { Badge } from '@/components/ui/badge'
import { MagicCard } from './ui/magic-card'
import {
  BanknoteIcon,
  BriefcaseIcon,
  BuildingIcon,
  ClipboardCheckIcon,
  DatabaseIcon,
  FactoryIcon,
  FileTextIcon,
  GlobeIcon,
  KeyIcon,
  PhoneIcon,
  RocketIcon,
  ShieldCheckIcon,
  ShoppingCartIcon,
  UtensilsIcon,
} from 'lucide-react'

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
const BusinessProducts = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col items-center gap-4 text-center mb-6">
        <Badge variant="outline">{BusinessProductsHeading.badge}</Badge>
        <h1 className="max-w-3xl text-3xl font-semibold md:text-4xl">
          {BusinessProductsHeading.title}
        </h1>
        <p className="text-muted-foreground">
          {BusinessProductsHeading.description}
        </p>
      </div>
      <div
        className={
          'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 w-full gap-4 mb-16'
        }
      >
        {businessProducts?.map((item) => (
          <MagicCard key={item.title} className={`p-4 max-sm:h-[180px]`}>
            <div className="w-full flex flex-col gap-4">
              <div className="">{item.icon}</div>
              <div className="text-md font-semibold md:text-lg">
                {item.title}
              </div>

              <div className="text-muted-foreground">{item.description}</div>
            </div>
          </MagicCard>
        ))}
      </div>
    </div>
  )
}

export default BusinessProducts
