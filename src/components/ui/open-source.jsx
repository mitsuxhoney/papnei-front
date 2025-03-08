import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

import { cn } from '@/lib/utils'

function StarIcon({ className, delay = 0, size = 'default' }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.2, rotate: 20 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.16, 1, 0.3, 1],
        hover: {
          duration: 0.2,
          ease: 'easeOut',
        },
      }}
      className={className}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn(
          'text-yellow-400',
          size === 'small' ? 'w-4 h-4' : 'w-8 h-8'
        )}
      >
        <path
          d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={cn(size === 'small' && 'opacity-20')}
        />
      </svg>
    </motion.div>
  )
}

function StarsDecoration() {
  return (
    <div className="absolute -top-8 left-1/2 -translate-x-1/2">
      <div className="flex gap-4">
        <StarIcon delay={0.2} />
        <StarIcon delay={0.3} />
        <StarIcon delay={0.4} />
      </div>
    </div>
  )
}

function ContributorAvatars({ contributors }) {
  const displayedContributors = contributors.slice(0, 8)

  return (
    <div className="flex flex-wrap gap-2">
      {displayedContributors.map((contributor) => (
        <motion.div
          key={contributor.login}
          whileHover={{ scale: 1.1, y: -3 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        >
          <img
            src={contributor.avatar_url}
            alt={`${contributor.login}'s avatar`}
            width={40}
            height={40}
            className="rounded-full border-2 border-background"
          />
        </motion.div>
      ))}
    </div>
  )
}

function OpenSourceCard({ repository, stars, contributors }) {
  return (
    <div className="relative grid md:grid-cols-2 gap-8 items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        className="relative flex flex-col items-center text-center"
      >
        <motion.a
          href={`https://github.com/${repository}`}
          target="_blank"
          rel="noreferrer"
          className="relative inline-flex flex-col items-center cursor-pointer"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <StarsDecoration />
          <div className="flex flex-col items-center mt-2">
            <div className="text-7xl font-bold">{stars}</div>
            <div className="text-xl text-muted-foreground mt-2">
              Github Stars
            </div>
          </div>
        </motion.a>
      </motion.div>

      <Separator className="md:hidden" />

      <div className="hidden md:block absolute left-1/2 top-0 h-full">
        <Separator orientation="vertical" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        className="text-center"
      >
        <div className="space-y-4">
          <div>
            <div className="text-3xl font-bold">
              {contributors.length}+ Contributors
            </div>
            <div className="text-lg text-muted-foreground mt-2">
              Join our growing community
            </div>
          </div>
          <a
            href={`https://github.com/${repository}/graphs/contributors`}
            target="_blank"
            rel="noreferrer"
            className="inline-block"
          >
            <div className="flex justify-center">
              <ContributorAvatars contributors={contributors} />
            </div>
          </a>
        </div>
      </motion.div>
    </div>
  )
}

export default function OpenSource({
  title,
  description,
  repository,
  stars,
  contributors,
}) {
  return (
    <section className="container relative py-20">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold tracking-tight max-sm:text-5xl mb-4">
            {title}
          </h2>
          <p className="text-lg max-sm:text-md text-muted-foreground max-w-[800px] mx-auto">
            {description}
          </p>
        </motion.div>
      </div>
      <Separator className="mb-16" />
      <div className="max-w-4xl mx-auto">
        <OpenSourceCard
          repository={repository}
          stars={stars}
          contributors={contributors}
        />
      </div>
    </section>
  )
}
