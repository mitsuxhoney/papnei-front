import {
  BanknoteIcon,
  BriefcaseIcon,
  RocketIcon,
  ShoppingCartIcon,
} from 'lucide-react'
import { MagicCard } from './ui/magic-card'
import { Badge } from '@/components/ui/badge'
import { Particles } from './ui/particles'
import { useEffect, useState } from 'react'
import { useTheme } from '@/components/theme-provider'
import LazyLoadMotion from './LazyLoadMotion'
import { DotPattern } from '@/components/ui/dot-pattern'
import { cn } from '../lib/utils'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Wrapper from './Wrapper'

const whoData = [
  {
    title: 'Fintech & Banking',
    description: 'Automate KYC & KYB for financial services.',
    icon: <BanknoteIcon className="w-4 h-4" />,
  },
  {
    title: 'E-commerce & Marketplaces',
    description: 'Reduce fraud by verifying buyers & sellers.',
    icon: <ShoppingCartIcon className="w-4 h-4" />,
  },
  {
    title: 'Startups & SaaS',
    description: 'Simplify onboarding with fast identity verification.',
    icon: <RocketIcon className="w-4 h-4" />,
  },
  {
    title: 'HR & Staffing',
    description: 'Authenticate employees before hiring.',
    icon: <BriefcaseIcon className="w-4 h-4" />,
  },
]

const who = {
  badge: 'Use Cases',
  title: 'Industries We',
  span: 'Serve',
  description: 'Who Can Use Our APIs?',
}

const Who = () => {
  const { theme } = useTheme()
  const [color, setColor] = useState('#ffffff')

  useEffect(() => {
    setColor(theme === 'dark' ? '#ffffff' : '#000000')
  }, [theme])
  return (
    <div className="relative w-full h-full py-8 overflow-hidden bg-primary/10">
      {/* Move DotPattern outside of LazyLoadMotion so it's always rendered */}
      {/* <DotPattern
        cy={2}
        cr={2}
        cx={2}
        className={cn(
          'absolute inset-0 w-screen min-h-screen opacity-40 z-[-1]',
          '[mask-image:radial-gradient(1200px_circle_at_center,white,transparent)]'
        )}
      /> */}

      <div className="relative z-10 px-4 md:px-14">
        {' '}
        {/* Ensures content is above the pattern */}
        <div className="flex flex-col items-center gap-4 text-center mb-6">
          <Badge
            variant="outline"
            className="bg-primary/10 border border-primary/20 text-xs font-medium text-primary"
          >
            {who.badge}
          </Badge>
          {/* <h1 className="max-w-2xl text-3xl font-semibold md:text-5xl relative">
            {who.title} <span>{who.span}</span>
          </h1> */}
          
          <p className="text-muted-foreground">{who.description}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-4 h-full">
          {whoData?.map((item) => (
            <Card
              key={item.title}
              className="h-full border border-primary/20 text-xs font-medium"
            >
              <div className="w-full flex flex-col gap-4">
                <CardHeader>
                  <div className="flex flex-col gap-2">
                    <div className="text-primary">{item.icon}</div>
                    <CardTitle className="max-w-2xl text-lg font-semibold md:text-xl">
                      {item.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {item.description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Who
