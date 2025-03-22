import { Badge } from '@/components/ui/badge'
import { MagicCard } from './ui/magic-card'
import { cn } from '@/lib/utils'
import { Link } from 'react-router-dom'
import {
  BanknoteIcon,
  BriefcaseIcon,
  BuildingIcon,
  ClipboardCheckIcon,
  DatabaseIcon,
  FactoryIcon,
  FileTextIcon,
  GlobeIcon,
  KeyIcon,
  PhoneIcon,
  RocketIcon,
  ShieldCheckIcon,
  ShoppingCartIcon,
  UtensilsIcon,
} from 'lucide-react'
import { Card } from './ui/card'

const BusinessProducts = ({ grid, gridHeading, className, cardClass }) => {
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="flex flex-col items-center gap-2 text-center mb-6">
        <h1 className="text-center text-3xl lg:text-5xl font-bold leading-[1.2] sora-heading">
          {gridHeading.title}
        </h1>
        <p className="mx-auto text-center text-md font-medium text-foreground/80">
          {gridHeading.description}
        </p>
      </div>
      <div className={cn('grid w-full gap-4', className)}>
        {grid?.map((item) => (
          <Card
            key={item.title}
            className={cn(`p-4 rounded-[4px] group`, item.cardClass)}
          >
            <div className="w-full flex flex-col gap-4">
              <div
                className={cn(
                  'rounded-full flex max-w-min p-4',
                  item.iconColor
                )}
              >
                {item.icon}
              </div>
              <div className="text-lg font-semibold">{item.title}</div>

              <div className="text-sm text-foreground/80 mb-4">
                {item.description}
              </div>
              <Link to={item.url} className="">
                {item.button}
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default BusinessProducts
