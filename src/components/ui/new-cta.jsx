// import * as React from 'react'
// import { Link } from 'react-router-dom'
// import { cn } from '@/lib/utils'
// import { useAnimate } from 'framer-motion'
// import { buttonVariants } from '@/components/ui/cta-button'
// import {
//   HighlighterItem,
//   HighlightGroup,
//   Particles,
// } from '@/components/ui/cta-highlight'
// import { Mail, MessageCircle, PenTool } from 'lucide-react'
// import { DotPattern } from '@/components/ui/dot-pattern'

// import Wrapper from '../Wrapper'
// import { PulsatingButton } from './pulsating-button'

// export function Connect() {
//   const [scope, animate] = useAnimate()

//   React.useEffect(() => {
//     animate(
//       [
//         ['#pointer', { left: 200, top: 60 }, { duration: 0 }],
//         ['#javascript', { opacity: 1 }, { duration: 0.3 }],
//         [
//           '#pointer',
//           { left: 50, top: 102 },
//           { at: '+0.5', duration: 0.5, ease: 'easeInOut' },
//         ],
//         ['#javascript', { opacity: 0.4 }, { at: '-0.3', duration: 0.1 }],
//         ['#react-js', { opacity: 1 }, { duration: 0.3 }],
//         [
//           '#pointer',
//           { left: 224, top: 170 },
//           { at: '+0.5', duration: 0.5, ease: 'easeInOut' },
//         ],
//         ['#react-js', { opacity: 0.4 }, { at: '-0.3', duration: 0.1 }],
//         ['#typescript', { opacity: 1 }, { duration: 0.3 }],
//         [
//           '#pointer',
//           { left: 88, top: 198 },
//           { at: '+0.5', duration: 0.5, ease: 'easeInOut' },
//         ],
//         ['#typescript', { opacity: 0.4 }, { at: '-0.3', duration: 0.1 }],
//         ['#next-js', { opacity: 1 }, { duration: 0.3 }],
//         [
//           '#pointer',
//           { left: 200, top: 60 },
//           { at: '+0.5', duration: 0.5, ease: 'easeInOut' },
//         ],
//         ['#next-js', { opacity: 0.5 }, { at: '-0.3', duration: 0.1 }],
//       ],
//       {
//         repeat: Number.POSITIVE_INFINITY,
//       }
//     )
//   }, [animate])

//   return (
//     <Wrapper>
//       <section className="relative mx-auto mt-6 max-w-full w-full">
//         <HighlightGroup className="group h-full w-full">
//           <div
//             className="group/item grid w-full h-full md:col-span-6 lg:col-span-12"
//             data-aos="fade-down"
//           >
//             <HighlighterItem className="rounded-xl w-full">
//               <div className="relative z-20 h-full w-full overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800">
//                 <Particles
//                   className="absolute inset-0 -z-10 opacity-10 transition-opacity duration-1000 ease-in-out group-hover/item:opacity-100"
//                   quantity={200}
//                   color={'#555555'}
//                   vy={-0.2}
//                 />
//                 <div className="flex justify-center w-full">
//                   <div className="w-full flex h-full flex-col justify-center gap-10 p-4 md:h-[300px] md:flex-row md:justify-center md:items-center">
//                     <div
//                       className="relative md:mx-auto h-[270px] md:h-[270px] md:w-[300px] w-full"
//                       ref={scope}
//                     >
//                       <PenTool className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2" />
//                       <div
//                         id="next-js"
//                         className="absolute bottom-10 left-14 rounded-3xl border border-slate-400 bg-slate-200 px-2 py-1.5 text-xs opacity-50 dark:border-slate-600 dark:bg-slate-800"
//                       >
//                         Business Verification
//                       </div>
//                       <div
//                         id="react-js"
//                         className="absolute left-2 top-20 rounded-3xl border border-slate-400 bg-slate-200 px-2 py-1.5 text-xs opacity-50 dark:border-slate-600 dark:bg-slate-800"
//                       >
//                         Identity Verification
//                       </div>
//                       <div
//                         id="typescript"
//                         className="absolute bottom-20 right-1 rounded-3xl border border-slate-400 bg-slate-200 px-2 py-1.5 text-xs opacity-50 dark:border-slate-600 dark:bg-slate-800"
//                       >
//                         Aadhar E-Sign
//                       </div>
//                       <div
//                         id="javascript"
//                         className="absolute right-12 top-10 rounded-3xl border border-slate-400 bg-slate-200 px-2 py-1.5 text-xs opacity-50 dark:border-slate-600 dark:bg-slate-800"
//                       >
//                         KYC & KYB
//                       </div>
//                     </div>
//                     <div className="flex h-full flex-col justify-center p-2 gap-3 md:w-[400px] md:mx-auto w-full">
//                       <div className="flex flex-col items-start font-bold text-2xl md:text-4xl">
//                         Ready to Get Started?
//                       </div>
//                       <p className=" text-slate-400">
//                         Feel free to reach out to me!
//                       </p>
//                       <div className="flex flex-wrap gap-4">
//                         <Link
//                           to="/contact-us"
//                           onClick={() => {
//                             window.scrollTo({
//                               top: 0,
//                               left: 0,
//                               behavior: 'smooth',
//                             })
//                           }}
//                         >
//                           <PulsatingButton>Book a call</PulsatingButton>
//                         </Link>
//                         <div className="flex gap-2">
//                           <a
//                             href="mailto:letstalk@xettle.net"
//                             target="_blank"
//                             className={cn(
//                               buttonVariants({
//                                 variant: 'outline',
//                                 size: 'icon',
//                               })
//                             )}
//                           >
//                             <Mail className="h-5 w-5" />
//                           </a>
//                           <Link
//                             to="https://wa.me/8448954679"
//                             target="_blank"
//                             className={cn(
//                               buttonVariants({
//                                 variant: 'outline',
//                                 size: 'icon',
//                               })
//                             )}
//                           >
//                             <MessageCircle className="h-4 w-4" />
//                           </Link>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <DotPattern
//                   cy={2}
//                   cr={2}
//                   cx={2}
//                   className="absolute inset-0 -z-10 h-full w-full opacity-30 [mask-image:radial-gradient(1000px_circle_at_center,white,transparent)]"
//                 />
//               </div>
//             </HighlighterItem>
//           </div>
//         </HighlightGroup>
//       </section>
//     </Wrapper>
//   )
// }

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

              <h2 className="text-4xl lg:text-5xl font-bold text-secondary mb-6 leading-tight">
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

              <div className="flex gap-4 max-sm:text-sm">
                <Dialog>
                  <DialogTrigger asChild>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-8 py-4 max-sm:px-4 max-sm:py-2  text-white hover:text-white bg-secondary rounded-xl hover:bg-secondary/90 transition-colors flex items-center justify-center group font-semibold shadow-lg"
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
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg- backdrop-blur-sm text-secondary rounded-xl hover:bg-white/20 transition-colors border border-secondary"
                  onClick={() => {
                    navigate('/contact-us')
                    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' })
                  }}
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
