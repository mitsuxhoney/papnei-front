import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import Wrapper from './Wrapper'
import ExpandableCardBasic from './ExpandableCardDemo'
import { BorderBeamForm } from './border-beam-form'
import { SparklesText } from './ui/sparkle-text'
import { Meteors } from './ui/meteors'
import { AuroraBackground } from './ui/aurora-background'

const faq = {
  heading: 'Frequently Asked',
  span: 'Questions',
  description:
    'Find answers to common questions about our verification APIs. Need more help? Contact our support team anytime!',
}

const FAQCTA = ({
  supportHeading = 'Need more support?',
  supportDescription = 'Our dedicated support team is here to help you with any questions or concerns. Get in touch with us for personalized assistance.',
  supportButtonText = 'Contact Support',
  supportButtonUrl = 'https://www.shadcnblocks.com',
  FAQCTAData,
}) => {
  return (
    <section className="w-full">
      <div className="space-y-16 w-full">
        <Wrapper>
          <div className="mx-auto flex max-w-3xl flex-col text-left md:text-center">
            <div className="mb-4 text-center text-5xl font-bold leading-[1.2] sora-heading">
              {faq.heading} {faq.span}
            </div>
            <p className="mx-auto mb-8 max-w-lg text-center text-lg font-medium text-foreground/80">
              {faq.description}
            </p>
          </div>
          <Accordion
            type="multiple"
            collapsible
            className="mx-auto w-full lg:max-w-3xl"
          >
            {FAQCTAData.items.map((item) => (
              <AccordionItem key={item.id} value={item.id}>
                <AccordionTrigger className="transition-opacity duration-200 hover:no-underline">
                  <div className="font-medium sm:py-1 lg:py-2 text-lg text-left ">
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
        {/* <div className="mx-auto flex flex-col items-center bg-accent p-4 text-center md:p-6 lg:p-8">
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
        </div> */}
      </div>
    </section>
  )
}

export { FAQCTA }
