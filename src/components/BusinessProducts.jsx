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

const BusinessProducts = ({ grid, gridHeading, className }) => {
  return (
    <div className="w-full">
      <div className="flex flex-col items-center gap-4 text-center mb-6">
        <Badge variant="outline">{gridHeading.badge}</Badge>
        <h1 className="max-w-3xl text-3xl font-semibold md:text-4xl">
          {gridHeading.title}
        </h1>
        <p className="text-muted-foreground">{gridHeading.description}</p>
      </div>
      <div className={cn('grid w-full gap-4 mb-16', className)}>
        {grid?.map((item) => (
          <MagicCard key={item.title} className={`p-4 max-sm:h-[200px]`}>
            <div className="w-full flex flex-col gap-4">
              <div className="">{item.icon}</div>
              <div className="text-md font-semibold md:text-lg">
                {item.title}
              </div>

              <div className="text-muted-foreground">{item.description}</div>
              <Link to={item.url}>{item.button}</Link>
            </div>
          </MagicCard>
        ))}
      </div>
    </div>
  )
}

export default BusinessProducts
