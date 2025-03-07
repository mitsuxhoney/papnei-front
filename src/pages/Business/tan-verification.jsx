import { BarChartIcon, KeyIcon, SendIcon, ShieldCheckIcon } from 'lucide-react'
import { BusinessCTA } from '../../components/BusinessCTA'
import BusinessProducts from '../../components/BusinessProducts'
import { AuroraBackground } from '../../components/ui/aurora-background'
import FeaturesSection from '../../components/ui/features-section'
import { InteractiveHoverButton } from '../../components/ui/interactive-hover'
import Wrapper from '../../components/Wrapper'
import { NumberTicker } from '@/components/ui/number-ticker'
import ExpandableCardBasic from '../../components/ExpandableCardDemo'
import { SparklesText } from '../../components/ui/sparkle-text'
import Hero2 from '../../components/Hero2'
import { Connect } from '../../components/ui/new-cta'

const businessHero = {
  heading: 'TAN Verification Secured with XRAY AI',
  description: 'Trust, Transparency, and Security for Your Business',
  button: {
    text: 'Get API Keys',
    url: 'https://www.shadcnblocks.com',
  },
  // background: <Ripple />,
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

const TANVerification = () => {
  return (
    <div>
      <div className="mb-16">
        <Hero2 businessHero={businessHero} />
      </div>
      {/* <Wrapper>
        <section className="py-16">
          <div className=" mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                INTRODUCTION
              </h2>
              <div className="space-y-6 text-muted-foreground text-center">
                <p>
                  Founded in 2018, Papnei began with a simple yet powerful
                  vision: to make healthcare more accessible, efficient, and
                  patient-centered. What started as a small team of dedicated
                  healthcare professionals and technologists has grown into a
                  leading healthcare innovation company.
                </p>
                <p>
                  Our journey has been marked by continuous learning,
                  adaptation, and a relentless focus on improving patient
                  outcomes. Through partnerships with healthcare providers,
                  research institutions, and technology experts, we&apos;ve
                  developed solutions that address real-world healthcare
                  challenges.
                </p>
                <p>
                  Today, Papnei stands at the intersection of healthcare and
                  technology, driving meaningful change in how care is delivered
                  and experienced. Our commitment to excellence and innovation
                  remains as strong as ever as we continue to expand our reach
                  and impact.
                </p>
              </div>
            </div>
          </div>
        </section>
      </Wrapper> */}

      <Wrapper>
        <div className="w-full">
          <FeaturesSection grid={features} gridHeading={featuresHeading} />
        </div>
      </Wrapper>

      <Wrapper>
        <section className="py-16">
          <div className="mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
              <p className="">
                Transforming digital verification with Aadhaar e-Sign technology.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">
                  <NumberTicker
                    value={500}
                    className="font-bold tracking-normal"
                  />
                  +
                </div>
                <p className="text-xl">Organizations </p>
              </div>

              <div className="text-center">
                <div className="text-5xl font-bold mb-2">
                  <NumberTicker
                    value={5}
                    className="font-bold tracking-normal"
                  />
                  M+
                </div>
                <p className="text-xl">Documents Digitally Signed</p>
              </div>

              <div className="text-center">
                <div className="text-5xl font-bold mb-2">
                  <NumberTicker
                    value={99.9}
                    className="font-bold tracking-normal"
                  />
                  %
                </div>
                <p className="text-xl">Success Rate</p>
              </div>

              <div className="text-center">
                <div className="text-5xl font-bold mb-2">
                  <NumberTicker
                    value={100}
                    className="font-bold tracking-normal"
                  />
                  +
                </div>
                <p className="text-xl">Trusted Partners</p>
              </div>
            </div>
          </div>
        </section>
      </Wrapper>

      <Wrapper>
        <section className="py-16 ">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold  mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-muted-foreground">
                  Find answers to common questions about TAN verification and our services.
                </p>
              </div>

              <div className="space-y-4">
                <div className="rounded-md p-5">
                  <h3 className="text-lg font-bold  mb-2">
                    What is TAN verification?
                  </h3>
                  <p className="text-muted-foreground">
                    TAN verification is the process of confirming the validity of a Tax Deduction and Collection Account Number (TAN) issued by the Income Tax Department, ensuring compliance with tax regulations.
                  </p>
                </div>

                <div className="rounded-md p-5">
                  <h3 className="text-lg font-bold  mb-2">
                    How can I verify my TAN?
                  </h3>
                  <p className="text-muted-foreground">
                    You can verify your TAN by entering your TAN number on the official Income Tax Department portal or through our platform, which provides seamless verification and validation services.
                  </p>
                </div>

                <div className="rounded-md p-5">
                  <h3 className="text-lg font-bold  mb-2">
                    Why is TAN verification important?
                  </h3>
                  <p className="text-muted-foreground">
                    TAN verification is crucial for ensuring accurate tax deductions at source (TDS) and compliance with tax laws. It helps businesses and individuals avoid penalties due to incorrect TAN details.
                  </p>
                </div>

                <div className="rounded-md p-5">
                  <h3 className="text-lg font-bold  mb-2">
                    Is my TAN information secure during verification?
                  </h3>
                  <p className="text-muted-foreground">
                    Yes, TAN verification is conducted through secure channels, ensuring data privacy and protection. Our platform follows strict security protocols to safeguard user information.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Wrapper>

      {/* <div className="mb-16">
        <BusinessCTA />
      </div> */}

      <Wrapper>
        <div className="">
          <BusinessProducts
            grid={otherProducts}
            gridHeading={otherProductsHeading}
            className="grid-cols-1 md:grid-cols-2 max-w-3xl mx-auto"
          />
        </div>
      </Wrapper>

      {/* <div className="w-full text-center relative overflow-hidden">
        <div className="w-full mx-auto">
            <Meteors number={50} />
          </div>
        <AuroraBackground className="w-screen h-full py-10">
          <div className="w-full flex flex-col gap-12 items-center">
            <Wrapper>
              <div className="flex flex-col gap-2 items-center">
                <h3 className="text-xl font-semibold md:text-4xl">{heading}</h3>
                <SparklesText
                  className={`text-3xl font-semibold md:text-5xl`}
                  text="Ready To Get Started"
                />
                <TypingAnimation>{heading}</TypingAnimation>
                <p className="text-muted-foreground text-sm lg:text-md">
                  Join thousand of satisfied customers using our platform to
                  build amazing websites.
                </p>
              </div>
            </Wrapper>

            <div className="max-w-md lg:max-w-lg w-full">
              <ExpandableCardBasic />
            </div>
          </div>
        </AuroraBackground>
      </div> */}
      <div className="mb-16 px-16">
        <Connect />
      </div>
    </div>
  )
}


export default TANVerification
