import { cn } from '@/lib/utils'

export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        'grid md:auto-rows grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto ',
        className
      )}
    >
      {children}
    </div>
  )
}

export const BentoGridItem = ({
  className,
  title,
  heading,
  description,
  contentClassName,
  header,
  icon,
}) => {
  return (
    <div
      className={cn(
        'h-[270px] lg:h-[300px] relative overflow-hidden row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4  border justify-between flex flex-col space-y-4',
        className
      )}
    >
      <div
        className={cn(
          'group-hover/bento:translate-x-2 transition duration-200 flex flex-col gap-2',
          contentClassName
        )}
      >
        <div className="text-tertiary text-sm">{title}</div>
        <div className="font-bold text-neutral-600 dark:text-neutral-200">
          {heading}
        </div>
        <div className="font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>
      <div>{header}</div>
    </div>
  )
}
