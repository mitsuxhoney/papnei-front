import React, { useState } from 'react'
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  MessageSquare,
  Star,
} from 'lucide-react'
import { AuroraBackground } from '../../components/ui/aurora-background'
import { SparklesText } from '../../components/ui/sparkle-text'
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
import { Textarea } from '@/components/ui/textarea'
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card'
import { Spotlight } from '../../components/ui/spotlight'
import confetti from 'canvas-confetti'
import toast from 'react-hot-toast'
import { motion } from 'framer-motion'
import { AnimatedTooltip } from '../../components/ui/animated-tooltip'
import { Link } from 'react-router-dom'
import Ripple from '../../components/ui/Ripple'
import Wrapper from '../../components/Wrapper'
import { FAQCTA } from '../../components/faq-cta'

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

const businessHero = {
  heading: 'Get In Touch!',
  description:
    "We're here to help you with any questions or concerns. Reach out to us, and we'll get back to you as soon as possible.",
  button: {
    text: 'Get API Keys',
    url: 'https://www.shadcnblocks.com',
  },
  background: <Ripple />,
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

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  businessName: z
    .string()
    .min(2, { message: 'Business name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Invalid email address.' }),
  phone: z.string().optional(),
  subject: z.string().min(2, { message: 'Please select a subject.' }),
  message: z
    .string()
    .min(10, { message: 'Message must be at least 10 characters.' }),
})

const ContactUs = () => {
  const [formStatus, setFormStatus] = useState(null)
  const [activeTab, setActiveTab] = useState('general')

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      businessName: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
  })

  const launchConfetti = () => {
    const end = Date.now() + 2 * 1000
    const colors = ['#a786ff', '#fd8bbc', '#eca184', '#f8deb1']

    const frame = () => {
      if (Date.now() > end) return

      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },
        colors: colors,
      })
      confetti({
        particleCount: 3,
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

  function onSubmit(values) {
    setFormStatus('success')
    launchConfetti()
    toast.success('Your message has been sent successfully!', {
      duration: 4000,
      icon: '✅',
    })
    console.log(values)
  }

  const contactMethods = [
    {
      icon: <MapPin className="w-6 h-6" strokeWidth={1.5} />,
      title: 'Our Location',
      content: '123 Healthcare Avenue, Medical District, New York, NY 10001',
      action: 'Get Directions',
      url: 'https://maps.google.com',
    },
    {
      icon: <Phone className="w-6 h-6" strokeWidth={1.5} />,
      title: 'Phone Number',
      content: '+1 (555) 123-4567 • +1 (555) 987-6543',
      action: 'Call Now',
      url: 'tel:+15551234567',
    },
    {
      icon: <Mail className="w-6 h-6" strokeWidth={1.5} />,
      title: 'Email Address',
      content: 'contact@papnei.com • support@papnei.com',
      action: 'Send Email',
      url: 'mailto:contact@papnei.com',
    },
    {
      icon: <Clock className="w-6 h-6" strokeWidth={1.5} />,
      title: 'Working Hours',
      content: 'Monday - Friday: 9AM - 5PM • Saturday: 10AM - 2PM',
      badge: 'Open Now',
    },
  ]

  const departments = [
    {
      id: 'general',
      name: 'General Inquiries',
      icon: <MessageSquare size={18} />,
    },
    {
      id: 'sales',
      name: 'Sales & Partnerships',
      icon: <ArrowRight size={18} />,
    },
    {
      id: 'support',
      name: 'Technical Support',
      icon: <AlertCircle size={18} />,
    },
  ]

  const faqItems = [
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
  ]
  const scrollToContactForm = () => {
    const contactFormElement = document.getElementById('contact-form')
    if (contactFormElement) {
      contactFormElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="">
      {/* Hero Section with Animated Gradient */}
      <section className="relative overflow-hidden ">
        {/* Animated particles background */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(100)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-white"
              initial={{
                x: Math.random() * 100 + '%',
                y: Math.random() * 100 + '%',
                opacity: Math.random() * 0.5 + 0.3,
                scale: Math.random() * 0.5 + 0.5,
              }}
              animate={{
                y: [null, Math.random() * 20 - 10 + '%'],
                opacity: [null, Math.random() * 0.3 + 0.2],
                scale: [null, Math.random() * 0.3 + 0.7],
              }}
              transition={{
                duration: Math.random() * 10 + 20,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            />
          ))}
        </div>

        {/* Subtle gradient overlay */}

        {/* SVG wave bottom decoration */}

        <div className="relative z-10 mx-auto">
          <div className="bg-cover bg-center bg-no-repeat bg-[url('@/assets/homeHeroPNG.png')] w-full h-full absolute opacity-80"></div>
          <Wrapper>
            <div className="relative flex flex-col lg:flex-row items-center justify-center py-32">
              {/* Left content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="lg:w-1/2 text-left"
              >
                <div className="relative flex flex-col items-center justify-center text-left">
                  <h1 className="2xl:text-6xl xl:text-6xl text-xl font-semibold sora-heading bg-gradient-to-b from-[#edeffd] to-[#7b9cda] bg-clip-text relative">
                    {businessHero.heading}
                  </h1>

                  <p className="text-balance text-foreground/80 pt-4 lg:text-lg relative text-center">
                    {businessHero.description}
                  </p>
                  <Link to="/contact-us" className="flex gap-2">
                    <Button
                      size="lg"
                      className="mt-8 relative bg-secondary hover:bg-secondary/90 flex items-center"
                    >
                      <p>Schedule a call</p>
                      <ArrowRight />
                    </Button>

                    <Button
                      size="lg"
                      className="mt-8 relative bg-white text-secondary border border-secondary hover:bg-white/80 flex items-center"
                      onClick={scrollToContactForm}
                    >
                      <p>View Support Options</p>
                      <ArrowRight />
                    </Button>
                  </Link>
                </div>
              </motion.div>

              {/* Right content - floating 3D cards */}
            </div>
          </Wrapper>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-center text-5xl font-bold leading-[1.2] sora-heading">
              How to Reach Us
            </h2>
            <p className="text-foreground/80 max-w-2xl mx-auto">
              Multiple ways to connect with our team for support, sales
              inquiries, or general questions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="relative p-6 rounded-xl shadow-md h-full border border-transparent hover:border-primary/20 transition-all duration-300 group">
                  <div className="flex flex-col h-full">
                    <div className="rounded-full bg-secondary/10 w-12 h-12 flex items-center justify-center mb-4 text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                      {method.icon}
                    </div>

                    <h3 className="text-xl font-bold mb-2">{method.title}</h3>

                    <p className="text-muted-foreground mb-4 flex-grow">
                      {method.content}
                    </p>

                    {method.badge && (
                      <span className="absolute top-6 right-6 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-800/30 dark:text-green-400">
                        <span className="mr-1.5 h-2 w-2 rounded-full bg-green-500"></span>
                        {method.badge}
                      </span>
                    )}

                    {method.action && (
                      <a
                        href={method.url}
                        className="text-secondary hover:underline font-medium inline-flex items-center mt-2"
                      >
                        {method.action}
                        <ArrowRight className="ml-1 w-4 h-4" />
                      </a>
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:20px_20px]"></div>
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-center text-5xl font-bold leading-[1.2] sora-heading">
              Send Us a Message
            </h2>
            <p className="text-foreground/80 max-w-2xl mx-auto">
              Choose the right department and we&apos;ll make sure your message
              reaches the right team.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
            {/* Department Selection Sidebar */}
            <div className="lg:col-span-2">
              <Card className="shadow-xl border-black/5 overflow-hidden bg-background/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Contact Departments</CardTitle>
                  <CardDescription>
                    Select the appropriate department for faster assistance
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {departments.map((dept) => (
                      <div
                        key={dept.id}
                        onClick={() => setActiveTab(dept.id)}
                        className={`flex items-center p-4 rounded-lg cursor-pointer transition-all duration-200 ${
                          activeTab === dept.id
                            ? 'bg-secondary text-white shadow-md'
                            : 'bg-card '
                        }`}
                      >
                        <div
                          className={`mr-3 ${
                            activeTab === dept.id
                              ? 'text-white'
                              : 'text-secondary'
                          }`}
                        >
                          {dept.icon}
                        </div>
                        <div>
                          <h4 className="font-medium">{dept.name}</h4>
                        </div>
                        {activeTab === dept.id && (
                          <CheckCircle className="ml-auto w-5 h-5" />
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>

                <div className="p-6 border-t bg-muted/50">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary mr-4">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-medium">Average Response Time</h4>
                      <p className="text-sm text-muted-foreground">
                        Within 24 hours
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Contact Form with Spotlight Effect */}
            <div className="lg:col-span-3" id="contact-form">
              <div className="relative">
                <Spotlight
                  className="hidden md:block"
                  fill="white"
                  size={300}
                />

                <Card className="relative border rounded-xl w-full flex flex-col bg-black/[0.96] antialiased bg-grid-white/[0.02] overflow-hidden shadow-2xl">
                  <BorderBeam duration={8} size={200} />

                  <CardHeader className="mt-4">
                    <CardTitle className="text-2xl">
                      {departments.find((d) => d.id === activeTab)?.name ||
                        'Contact Form'}
                    </CardTitle>
                    <CardDescription>
                      We&apos;ll get back to you as soon as possible.
                    </CardDescription>
                  </CardHeader>

                  {formStatus === 'success' ? (
                    <CardContent className="flex flex-col items-center justify-center text-center py-10">
                      <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 mb-4">
                        <CheckCircle className="w-8 h-8" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                      <p className="text-muted-foreground mb-6">
                        Thank you for reaching out. We'll be in touch shortly.
                      </p>
                      <Button onClick={() => setFormStatus(null)}>
                        Send Another Message
                      </Button>
                    </CardContent>
                  ) : (
                    <CardContent>
                      <Form {...form}>
                        <form
                          onSubmit={form.handleSubmit(onSubmit)}
                          className="space-y-5"
                        >
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <FormField
                              control={form.control}
                              name="name"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Full Name</FormLabel>
                                  <FormControl>
                                    <Input
                                      placeholder="Enter your name"
                                      {...field}
                                    />
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
                                      placeholder="Enter your business name"
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <FormField
                              control={form.control}
                              name="email"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Email Address</FormLabel>
                                  <FormControl>
                                    <Input
                                      placeholder="Enter your email"
                                      {...field}
                                    />
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
                                  <FormLabel>Phone Number (Optional)</FormLabel>
                                  <FormControl>
                                    <Input
                                      placeholder="Enter your phone number"
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>

                          <FormField
                            control={form.control}
                            name="subject"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Subject</FormLabel>
                                <Select
                                  onValueChange={field.onChange}
                                  defaultValue={field.value}
                                  className="bg-secondary focus:outline-none"
                                >
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue
                                        className="hover:bg-secondary"
                                        placeholder="Select a subject"
                                      />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="general">
                                      General Inquiry
                                    </SelectItem>
                                    <SelectItem value="support">
                                      Technical Support
                                    </SelectItem>
                                    <SelectItem value="sales">
                                      Business & Sales
                                    </SelectItem>
                                    <SelectItem value="billing">
                                      Billing Question
                                    </SelectItem>
                                    <SelectItem value="other">Other</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Your Message</FormLabel>
                                <FormControl>
                                  <Textarea
                                    placeholder="How can we help you today?"
                                    className="min-h-32 resize-none"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <div className="flex justify-end pt-2">
                            <Button
                              type="submit"
                              className="gap-2 bg-secondary"
                            >
                              Send Message
                              <Send className="w-4 h-4" />
                            </Button>
                          </div>
                        </form>
                      </Form>
                    </CardContent>
                  )}
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map and Location Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-center text-5xl font-bold leading-[1.2] sora-heading">
              Find Our Location
            </h2>
            <p className="text-foreground/80 max-w-2xl mx-auto">
              Visit our office or plan your trip with the transportation options
              below.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="overflow-hidden shadow-lg border-0">
                <div className="h-96 w-full">
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
              </Card>
            </div>

            <div>
              <Card className="h-full flex flex-col justify-center">
                <CardHeader>
                  <CardTitle>Our Location</CardTitle>
                  <CardDescription>
                    Multiple ways to reach our office
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-medium">Address</h4>
                      <p className="text-muted-foreground">
                        123 Healthcare Avenue
                        <br />
                        Medical District
                        <br />
                        New York, NY 10001
                      </p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full hover:bg-secondary hover:text-white"
                    variant="outline"
                  >
                    Get Directions
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <div className="py-16">
        <FAQCTA FAQCTAData={FAQCTAData} />
      </div>
    </div>
  )
}

export default ContactUs
