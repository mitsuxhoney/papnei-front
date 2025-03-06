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

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(50),
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(/^\d{10}$/, 'Phone must be exactly 10 digits'),
  subject: z.string().nonempty('Subject is required'),
})

const ContactUs = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
    },
  })
  function onSubmit(values) {
    console.log(values)
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
                              <Input placeholder="shadcn" {...field} />
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
                              <Input placeholder="shadcn" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone</FormLabel>
                            <FormControl>
                              <Input placeholder="shadcn" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Subject</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select a verified email to display" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="m@example.com">
                                  m@example.com
                                </SelectItem>
                                <SelectItem value="m@google.com">
                                  m@google.com
                                </SelectItem>
                                <SelectItem value="m@support.com">
                                  m@support.com
                                </SelectItem>
                              </SelectContent>
                            </Select>
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
      <section className="py-16 ">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold  mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground">
                Find answers to common questions about Papnei and our services.
              </p>
            </div>

            <div className="space-y-4">
              <div className=" rounded-md p-5">
                <h3 className="text-lg font-bold  mb-2">
                  What healthcare solutions does Papnei offer?
                </h3>
                <p className="text-muted-foreground">
                  Papnei offers a comprehensive suite of healthcare technology
                  solutions, including patient management systems, telehealth
                  platforms, healthcare analytics, and custom software
                  development for healthcare providers.
                </p>
              </div>

              <div className=" rounded-md p-5">
                <h3 className="text-lg font-bold  mb-2">
                  How can I schedule a demo of your products?
                </h3>
                <p className="text-muted-foreground">
                  You can schedule a demo by filling out the contact form on
                  this page, calling our sales team at +1 (555) 123-4567, or
                  emailing us at sales@papnei.com. We&apos;ll be happy to
                  showcase our solutions and discuss how they can benefit your
                  organization.
                </p>
              </div>

              <div className=" rounded-md p-5">
                <h3 className="text-lg font-bold  mb-2">
                  Do you offer technical support for your products?
                </h3>
                <p className="text-muted-foreground">
                  Yes, we provide comprehensive technical support for all our
                  products. Our support team is available Monday through Friday
                  from 9AM to 5PM. For urgent issues, we also offer 24/7
                  emergency support for our enterprise clients.
                </p>
              </div>

              <div className=" rounded-md p-5">
                <h3 className="text-lg font-bold  mb-2">
                  Is my data secure with Papnei&apos;s solutions?
                </h3>
                <p className="text-muted-foreground">
                  Data security is our top priority. All Papnei solutions are
                  HIPAA-compliant and implement industry-leading security
                  measures, including end-to-end encryption, secure
                  authentication, and regular security audits. We are committed
                  to protecting your sensitive healthcare data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="mb-16 px-16">
        <Connect/>
      </div>
    </div>
  )
}

export default ContactUs
