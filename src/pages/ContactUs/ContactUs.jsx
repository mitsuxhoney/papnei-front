import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'
import { AuroraBackground } from '../../components/ui/aurora-background'
import Wrapper from '../../components/Wrapper'
import { SparklesText } from '../../components/ui/sparkle-text'
import ExpandableCardBasic from '../../components/ExpandableCardDemo'
import { MagicCard } from '../../components/ui/magic-card'
import { Button } from '@/components/ui/button'
import { BorderBeam } from '@/components/ui/border-beam'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Input } from '@/components/ui/input'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '../../components/ui/card'
import { Spotlight } from '../../components/ui/spotlight'
import { Connect } from '../../components/ui/new-cta'
import { FAQCTA } from '../../components/faq-cta'
import confetti from 'canvas-confetti'
import toast from 'react-hot-toast'
const FAQCTAData = {
  heading: 'Frequently Asked Questions',
  description:
    "Everything you need to know about our verification solutions. Can't find the answer you're looking for? Feel free to contact our support team.",
  ctaHeading: 'Ready to Get Started?',
  ctaDescription:
    'Join thousands of businesses using our platform for seamless verification and compliance.',
  items: [
    {
      id: 'faq-1',
      question: 'What services do you offer?',
      answer:
        'We provide identity, business, and document verification solutions, including Aadhaar, PAN, GST, bank verification, and more.',
    },
    {
      id: 'faq-2',
      question: 'How secure is your verification process?',
      answer:
        'Our platform uses industry-leading encryption and compliance measures to ensure secure data processing and fraud prevention.',
    },
    {
      id: 'faq-3',
      question: 'Do you provide API access?',
      answer:
        'Yes, we offer developer-friendly APIs for seamless integration into your workflows, ensuring quick and efficient verification.',
    },
    {
      id: 'faq-4',
      question: 'What industries can benefit from your services?',
      answer:
        'Our solutions cater to fintech, banking, e-commerce, insurance, and various other sectors that require identity and compliance verification.',
    },
    {
      id: 'faq-5',
      question: 'Do you offer support for integration?',
      answer:
        'Yes, our support team is available to assist with integration, documentation, and troubleshooting any technical issues.',
    },
  ],
  supportHeading: 'Still have questions?',
  supportDescription:
    "Can't find the answer you're looking for? Our support team is here to help with any technical questions or concerns.",
  supportButtonText: 'Contact Support',
  supportButtonUrl: 'https://yourwebsite.com/contact',
}

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  businessName: z
    .string()
    .min(2, { message: 'Business Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Invalid email address.' }),
  workEmail: z.string().email({ message: 'Invalid work email address.' }),
})

const ContactUs = () => {
  const shoot = () => {
    const end = Date.now() + 1 * 1000 // 3 seconds
    const colors = ['#a786ff', '#fd8bbc', '#eca184', '#f8deb1']

    const frame = () => {
      if (Date.now() > end) return

      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },
        colors: colors,
      })
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 0.5 },
        colors: colors,
      })

      requestAnimationFrame(frame)
    }

    frame()
  }

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      businessName: '',
      email: '',
      workEmail: '',
    },
  })
  function onSubmit(values) {
    shoot()
    toast.success('Your data is successfully submitted.', {
      duration: 4000,
    })
  }
  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative">
        <AuroraBackground className="h-full py-24">
          <div className="mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Get in Touch
              </h1>
              <p className="text-xl mb-8">
                We&apos;re here to answer your questions and help you find the
                right solutions for your healthcare needs.
              </p>
            </div>
          </div>
        </AuroraBackground>
      </section>

      {/* Contact Information Section */}
      <section className="py-16">
        <div className=" mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <MagicCard className="p-6 rounded-lg shadow-md text-left h-full max-sm:h-full">
              <div className="rounded-full inline-flex items-center justify-center mb-4">
                <MapPin className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold mb-2">Our Location</h3>
              <p className="text-muted-foreground">
                123 Healthcare Avenue, Medical District, City, Country
              </p>
            </MagicCard>

            <MagicCard className=" p-6 rounded-lg shadow-md text-left h-full max-sm:h-full">
              <div className="rounded-full inline-flex items-center justify-center mb-4">
                <Phone className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold  mb-2">Phone Number</h3>
              <p className="text-muted-foreground">+1 (555) 123-4567</p>
              <p className="text-muted-foreground">+1 (555) 987-6543</p>
            </MagicCard>

            <MagicCard className=" p-6 rounded-lg shadow-md text-left h-full max-sm:h-full">
              <div className="rounded-full inline-flex items-center justify-center mb-4">
                <Mail className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold  mb-2">Email Address</h3>
              <p className="text-muted-foreground">contact@papnei.com</p>
              <p className="text-muted-foreground">support@papnei.com</p>
            </MagicCard>

            <MagicCard className=" p-6 rounded-lg shadow-md text-left h-full max-sm:h-full">
              <div className="rounded-full inline-flex items-center justify-center mb-4">
                <Clock className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold mb-2">Working Hours</h3>
              <p className="text-muted-foreground">
                Monday - Friday: 9AM - 5PM
              </p>
              <p className="text-muted-foreground">Saturday: 10AM - 2PM</p>
            </MagicCard>
          </div>
        </div>
      </section>

      {/* Contact Form and Map Section */}
      <section className="py-16">
        <div className="mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Contact Form */}

              <Card className="relative border rounded-lg w-full flex flex-col bg-black/[0.96] antialiased bg-grid-white/[0.02] overflow-hidden">
                <BorderBeam duration={8} size={200} />
                <CardHeader className="mt-4">
                  <CardTitle>Send Us a Message</CardTitle>
                  <CardDescription>
                    Get in touch with us for any inquiries or support!
                  </CardDescription>
                </CardHeader>

                <CardContent className="">
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="space-y-6"
                    >
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-md">Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter Your Name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="businessName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Business Name</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Enter Your Business Name"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Enter Your Email"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="workEmail"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Work Email</FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="Enter Your Work Email"
                                {...field}
                                className="w-full"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button type="submit">Submit</Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>

              {/* Map */}
              <div className=" p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold  mb-6">Find Us</h2>

                <div className="h-80  rounded-md overflow-hidden mb-6">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30596552044!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1619826381244!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    title="Papnei Office Location"
                  ></iframe>
                </div>

                <div className=" p-5 rounded-md">
                  <h3 className="text-lg font-bold  mb-3">Transportation</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="font-semibold mr-2">By Car:</span>
                      <span>
                        Parking available in the building&apos;s underground
                        garage.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold mr-2">
                        Public Transit:
                      </span>
                      <span>
                        Bus lines 42, 56, and 78 stop directly in front of our
                        building.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold mr-2">Subway:</span>
                      <span>
                        Blue Line - Medical Center Station (5-minute walk).
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}

      <div className="my-16 py-16">
        <FAQCTA FAQCTAData={FAQCTAData} />
      </div>
      {/* CTA Section */}
      <div className="mb-16">
        <Connect />
      </div>
    </div>
  )
}

export default ContactUs
