import { motion } from 'framer-motion'
import { ArrowRight, Zap, Shield, CheckCircle2 } from 'lucide-react'
import Wrapper from '../Wrapper'
import { BorderBeamForm } from '../border-beam-form'
import IndustryCarousel from '../IndustryCarousel'
import CTA from '@/assets/cta-image.png'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
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
    <section className="py-20 bg-secondary/20 relative overflow-hidden">
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
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="py-3 px-6 text-white hover:text-white bg-secondary rounded-xl hover:bg-secondary/90 transition-colors flex items-center justify-center group font-semibold shadow-lg"
                    >
                      GET API KEYS
                      <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Contact Us</DialogTitle>
                      <DialogDescription>
                        Request a callback by filling the details below.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4 ">
                      <Form {...form}>
                        <form
                          onSubmit={form.handleSubmit(onSubmit)}
                          className="space-y-4 flex flex-col"
                        >
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormControl>
                                  <Input
                                    placeholder="Name"
                                    {...field}
                                    className="w-full"
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
                                <FormControl>
                                  <Input
                                    placeholder="Business Name"
                                    {...field}
                                    className="w-full"
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
                                <FormControl>
                                  <Input
                                    type="email"
                                    placeholder="Email"
                                    {...field}
                                    className="w-full"
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
                                <FormControl>
                                  <Input
                                    type="email"
                                    placeholder="Work Email"
                                    {...field}
                                    className="w-full"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <DialogFooter>
                            <Button
                              type="submit"
                              className="w-full bg-secondary hover:bg-secondary/90"
                            >
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
              className="max-sm:hidden md:flex-1 md:rounded-2xl md:p-8 relative"
            >
              {/* Add carousel background with reverse direction */}
              <div className="absolute inset-0 -z-10 opacity-20">
                <IndustryCarousel direction="left" speed={20} />
              </div>

              <div className="relative">
                <img
                  className="absolute hidden md:inline-block md:-top-20 lg:-top-28 lg:right-8"
                  src="/src/assets/cta-image.png"
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
