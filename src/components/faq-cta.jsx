import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'

const faqItems = [
  {
    id: 'faq-1',
    question: 'What is the return policy?',
    answer:
      'You can return any item within 30 days of purchase for a full refund, provided it is in its original condition.',
  },
  {
    id: 'faq-2',
    question: 'How do I track my order?',
    answer:
      'Once your order is shipped, you will receive an email with a tracking number. You can use this number on our website to track your order.',
  },
  {
    id: 'faq-3',
    question: 'Do you offer international shipping?',
    answer:
      'Yes, we ship to most countries worldwide. Shipping costs and delivery times vary depending on the destination.',
  },
  {
    id: 'faq-4',
    question: 'Can I change my order after it has been placed?',
    answer:
      'You can change your order within 24 hours of placing it by contacting our customer service team.',
  },
  {
    id: 'faq-5',
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, PayPal, and Apple Pay.',
  },
  {
    id: 'faq-6',
    question: 'How can I contact customer support?',
    answer:
      'You can reach our customer support team via email at support@example.com or by calling 1-800-123-4567.',
  },
  {
    id: 'faq-7',
    question: 'Are there any discounts for bulk purchases?',
    answer:
      'Yes, we offer discounts for bulk purchases. Please contact our sales team for more information.',
  },
]

const FAQCTA = ({
  heading = 'Frequently asked questions',
  description = "Find answers to common questions about our products. Can't find what you're looking for? Contact our support team.",
  items = faqItems,
  supportHeading = 'Need more support?',
  supportDescription = 'Our dedicated support team is here to help you with any questions or concerns. Get in touch with us for personalized assistance.',
  supportButtonText = 'Contact Support',
  supportButtonUrl = 'https://www.shadcnblocks.com',
}) => {
  return (
    <section className="">
      <div className="space-y-16">
        <div className="mx-auto flex max-w-3xl flex-col text-left md:text-center">
          <h2 className="mb-3 md:mb-4 lg:mb-6 text-5xl font-bold leading-[1.2] tracking-tighter text-foreground">
            {heading}
          </h2>
          <p className="text-lg font-medium tracking-tight text-foreground/80">
            {description}
          </p>
        </div>
        <Accordion
          type="single"
          collapsible
          className="mx-auto w-full lg:max-w-3xl"
        >
          {items.map((item) => (
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
