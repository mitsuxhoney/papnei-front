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
    <section className="pt-20 pb-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-3xl font-semibold md:text-5xl">
              <div className="inline-block bg-primary rounded-md -rotate-2 p-2">
                <div className="rotate-2 text-white">Industries</div>
              </div>{' '}
              We Serve
            </div>
          </motion.div>
        </div>

        {/* First Row (Moves Forward) */}
        <div
          className="overflow-hidden"
          style={{ transform: 'rotateX(-25deg) rotateY(25deg)' }}
        >
          <motion.div
            ref={containerRef1}
            className="flex"
            animate={{
              x: [0, -100 * industries.length], // Adjust based on your card width
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 25,
                ease: 'linear',
              },
            }}
          >
            {firstRow.map(renderIndustryCard)}
          </motion.div>
        </div>

        {/* Second Row (Moves Backward) */}
        <div
          className="overflow-hidden mt-8"
          style={{ transform: 'rotateX(-25deg) rotateY(25deg)' }}
        >
          <motion.div
            ref={containerRef2}
            className="flex"
            animate={{
              x: [-100 * industries.length, 0], // Moving in opposite direction
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 30, // Slightly different speed for visual interest
                ease: 'linear',
              },
            }}
          >
            {secondRow.map(renderIndustryCard)}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
