import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import Wrapper from './Wrapper'

const faq = {
  heading: 'Frequently asked questions',
  description:
    'Find answers to common questions about our verification APIs. Need more help? Contact our support team anytime!',
}

const faqItems = [
  {
    id: 'faq-1',
    question: 'What verification services do you offer?',
    answer:
      'We provide Business Verification, Identity Verification, KYC/KYB Compliance, and Aadhaar E-Sign solutions.',
  },
  {
    id: 'faq-2',
    question: "How do I integrate your API's?",
    answer:
      'Our APIs come with detailed documentation, code samples, and sandbox environments for seamless integration.',
  },
  {
    id: 'faq-3',
    question: 'Are your APIs compliant with regulations?',
    answer:
      'Yes, we follow industry standards and legal requirements for data security and compliance.',
  },
  {
    id: 'faq-4',
    question: 'What industries can use your services?',
    answer:
      'Our APIs are designed for fintech, banking, insurance, e-commerce, and other industries needing secure verifications.',
  },
  {
    id: 'faq-5',
    question: 'Do you offer customer support?',
    answer:
      'Yes, we provide 24/7 technical and onboarding support to ensure smooth integration.',
  },
]

const FAQCTA = ({
  supportHeading = 'Need more support?',
  supportDescription = 'Our dedicated support team is here to help you with any questions or concerns. Get in touch with us for personalized assistance.',
  supportButtonText = 'Contact Support',
  supportButtonUrl = 'https://www.shadcnblocks.com',
}) => {
  return (
    <section className="">
      <div className="space-y-16">
        <Wrapper>
          <div className="mx-auto flex max-w-3xl flex-col text-left md:text-center">
            <h2 className="mb-3 md:mb-4 lg:mb-6 text-5xl font-bold leading-[1.2] tracking-tighter text-foreground">
              {faq.heading}
            </h2>
            <p className="text-lg font-medium tracking-tight text-foreground/80">
              {faq.description}
            </p>
          </div>
          <Accordion
            type="single"
            collapsible
            className="mx-auto w-full lg:max-w-3xl"
          >
            {faqItems.map((item) => (
              <AccordionItem key={item.id} value={item.id}>
                <AccordionTrigger className="transition-opacity duration-200 hover:no-underline">
                  <div className="font-medium sm:py-1 lg:py-2 text-lg">
                    {item.question}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="sm:mb-1 lg:mb-2">
                  <div className="text-muted-foreground text-md font-medium">
                    {item.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Wrapper>
        <div className="mx-auto flex  flex-col items-center bg-accent p-4 text-center md:p-6 lg:p-8">
          <div className="relative">
            <Avatar className="absolute mb-4 size-16 origin-bottom -translate-x-[60%] scale-[80%] border md:mb-5">
              <AvatarImage src="https://shadcnblocks.com/images/block/avatar-2.webp" />
              <AvatarFallback>SU</AvatarFallback>
            </Avatar>
            <Avatar className="absolute mb-4 size-16 origin-bottom translate-x-[60%] scale-[80%] border md:mb-5">
              <AvatarImage src="https://shadcnblocks.com/images/block/avatar-3.webp" />
              <AvatarFallback>SU</AvatarFallback>
            </Avatar>
            <Avatar className="mb-4 size-16 border md:mb-5">
              <AvatarImage src="https://shadcnblocks.com/images/block/avatar-1.webp" />
              <AvatarFallback>SU</AvatarFallback>
            </Avatar>
          </div>
          <h3 className="mb-2 max-w-3xl font-medium lg:text-lg">
            {supportHeading}
          </h3>
          <p className="mb-8 max-w-3xl text-muted-foreground/80 lg:text-lg font-medium tracking-tight">
            {supportDescription}
          </p>
          <div className="flex w-full flex-col justify-center gap-2 sm:flex-row">
            <Button className="w-full sm:w-auto" asChild>
              <a href={supportButtonUrl} target="_blank">
                {supportButtonText}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export { FAQCTA }
