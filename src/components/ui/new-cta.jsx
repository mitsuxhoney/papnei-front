import { motion } from 'framer-motion'
import {
  ArrowRight,
  Zap,
  Shield,
  CheckCircle2,
  Key,
  AlertCircle,
  Briefcase,
  Mail,
  Building2,
  User,
} from 'lucide-react'
import Wrapper from '../Wrapper'
import { BorderBeamForm } from '../border-beam-form'
import IndustryCarousel from '../IndustryCarousel'
import CTA from '@/assets/cta-image.png'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import newCTAImage from '../../assets/cta-image.png'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  businessName: z
    .string()
    .min(2, { message: 'Business Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Invalid email address.' }),
  workEmail: z.string().email({ message: 'Invalid work email address.' }),
})

export function Connect() {
  const navigate = useNavigate()
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
    toast.success('Your data is successfully submitted.', {
      duration: 4000,
    })
  }
  const benefits = [
    { icon: Shield, text: 'Enterprise-grade security' },
    { icon: Zap, text: 'Lightning-fast verification' },
    { icon: CheckCircle2, text: '99.9% accuracy rate' },
  ]

  return (
    <section className="py-24 relative overflow-hidden bg-[#EAB308]/10">
      <Wrapper>
        <div className="absolute inset-0 bg-grid-primary-700/[0.05] -z-10" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 text-left flex flex-col items-start w-full"
            >
              <div className="inline-flex items-center px-4 py-2 bg-white/80 rounded-full mb-6">
                <Zap className="h-4 w-4 text-secondary mr-2" />
                <span className="text-sm font-medium text-secondary">
                  Ready to Get Started?
                </span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-secondary sora-heading mb-6 leading-tight">
                Transform Your
                <span className="block mt-2">
                  <span className=" bg-clip-text">Verification Process</span>
                </span>
              </h2>

              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="flex items-center text-[#34D399]"
                  >
                    <benefit.icon className="h-5 w-5 mr-3 text-secondary" />
                    <span className="text-secondary">{benefit.text}</span>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col gap-4 text-sm lg:flex-row lg:gap-4 lg:text-md">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="default"
                      className="bg-gradient-to-r rounded-xl from-secondary to-secondary/80 px-6 py-3 h-12 text-primary-foreground hover:opacity-90 transition-all duration-200"
                    >
                      Get API Keys
                      <ArrowRight />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[600px] p-0 overflow-hidden select-none">
                    <div className="bg-gradient-to-br from-secondary/10 via-secondary/5 to-transparent p-6 pb-8 relative">
                      <div className="absolute inset-0 bg-[linear-gradient(40deg,transparent_25%,rgba(68,68,68,0.05)_50%,transparent_75%)] opacity-20" />
                      <DialogHeader>
                        <DialogTitle className="text-2xl font-bold tracking-tight bg-clip-text text-secondary bg-gradient-to-r from-secondary to-/80 flex items-center gap-2">
                          <Key className="w-6 h-6" />
                          Get Your API Keys
                        </DialogTitle>
                        <DialogDescription className="text-foreground/80 mt-2">
                          Join thousands of developers building amazing
                          applications with our API.
                        </DialogDescription>
                      </DialogHeader>
                    </div>

                    <div className="p-6 space-y-6">
                      <Form {...form}>
                        <form className="space-y-4">
                          <div className="grid gap-4">
                            <FormField
                              control={form.control}
                              name="name"
                              render={({ field }) => (
                                <FormItem>
                                  <FormControl>
                                    <div className="relative">
                                      <User className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                                      <Input
                                        placeholder="Name"
                                        {...field}
                                        className="w-full pl-10 transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                                      />
                                    </div>
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
                                  <FormControl>
                                    <div className="relative">
                                      <Building2 className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                                      <Input
                                        placeholder="Business Name"
                                        {...field}
                                        className="w-full pl-10 transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                                      />
                                    </div>
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
                                  <FormControl>
                                    <div className="relative">
                                      <Mail className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                                      <Input
                                        type="email"
                                        placeholder="Email"
                                        {...field}
                                        className="w-full pl-10 transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                                      />
                                    </div>
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
                                  <FormControl>
                                    <div className="relative">
                                      <Briefcase className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                                      <Input
                                        type="email"
                                        placeholder="Work Email"
                                        {...field}
                                        className="w-full pl-10 transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                                      />
                                    </div>
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>

                          <div className="bg-secondary/10 rounded-lg p-4 mt-6">
                            <div className="flex items-start gap-3">
                              <AlertCircle className="w-5 h-5 text-muted-foreground mt-0.5" />
                              <div className="text-sm text-foreground/80">
                                <p className="font-medium mb-1">
                                  Important Note
                                </p>
                                <p>
                                  Your API keys will be sent to both email
                                  addresses for security purposes. Please ensure
                                  they are correct.
                                </p>
                              </div>
                            </div>
                          </div>

                          <DialogFooter className="flex justify-end gap-4 pt-4 border-t mt-6">
                            <Button
                              type="submit"
                              className="bg-gradient-to-r from-secondary to-secondary/80 text-primary-foreground hover:opacity-90 transition-all duration-200 min-w-[140px]"
                            >
                              <Key className="w-4 h-4 mr-2" />
                              Get your API key
                            </Button>
                          </DialogFooter>
                        </form>
                      </Form>
                    </div>
                  </DialogContent>
                </Dialog>

                <motion.button
                  className="backdrop-blur-sm text-secondary font-medium text-md rounded-xl px-6 py-3 hover:bg-white/20 transition-colors border border-secondary"
                  onClick={() => {
                    navigate('/contact-us')
                    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' })
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Contact Us
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 rounded-2xl p-8 relative md:h-auto"
            >
              {/* Add carousel background with revelrse direction */}
              <div className="w-full absolute inset-0 -z-10 opacity-70">
                <IndustryCarousel className="-rotate-45 mb-12 lg:py-8" />
              </div>

              <div className="relative">
                <img
                  className="absolute hidden md:inline-block md:-top-20 lg:-top-28 lg:right-8"
                  src={newCTAImage}
                  alt=""
                />
              </div>
            </motion.div>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}
