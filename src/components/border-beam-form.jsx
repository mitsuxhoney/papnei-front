import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import confetti from 'canvas-confetti'
import { Input } from '@/components/ui/input'
import { BorderBeam } from '@/components/ui/magic-border-beam'
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
import toast from 'react-hot-toast'
import { cn } from '../lib/utils'

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  businessName: z
    .string()
    .min(2, { message: 'Business Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Invalid email address.' }),
  workEmail: z.string().email({ message: 'Invalid work email address.' }),
})

export function BorderBeamForm({ className }) {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      businessName: '',
      email: '',
      workEmail: '',
    },
  })

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

  function onSubmit(values) {
    shoot()
    toast.success('Your data is successfully submitted.', {
      duration: 4000,
    })
  }
  return (
    <Card
      className={cn(
        'relative flex flex-col items-start overflow-hidden',
        className
      )}
    >
      <CardHeader>
        <CardTitle>Contact us</CardTitle>
        <CardDescription>
          Request a callback by filling the details below.
        </CardDescription>
      </CardHeader>
      <CardContent>
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
                    <Input placeholder="Name" {...field} className="w-full" />
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
            <Button type="submit" className="w-full">
              Get your API key
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter />
      <BorderBeam
        duration={8}
        size={100}
        className="from-transparent via-red-500 to-transparent"
      />
      <BorderBeam
        duration={8}
        delay={3}
        size={100}
        className="from-transparent via-blue-500 to-transparent"
      />
    </Card>
  )
}
