import { useMemo } from 'react'
import {
  Building2,
  Factory,
  Wallet,
  Building,
  Car,
  Home,
  ShoppingBag,
  Stethoscope,
  Cpu,
  Plane,
  Microscope,
  Radio,
  Leaf,
  Lightbulb,
  ShieldCheck,
  Rocket,
  Dumbbell,
  Utensils,
  Palette,
  GraduationCap,
  Ship,
  Camera,
  Music,
  Hammer,
  Shirt,
  Gamepad2,
  Hotel,
  Cog,
  Smartphone,
  Globe,
} from 'lucide-react'
import { cn } from '../lib/utils'

const industries = [
  {
    name: 'Fintech',
    icon: <Wallet strokeWidth={1.5} size={24} />,
    color: 'from-blue-50 to-blue-100/80',
  },
  {
    name: 'Manufacturing',
    icon: <Factory strokeWidth={1.5} size={24} />,
    color: 'from-slate-50 to-slate-100/80',
  },
  {
    name: 'Space Tech',
    icon: <Rocket strokeWidth={1.5} size={24} />,
    color: 'from-purple-50 to-purple-100/80',
  },
  {
    name: 'Banking',
    icon: <Building strokeWidth={1.5} size={24} />,
    color: 'from-green-50 to-green-100/80',
  },
  {
    name: 'Automobiles',
    icon: <Car strokeWidth={1.5} size={24} />,
    color: 'from-red-50 to-red-100/80',
  },
  {
    name: 'Real Estate',
    icon: <Home strokeWidth={1.5} size={24} />,
    color: 'from-yellow-50 to-yellow-100/80',
  },
  {
    name: 'Fitness',
    icon: <Dumbbell strokeWidth={1.5} size={24} />,
    color: 'from-pink-50 to-pink-100/80',
  },
  {
    name: 'Healthcare',
    icon: <Stethoscope strokeWidth={1.5} size={24} />,
    color: 'from-teal-50 to-teal-100/80',
  },
  {
    name: 'Technology',
    icon: <Cpu strokeWidth={1.5} size={24} />,
    color: 'from-indigo-50 to-indigo-100/80',
  },
  {
    name: 'Aviation',
    icon: <Plane strokeWidth={1.5} size={24} />,
    color: 'from-sky-50 to-sky-100/80',
  },
  {
    name: 'Research',
    icon: <Microscope strokeWidth={1.5} size={24} />,
    color: 'from-violet-50 to-violet-100/80',
  },
  {
    name: 'Food Service',
    icon: <Utensils strokeWidth={1.5} size={24} />,
    color: 'from-orange-50 to-orange-100/80',
  },
  {
    name: 'Clean Energy',
    icon: <Leaf strokeWidth={1.5} size={24} />,
    color: 'from-emerald-50 to-emerald-100/80',
  },
  {
    name: 'Creative Arts',
    icon: <Palette strokeWidth={1.5} size={24} />,
    color: 'from-amber-50 to-amber-100/80',
  },
  {
    name: 'Insurance',
    icon: <ShieldCheck strokeWidth={1.5} size={24} />,
    color: 'from-cyan-50 to-cyan-100/80',
  },
  {
    name: 'Education',
    icon: <GraduationCap strokeWidth={1.5} size={24} />,
    color: 'from-rose-50 to-rose-100/80',
  },
  {
    name: 'Maritime',
    icon: <Ship strokeWidth={1.5} size={24} />,
    color: 'from-blue-50 to-blue-100/80',
  },
  {
    name: 'Photography',
    icon: <Camera strokeWidth={1.5} size={24} />,
    color: 'from-slate-50 to-slate-100/80',
  },
  {
    name: 'Entertainment',
    icon: <Music strokeWidth={1.5} size={24} />,
    color: 'from-purple-50 to-purple-100/80',
  },
  {
    name: 'Construction',
    icon: <Hammer strokeWidth={1.5} size={24} />,
    color: 'from-yellow-50 to-yellow-100/80',
  },
  {
    name: 'Fashion',
    icon: <Shirt strokeWidth={1.5} size={24} />,
    color: 'from-pink-50 to-pink-100/80',
  },
  {
    name: 'Gaming',
    icon: <Gamepad2 strokeWidth={1.5} size={24} />,
    color: 'from-indigo-50 to-indigo-100/80',
  },
  {
    name: 'Hospitality',
    icon: <Hotel strokeWidth={1.5} size={24} />,
    color: 'from-teal-50 to-teal-100/80',
  },
  {
    name: 'Engineering',
    icon: <Cog strokeWidth={1.5} size={24} />,
    color: 'from-gray-50 to-gray-100/80',
  },
  {
    name: 'Mobile Tech',
    icon: <Smartphone strokeWidth={1.5} size={24} />,
    color: 'from-violet-50 to-violet-100/80',
  },
  {
    name: 'Global Trade',
    icon: <Globe strokeWidth={1.5} size={24} />,
    color: 'from-emerald-50 to-emerald-100/80',
  },
  {
    name: 'Innovation',
    icon: <Lightbulb strokeWidth={1.5} size={24} />,
    color: 'from-amber-50 to-amber-100/80',
  },
  {
    name: 'Media',
    icon: <Radio strokeWidth={1.5} size={24} />,
    color: 'from-orange-50 to-orange-100/80',
  },
  {
    name: 'Retail',
    icon: <ShoppingBag strokeWidth={1.5} size={24} />,
    color: 'from-rose-50 to-rose-100/80',
  },
  {
    name: 'Services',
    icon: <Building2 strokeWidth={1.5} size={24} />,
    color: 'from-cyan-50 to-cyan-100/80',
  },
]

const shuffleArray = (array) => {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

const IndustryCarousel = ({ className }) => {
  const firstRow = useMemo(() => shuffleArray(industries), [])
  const secondRow = useMemo(() => shuffleArray(industries), [])
  const thirdRow = useMemo(() => shuffleArray(industries), [])

  return (
    <div className="relative w-full">
      {/* First Row - Moving Right */}
      <div className={cn('relative mb-8', className)}>
        <div className="animate-scroll-right flex gap-6 whitespace-nowrap">
          {[...firstRow, ...firstRow].map((industry, index) => (
            <div
              key={index}
              className={`flex items-center gap-3 bg-gradient-to-br ${industry.color} p-3 rounded-xl 
                shadow-[0_8px_30px_rgb(0,0,0,0.03)] backdrop-blur-xl border border-white
 hover:scale-105 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]`}
            >
              <span className="text-gray-500">{industry.icon}</span>
              <span className="text-gray-600 font-light text-sm tracking-wide">
                {industry.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Second Row - Moving Left */}
      <div className={cn('relative mb-8', className)}>
        <div className="animate-scroll-left flex gap-6 whitespace-nowrap">
          {[...secondRow, ...secondRow].map((industry, index) => (
            <div
              key={index}
              className={`flex items-center gap-3 bg-gradient-to-br ${industry.color} p-3 rounded-xl 
                shadow-[0_8px_30px_rgb(0,0,0,0.03)] backdrop-blur-xl border border-white
                 hover:scale-105 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]`}
            >
              <span className="text-gray-500">{industry.icon}</span>
              <span className="text-gray-600 font-light text-sm tracking-wide">
                {industry.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Third Row - Moving Right */}
      <div className={cn('relative', className)}>
        <div className="animate-scroll-right flex gap-6 whitespace-nowrap">
          {[...thirdRow, ...thirdRow].map((industry, index) => (
            <div
              key={index}
              className={`flex items-center gap-3 bg-gradient-to-br ${industry.color} p-3 rounded-xl 
                shadow-[0_8px_30px_rgb(0,0,0,0.03)] backdrop-blur-xl border border-white
                 hover:scale-105 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]`}
            >
              <span className="text-gray-500">{industry.icon}</span>
              <span className="text-gray-600 font-light text-sm tracking-wide">
                {industry.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default IndustryCarousel
