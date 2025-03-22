import {
  AlertCircle,
  ArrowRight,
  Briefcase,
  Building2,
  Key,
  Mail,
  Sparkle,
  SparklesIcon,
  Star,
  User,
} from 'lucide-react'
import { AnimatedTooltip } from './ui/animated-tooltip'
import { Badge } from '@/components/ui/badge'
import { motion } from 'framer-motion'
import Wrapper from './Wrapper'
import BoxStroke from '@/assets/boxStroke.png'
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

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  businessName: z
    .string()
    .min(2, { message: 'Business Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Invalid email address.' }),
  workEmail: z.string().email({ message: 'Invalid work email address.' }),
})

const NewHomeHero = ({ businessHero }) => {
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
  return (
    <div className="py-20 mx-auto w-full overflow-hidden bg-cover bg-center bg-no-repeat bg-[url('@/assets/homeHeroPNG.png')]">
      <Wrapper>
        <div className="w-full flex flex-col gap-8 items-center mx-auto text-center">
          <Badge
            variant="outline"
            className="bg-secondary border border-primary/20 text-sm p-1.5 font-medium text-white flex gap-1 cursor-pointer hover:bg-secondary/90"
          >
            <SparklesIcon className="" size={14} />
            <span className="">Start Verfying In Minutes</span>
          </Badge>

          <h2 className="text-4xl md:text-6xl xl:text-[84px] xl:leading-[95px] xl:tracking-[-2px] font-bold sora-heading lg:max-w-[76rem] capitalize">
            Onboard{' '}
            <span className="px-2 text-secondary bg-[url('@/assets/boxStroke.png')] bg-contain bg-no-repeat">
              Verified
            </span>
            Customers In Minutes
          </h2>

          <p className="text-balance text-foreground/80 font-medium text-md lg:text-lg relative lg:max-w-[60%]">
            Streamline your verification process with our comprehensive suite of
            API&apos;s. Fast, secure and compliant solutions designed for modern
            enterprises.
          </p>
          <div className=" flex flex-col gap-2 sm:flex-row items-center font-bold">
            <span className="inline-flex items-start -space-x-4">
              <AnimatedTooltip items={businessHero.reviews.avatars} />
            </span>
            <div>
              <p className="text-sm lg:text-md text-center lg:text-left font-medium italic text-secondary">
                We are trusted by fortune {businessHero.reviews.count}+
                companies
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="default"
                  className="bg-gradient-to-r rounded-xl from-secondary to-secondary/80  md:px-6 md:py-3 h-12 text-primary-foreground hover:opacity-90 transition-all duration-200"
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
                      Get Your API Keys
                    </DialogTitle>
                    <DialogDescription className="text-foreground/80 mt-2">
                      Join thousands of developers building amazing applications
                      with our API.
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
                            <p className="font-medium mb-1">Important Note</p>
                            <p>
                              Your API keys will be sent to both email addresses
                              for security purposes. Please ensure they are
                              correct.
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

            <Button
              className="w-full sm:w-auto hover:scale-[scale: 1.02] px-2 py-2 md:px-6 md:py-4 rounded-lg
                bg-white text-secondary border border-secondary hover:bg-white/80 flex items-center font-semibold"
            >
              View Documentation
            </Button>
          </div>
        </div>
      </Wrapper>
    </div>
  )
}

export default NewHomeHero
