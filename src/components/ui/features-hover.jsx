import { cn } from '@/lib/utils'

export function FeaturesSectionWithHoverEffects({ features }) {
  console.log('Features: ', features)
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 pt-4 max-w-7xl mx-auto">
      {features?.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  )
}

const Feature = ({ title, description, icon, index, iconColor }) => {
  return (
    <div
      className={cn(
        'flex flex-col lg:border-r py-5 relative group/feature mt-2',
        (index === 0 || index === 4) && 'lg:border-l border-secondary/20',
        index < 4 && 'lg:border-b border-secondary/20'
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-secondary/10 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-secondary/10 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div
        className={cn(
          'mb-4 relative z-10 ml-8 w-8 h-8 p-1.5 rounded-full flex items-center justify-center font-bold text-lg',
          iconColor
        )}
      >
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-secondary/20 dark:bg-neutral-700 group-hover/feature:bg-secondary transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 font-[650] transition duration-200 inline-block text-secondary">
          {title}
        </span>
      </div>
      <p className="text-sm text-muted-foreground max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  )
}
