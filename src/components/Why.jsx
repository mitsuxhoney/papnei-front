import { cn } from '@/lib/utils'
import {
  IconBoxAlignRightFilled,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from '@tabler/icons-react'
import { motion } from 'framer-motion'
import { Clock, CodeIcon, Server, ShieldCheck } from 'lucide-react'
import { BentoGrid, BentoGridItem } from './ui/bento-grid'
import { Particles } from '@/components/ui/particles'
import { useEffect, useState } from 'react'
import { useTheme } from '@/components/theme-provider'
import { Badge } from '@/components/ui/badge'
import { AnimatedBeamDemo } from './ui/animated-beam-hero'
import { OrbitingCirclesDemo as OrbitingCirclesHome } from './OrbitingCirclesHome'
import { AnimatedListDemo } from './AnimatedListHome'
import LazyLoadMotion from './LazyLoadMotion'
import DisplayCardsHome from './ui/PrismDisplayCardsHome'

const whyData = [
  {
    title: 'Instant API Responses',
    description: 'Real-time verification results.',
    icon: <Clock />,
  },
  {
    title: 'Easy API Integration',
    description: 'Simple, developer-friendly documentation.',
    icon: <CodeIcon />,
  },
  {
    title: 'Secure & Compliant',
    description: 'Meets regulatory standards for verification.',
    icon: <ShieldCheck />,
  },
  {
    title: 'Scalable & Reliable',
    description: 'High uptime and robust infrastructure.',
    icon: <Server />,
  },
  {
    title: 'Scalable && Reliable',
    description: 'High uptime and robust infrastructure.',
    icon: <Server />,
  },
]

const why = {
  badge: 'Benefits',
  title: 'Why Choose Us?',
  description: 'Secure, reliable, and efficient identity verification.',
}

const SkeletonOne = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  }
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  }

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2  items-center space-x-2"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
      >
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
      </motion.div>
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-white dark:bg-black"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
      </motion.div>
    </motion.div>
  )
}
const SkeletonTwo = () => {
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: '100%',
      transition: {
        duration: 0.2,
      },
    },
    hover: {
      width: ['0%', '100%'],
      transition: {
        duration: 2,
      },
    },
  }
  const arr = new Array(6).fill(0)
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      {arr.map((_, i) => (
        <motion.div
          key={'skelenton-two' + i}
          variants={variants}
          style={{
            maxWidth: Math.random() * (100 - 40) + 40 + '%',
          }}
          className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2  items-center space-x-2 bg-neutral-100 dark:bg-black w-full h-4"
        ></motion.div>
      ))}
    </motion.div>
  )
}
const SkeletonThree = () => {
  const variants = {
    initial: {
      backgroundPosition: '0 50%',
    },
    animate: {
      backgroundPosition: ['0, 50%', '100% 50%', '0 50%'],
    },
  }
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: 'reverse',
      }}
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
      style={{
        background:
          'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)',
        backgroundSize: '400% 400%',
      }}
    >
      <motion.div className="h-full w-full rounded-lg"></motion.div>
    </motion.div>
  )
}
const SkeletonFour = () => {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  }
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  }
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] flex-row space-x-2"
    >
      <motion.div
        variants={first}
        className="h-full w-1/3 rounded-2xl p-4 border flex flex-col items-center justify-center"
      >
        <img
          src="https://avatars.githubusercontent.com/u/124599?v=4"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold mt-4">
          Secured Authentication
        </p>
        <p className="border text-xs rounded-full px-2 py-0.5 mt-4">
          Delusional
        </p>
      </motion.div>
      <motion.div className="h-full relative z-20 w-1/3 rounded-2xl p-4 border  flex flex-col items-center justify-center">
        <img
          src="https://avatars.githubusercontent.com/u/124599?v=4"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold mt-4">
          Our APIs is Fast, you know
        </p>
        <p className="border text-xs rounded-full px-2 py-0.5 mt-4">Sensible</p>
      </motion.div>
      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl  border  flex flex-col items-center justify-center"
      >
        <img
          src="https://avatars.githubusercontent.com/u/124599?v=4"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold mt-4">
          I love angular, RSC, and Redux.
        </p>
        <p className="border text-xs rounded-full px-2 py-0.5 mt-4">Helpless</p>
      </motion.div>
    </motion.div>
  )
}
const SkeletonFive = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  }
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  }

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-2xl border p-2  items-start space-x-2"
      >
        <img
          src="https://avatars.githubusercontent.com/u/124599?v=4"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="text-xs">
          There are a lot of cool framerworks out there like React, Angular,
          Vue, Svelte that can make your life ....
        </p>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border p-2 items-center justify-end space-x-2 w-3/4 ml-auto"
      >
        <p className="text-xs ">Use PHP.</p>
        <div className="h-6 w-6 rounded-full bg-gradient-to-r flex-shrink-0" />
      </motion.div>
    </motion.div>
  )
}
const items = [
  {
    title: 'AI Powered Verification',
    description: (
      <span className="text-sm">
        Experience the power of AI in Verification.
      </span>
    ),
    header: (
      <LazyLoadMotion>
        <AnimatedListDemo />
      </LazyLoadMotion>
    ),
    className: 'max-md:col-span-2 lg:col-span-1',
    icon: <IconClipboardCopy className="h-4 w-4" />,
  },
  {
    title: 'Automated Scanning',
    description: (
      <span className="text-sm">
        Let AI handle the proofreading of your documents.
      </span>
    ),
    header: (
      <LazyLoadMotion>
        <OrbitingCirclesHome />
      </LazyLoadMotion>
    ),
    className: 'max-md:col-span-2 lg:col-span-1',
    icon: <IconFileBroken className="h-4 w-4" />,
  },
  {
    title: 'One to Many Integrations',
    description: (
      <span className="text-sm">Get one to many integration benefits.</span>
    ),
    header: (
      <LazyLoadMotion>
        <AnimatedBeamDemo />
      </LazyLoadMotion>
    ),
    className: 'max-md:col-span-2 lg:col-span-1',
    icon: <IconSignature className="h-4 w-4" />,
  },
  {
    title: 'Document Analysis',
    description: (
      <span className="text-sm">
        Understand the sentiment of your text with AI analysis.
      </span>
    ),
    header: <SkeletonFour />,
    className: 'max-md:col-span-2 lg:col-span-2',
    icon: <IconTableColumn className="h-4 w-4" />,
  },

  {
    title: 'Text Summarization',
    description: (
      <span className="text-sm">
        Summarize your lengthy documents with AI technology.
      </span>
    ),
    header: <SkeletonFive />,
    className: 'max-md:col-span-2 lg:col-span-1 relative z-[0]',
    icon: <IconBoxAlignRightFilled className="h-4 w-4" />,
  },
]

export function Why() {
  const { theme } = useTheme()
  const [color, setColor] = useState('#ffffff')

  useEffect(() => {
    setColor(theme === 'dark' ? '#ffffff' : '#000000')
  }, [theme])
  return (
    <div>
      <div className="flex flex-col items-center gap-4 text-center mb-6">
        <Badge variant="outline">{why.badge}</Badge>
        <h1 className="max-w-2xl text-3xl font-semibold md:text-5xl">
          {why.title}
        </h1>
        <p className="text-muted-foreground">{why.description}</p>
      </div>
      <BentoGrid gap={20}>
        {items.map((item, index) => (
          <BentoGridItem
            key={index}
            title={item.title}
            description={item.description}
            header={item.header}
            className={cn('[&>p:text-lg]', item.className)}
            icon={item.icon}
          ></BentoGridItem>
        ))}
      </BentoGrid>
    </div>
  )
}
