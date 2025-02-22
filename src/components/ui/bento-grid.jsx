import { cn } from '@/lib/utils'
import { BorderBeam } from './border-beam'
import { Card } from '@/components/ui/card'
import { useTheme } from '@/components/theme-provider'
import { MagicCard } from './magic-card'

export const BentoGrid = ({ className, children }) => {
  return (
    <div>
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-semibold lg:text-4xl">
          Complete Identity Verification Suite
        </h2>
        <p className="text-sm font-normal text-muted-foreground lg:text-lg">
          Everything you need to verify and authenticate customers in your
          application
        </p>
      </div>
      <div
        className={cn(
          'grid md:auto-rows-[18rem] grid-cols-1 gap-4 md:grid-cols-3 justify-between mx-auto w-full',
          className
        )}
      >
        {children}
      </div>
    </div>
  )
}

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}) => {
  const { theme } = useTheme()
  return (
    <MagicCard
      className="cursor-pointer flex flex-col items-center justify-center text-4xl w-full h-[300px] px-8 overflow-hidden"
      gradientColor={theme === 'dark' ? '#262626' : '#D9D9D955'}
    >
      <div className="flex flex-col gap-4">
        {header}
        <div className="group-hover/bento:translate-x-2 transition duration-200">
          {icon}
          <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
            {title}
          </div>
          <div className="font-sans font-normal text-neutral-600 text-xs text-wrap dark:text-neutral-300">
            {description}
          </div>
        </div>
      </div>
    </MagicCard>
  )
}
