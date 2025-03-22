import { useId } from 'react'
import { cn } from '../../lib/utils'

export function FeaturesSectionWithCardGradient({ grid, gridHeading }) {
  return (
    <div className="w-full py-20">
      <div className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-center text-3xl lg:text-5xl font-bold leading-[1.2] sora-heading">
          {gridHeading.heading}
        </h1>
        <p className="mx-auto text-center text-md font-medium text-foreground/80">
          {gridHeading.description}
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-4 mx-auto mt-8">
        {grid.map((feature) => (
          <div
            key={feature.title}
            className={cn(
              'relative h-[300px] p-6 flex flex-col gap-4 overflow-hidden rounded-[4px] bg-primary/10',
              feature.className
            )}
          >
            <div
              className={cn(
                'rounded-full p-4 bg-primary/10 text-primary max-w-min',
                feature.iconColor
              )}
            >
              {feature.badge}
            </div>
            <p className="text font-semibold text-secondary">{feature.title}</p>
            <p className="text-sm text-black mb-4">{feature.description}</p>
            {feature.component}
          </div>
        ))}
      </div>
    </div>
  )
}

export const Grid = ({ pattern, size }) => {
  const p = pattern ?? [
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
  ]
  return (
    <div className="pointer-events-none absolute left-1/2 top-0  -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r  [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-zinc-900/30 from-zinc-100/30 to-zinc-300/30 dark:to-zinc-900/30 opacity-100">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full  mix-blend-overlay dark:fill-white/10 dark:stroke-white/10 stroke-black/10 fill-black/10"
        />
      </div>
    </div>
  )
}

export function GridPattern({ width, height, x, y, squares, ...props }) {
  const patternId = useId()

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}`}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  )
}
