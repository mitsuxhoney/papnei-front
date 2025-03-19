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

const BusinessProducts = ({ grid, gridHeading, className }) => {
  return (
    <div className="w-full">
      <div className="flex flex-col items-center gap-4 text-center mb-6">
        <h1 className="text-3xl font-semibold md:text-5xl max-w-5xl">
          {gridHeading.title}
        </h1>
        <p className="text-muted-foreground">{gridHeading.description}</p>
      </div>
      <div className={cn('grid w-full gap-4 mb-16', className)}>
        {grid?.map((item) => (
          <Card key={item.title} className={`p-4 rounded-[4px] bg-primary/10`}>
            <div className="w-full flex flex-col gap-4">
              <div className="rounded-full bg-primary/10 flex max-w-min p-4 text-primary">
                {item.icon}
              </div>
              <div className="text-lg font-semibold text-primary ">
                {item.title}
              </div>

              <div className="text-sm text-black mb-4">{item.description}</div>
              <Link to={item.url}>{item.button}</Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default BusinessProducts
