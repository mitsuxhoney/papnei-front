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
  title: 'Industries We Serve',
  description: 'Who Can Use Our APIs?',
}

const Who = () => {
  const { theme } = useTheme()
  const [color, setColor] = useState('#ffffff')

  useEffect(() => {
    setColor(theme === 'dark' ? '#ffffff' : '#000000')
  }, [theme])
  return (
    <LazyLoadMotion>
      <div className="w-full">
        <div className="flex flex-col items-center gap-4 text-center mb-6">
          <Badge variant="outline">{who.badge}</Badge>
          <h1 className="max-w-2xl text-3xl font-semibold md:text-4xl">
            {who.title}
          </h1>
          <p className="text-muted-foreground">{who.description}</p>
        </div>
        <div
          className={
            'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-4 lg:h-[200px] mb-16'
          }
        >
          {whoData?.map((item) => (
            <MagicCard key={item.title} className={`p-4 max-sm:h-[180px]`}>
              {/* <Particles
                className="absolute inset-0 z-0"
                quantity={100}
                ease={80}
                color={color}
                refresh
              /> */}
              <div className="w-full flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <div className="">{item.icon}</div>
                  <div className="max-w-2xl text-lg font-semibold md:text-xl">
                    {item.title}
                  </div>
                </div>
                <div className="text-muted-foreground">{item.description}</div>
              </div>
            </MagicCard>
          ))}
        </div>
      </div>
    </LazyLoadMotion>
  )
}

export default Who
