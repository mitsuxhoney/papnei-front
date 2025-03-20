import { motion } from 'framer-motion'
import {
  Building2,
  Landmark,
  ShieldCheck,
  Briefcase,
  Building,
  Plane,
  ShoppingBag,
  Stethoscope,
  Wallet,
  GraduationCap,
  Truck,
  Home,
} from 'lucide-react'
import { useRef, useEffect } from 'react'
import IndustryCarousel from './IndustryCarousel'

export function Industries() {
  // References for the animation containers
  const containerRef1 = useRef(null)
  const containerRef2 = useRef(null)

  const industries = [
    {
      icon: Building2,
      name: 'Fintech',
      description: 'Digital payment platforms',
      features: ['KYC Verification', 'Bank Validation'],
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Landmark,
      name: 'Banking',
      description: 'Traditional financial institutions',
      features: ['Fraud Prevention', 'Compliance Checks'],
      color: 'from-emerald-500 to-emerald-600',
    },
    {
      icon: ShieldCheck,
      name: 'Insurance',
      description: 'Insurance providers and InsurTech',
      features: ['Risk Assessment', 'Claims Verification'],
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Building,
      name: 'Real Estate',
      description: 'Property management',
      features: ['Tenant Screening', 'Property Verification'],
      color: 'from-pink-500 to-pink-600',
    },
    {
      icon: Plane,
      name: 'Travel',
      description: 'Airlines and travel companies',
      features: ['Visa Validation', 'Passport Verification'],
      color: 'from-cyan-500 to-cyan-600',
    },
    {
      icon: ShoppingBag,
      name: 'E-commerce',
      description: 'Online marketplaces',
      features: ['Seller Verification', 'Payment Validation'],
      color: 'from-amber-500 to-amber-600',
    },
    {
      icon: Stethoscope,
      name: 'Healthcare',
      description: 'Medical services',
      features: ['Patient ID Validation', 'Medical License Verification'],
      color: 'from-red-500 to-red-600',
    },
    {
      icon: Wallet,
      name: 'Crypto',
      description: 'Cryptocurrency platforms',
      features: ['Wallet Verification', 'KYC/AML Compliance'],
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: GraduationCap,
      name: 'Education',
      description: 'Educational institutions',
      features: ['Credential Validation', 'Academic Document Check'],
      color: 'from-teal-500 to-teal-600',
    },
    {
      icon: Truck,
      name: 'Logistics',
      description: 'Transport and logistics',
      features: ['Driver Verification', 'Vehicle Documentation'],
      color: 'from-indigo-500 to-indigo-600',
    },
    {
      icon: Home,
      name: 'Hospitality',
      description: 'Hotels and hospitality services',
      features: ['Guest Verification', 'Booking Validation'],
      color: 'from-rose-500 to-rose-600',
    },
    {
      icon: Briefcase,
      name: 'Enterprise',
      description: 'Large corporations',
      features: ['Employee Verification', 'Vendor Validation'],
      color: 'from-violet-500 to-violet-600',
    },
  ]

  // Duplicate the industries array to create a seamless loop effect
  const duplicatedIndustries = [...industries, ...industries]

  const half = Math.ceil(industries.length / 2)
  const firstRow = duplicatedIndustries.slice(0, industries.length * 2)
  const secondRow = duplicatedIndustries.slice(0, industries.length * 2)

  const renderIndustryCard = (industry, index) => (
    <motion.div
      key={index}
      className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] pl-4"
    >
      <div className="group p-6 bg-white rounded-2xl border hover:border-primary-200 transition-all h-full">
        <div className="flex items-center gap-4">
          <div
            className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${industry.color} group-hover:scale-110 transition-transform`}
          >
            <industry.icon className="h-6 w-6 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold">{industry.name}</h3>
          </div>
        </div>
      </div>
    </motion.div>
  )

  return (
    <section className="relative">
      <div className="mx-auto overflow-hidden">
        <div className="w-screen">
          <IndustryCarousel className="-rotate-3" />
        </div>
      </div>
    </section>
  )
}
