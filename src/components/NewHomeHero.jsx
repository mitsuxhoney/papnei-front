import { ArrowRight, Sparkle, SparklesIcon, Star } from 'lucide-react'
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
          <h2 className="text-[44px] xl:text-[82px] xl:leading-[95px] tracking-[-2px] font-bold max-w-[1171px] capitalize">
            Onboard{' '}
            <span className="px-4 text-secondary bg-[url('@/assets/boxStroke.png')] bg-contain bg-no-repeat">
              Verified
            </span>
            <span className="">Customers In Minutes</span>
          </h2>
          <p className="text-balance text-muted-foreground font-medium text-md lg:text-lg relative lg:max-w-[60%]">
            Streamline your verification process with our comprehensive suite of
            API&apos;s. Fast, secure and compliant solutions designed for modern
            enterprises.
          </p>
          <div className=" flex flex-col gap-2 sm:flex-row items-center font-bold">
            <span className="inline-flex items-start -space-x-4">
              <AnimatedTooltip items={businessHero.reviews.avatars} />
            </span>
            <div>
              <p className="text-left font-medium italic text-secondary">
                We are trusted by fortune {businessHero.reviews.count}+
                companies
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Dialog>
              <DialogTrigger asChild>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto px-6 py-4 bg-secondary text-primary-foreground 
                rounded-lg flex items-center justify-center group font-semibold
                hover:bg-secondary/90 transition-colors"
                >
                  Get API Keys
                  <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
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
              className="w-full sm:w-auto px-6 py-4 rounded-lg
                border border-border bg-primary
                text-primary-foreground hover:bg-primary/90
                transition-colors font-semibold"
            >
              View Documentation
            </motion.button>
          </div>
        </div>
      </Wrapper>
    </div>
  )
}

export default NewHomeHero
