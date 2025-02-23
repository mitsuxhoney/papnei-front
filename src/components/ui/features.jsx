import { Tabs, TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs'
import { Layout, Pointer, Zap } from 'lucide-react'
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from '@tabler/icons-react'
import { Badge } from '@/components/ui/badge'
import { FeaturesSectionWithHoverEffects } from './features-hover'

const tabs = [
  {
    value: 'tab-1',
    icon: <Zap className="h-auto w-4 shrink-0" />,
    label: 'Boost Revenue',
    content: {
      badge: 'Modern Tactics',
      title: 'Make your site a true standout.',
      description:
        'Discover new web trends that help you craft sleek, highly functional sites that drive traffic and convert leads into customers.',
      buttonText: 'See Plans',
      imageSrc: 'https://shadcnblocks.com/images/block/placeholder-dark-1.svg',
      imageAlt: 'placeholder',
    },
    features: [
      {
        title: 'Built for developers',
        description:
          'Built for engineers, developers, dreamers, thinkers and doers.',
        icon: <IconTerminal2 />,
      },
      {
        title: 'Ease of use',
        description:
          "It's as easy as using an Apple, and as expensive as buying one.",
        icon: <IconEaseInOut />,
      },
      {
        title: 'Pricing like no other',
        description:
          'Our prices are best in the market. No cap, no lock, no credit card required.',
        icon: <IconCurrencyDollar />,
      },
      {
        title: '100% Uptime guarantee',
        description: 'We just cannot be taken down by anyone.',
        icon: <IconCloud />,
      },
      {
        title: 'Multi-tenant Architecture',
        description:
          'You can simply share passwords instead of buying new seats',
        icon: <IconRouteAltLeft />,
      },
      {
        title: '24/7 Customer Support',
        description:
          'We are available a 100% of the time. Atleast our AI Agents are.',
        icon: <IconHelp />,
      },
      {
        title: 'Money back guarantee',
        description:
          'If you donot like EveryAI, we will convince you to like us.',
        icon: <IconAdjustmentsBolt />,
      },
      {
        title: 'And everything else',
        description:
          'I just ran out of copy ideas. Accept my sincere apologies',
        icon: <IconHeart />,
      },
    ],
  },
  {
    value: 'tab-2',
    icon: <Pointer className="h-auto w-4 shrink-0" />,
    label: 'Higher Engagement',
    content: {
      badge: 'Expert Features',
      title: 'Boost your site with top-tier design.',
      description:
        'Use stellar design to easily engage users and strengthen their loyalty. Create a seamless experience that keeps them coming back for more.',
      buttonText: 'See Tools',
      imageSrc: 'https://shadcnblocks.com/images/block/placeholder-dark-2.svg',
      imageAlt: 'placeholder',
    },
    features: [
      {
        title: 'Built for developers',
        description:
          'Built for engineers, developers, dreamers, thinkers and doers.',
        icon: <IconTerminal2 />,
      },
      {
        title: 'Ease of use',
        description:
          "It's as easy as using an Apple, and as expensive as buying one.",
        icon: <IconEaseInOut />,
      },
      {
        title: 'Pricing like no other',
        description:
          'Our prices are best in the market. No cap, no lock, no credit card required.',
        icon: <IconCurrencyDollar />,
      },
      {
        title: '100% Uptime guarantee',
        description: 'We just cannot be taken down by anyone.',
        icon: <IconCloud />,
      },
      {
        title: 'Money back guarantee',
        description:
          'If you donot like EveryAI, we will convince you to like us.',
        icon: <IconAdjustmentsBolt />,
      },
      {
        title: 'And everything else',
        description:
          'I just ran out of copy ideas. Accept my sincere apologies',
        icon: <IconHeart />,
      },
      {
        title: 'Multi-tenant Architecture',
        description:
          'You can simply share passwords instead of buying new seats',
        icon: <IconRouteAltLeft />,
      },
      {
        title: '24/7 Customer Support',
        description:
          'We are available a 100% of the time. Atleast our AI Agents are.',
        icon: <IconHelp />,
      },
    ],
  },
  {
    value: 'tab-3',
    icon: <Layout className="h-auto w-4 shrink-0" />,
    label: 'Stunning Layouts',
    content: {
      badge: 'Elite Solutions',
      title: 'Build an advanced web experience.',
      description:
        'Lift your brand with modern tech that grabs attention and drives action. Create a digital experience that stands out from the crowd.',
      buttonText: 'See Options',
      imageSrc: 'https://shadcnblocks.com/images/block/placeholder-dark-3.svg',
      imageAlt: 'placeholder',
    },
    features: [
      {
        title: '100% Uptime guarantee',
        description: 'We just cannot be taken down by anyone.',
        icon: <IconCloud />,
      },
      {
        title: 'Multi-tenant Architecture',
        description:
          'You can simply share passwords instead of buying new seats',
        icon: <IconRouteAltLeft />,
      },
      {
        title: '24/7 Customer Support',
        description:
          'We are available a 100% of the time. Atleast our AI Agents are.',
        icon: <IconHelp />,
      },
      {
        title: 'Money back guarantee',
        description:
          'If you donot like EveryAI, we will convince you to like us.',
        icon: <IconAdjustmentsBolt />,
      },
      {
        title: 'And everything else',
        description:
          'I just ran out of copy ideas. Accept my sincere apologies',
        icon: <IconHeart />,
      },
      {
        title: 'Built for developers',
        description:
          'Built for engineers, developers, dreamers, thinkers and doers.',
        icon: <IconTerminal2 />,
      },
      {
        title: 'Ease of use',
        description:
          "It's as easy as using an Apple, and as expensive as buying one.",
        icon: <IconEaseInOut />,
      },
      {
        title: 'Pricing like no other',
        description:
          'Our prices are best in the market. No cap, no lock, no credit card required.',
        icon: <IconCurrencyDollar />,
      },
    ],
  },
]

const Feature108 = ({
  badge = 'shadcnblocks.com',
  heading = 'A Collection of Components Built With Shadcn & Tailwind',
  description = 'Join us to build flawless web solutions.',
}) => {
  console.log(tabs[0].features)
  return (
    <section className="py-16">
      <div className="mx-auto">
        <div className="flex flex-col items-center gap-4 text-center">
          <Badge variant="outline">{badge}</Badge>
          <h1 className="max-w-2xl text-3xl font-semibold md:text-4xl">
            {heading}
          </h1>
          <p className="text-muted-foreground">{description}</p>
        </div>
        <Tabs defaultValue={tabs[0].value} className="mt-8">
          <TabsList className="flex flex-col justify-center gap-4 sm:flex-row md:gap-10">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-muted-foreground data-[state=active]:bg-muted data-[state=active]:text-primary"
              >
                {tab.icon} {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="w-full">
            {tabs.map((tab) => (
              <TabsContent
                key={tab.value}
                value={tab.value}
                className="grid place-items-center gap-20 lg:grid-cols-1 lg:gap-10"
              >
                {console.log(tab.features)}
                <FeaturesSectionWithHoverEffects features={tab.features} />
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  )
}

export { Feature108 }
