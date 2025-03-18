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
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useEffect, useState } from 'react'
export function Industries() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    slidesToScroll: 1,
  })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState([])
  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  )
  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])
  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    console.log('Scroll Snaps:', emblaApi.scrollSnapList()) // Debugging
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi, onSelect])
  const industries = [
    {
      icon: Building2,
      name: 'Fintech',
      description: 'Digital payment platforms and neobanks',
      features: [
        'KYC Verification',
        'Bank Account Validation',
        'Transaction Monitoring',
      ],
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Landmark,
      name: 'Banking',
      description: 'Traditional banks and financial institutions',
      features: [
        'Identity Verification',
        'Fraud Prevention',
        'Compliance Checks',
      ],
      color: 'from-emerald-500 to-emerald-600',
    },
    {
      icon: ShieldCheck,
      name: 'Insurance',
      description: 'Insurance providers and InsurTech',
      features: [
        'Claims Verification',
        'Risk Assessment',
        'Document Authentication',
      ],
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Building,
      name: 'Real Estate',
      description: 'Property management and real estate firms',
      features: [
        'Tenant Screening',
        'Property Verification',
        'Background Checks',
      ],
      color: 'from-pink-500 to-pink-600',
    },
    {
      icon: Plane,
      name: 'Travel',
      description: 'Airlines and travel companies',
      features: [
        'Passport Verification',
        'Visa Validation',
        'Travel Document Check',
      ],
      color: 'from-cyan-500 to-cyan-600',
    },
    {
      icon: ShoppingBag,
      name: 'E-commerce',
      description: 'Online marketplaces and retailers',
      features: [
        'Seller Verification',
        'Business Authentication',
        'Payment Validation',
      ],
      color: 'from-amber-500 to-amber-600',
    },
    {
      icon: Stethoscope,
      name: 'Healthcare',
      description: 'Healthcare providers and services',
      features: [
        'Medical License Verification',
        'Patient ID Validation',
        'Insurance Verification',
      ],
      color: 'from-red-500 to-red-600',
    },
    {
      icon: Wallet,
      name: 'Crypto',
      description: 'Cryptocurrency and blockchain platforms',
      features: [
        'Wallet Verification',
        'KYC/AML Compliance',
        'Transaction Validation',
      ],
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: GraduationCap,
      name: 'Education',
      description: 'Educational institutions and EdTech',
      features: [
        'Student Verification',
        'Credential Validation',
        'Academic Document Check',
      ],
      color: 'from-teal-500 to-teal-600',
    },
    {
      icon: Truck,
      name: 'Logistics',
      description: 'Transportation and logistics companies',
      features: [
        'Driver Verification',
        'Vehicle Documentation',
        'License Validation',
      ],
      color: 'from-indigo-500 to-indigo-600',
    },
    {
      icon: Home,
      name: 'Hospitality',
      description: 'Hotels and hospitality services',
      features: ['Guest Verification', 'Booking Validation', 'Identity Checks'],
      color: 'from-rose-500 to-rose-600',
    },
    {
      icon: Briefcase,
      name: 'Enterprise',
      description: 'Large corporations and businesses',
      features: [
        'Employee Verification',
        'Vendor Validation',
        'Corporate Compliance',
      ],
      color: 'from-violet-500 to-violet-600',
    },
  ]
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 -z-10" />
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              Tailored verification solutions for every sector
            </p>
          </motion.div>
        </div>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] pl-4"
              >
                <div className="group relative p-6 bg-white rounded-2xl border border-primary-100 hover:border-primary-200 transition-all duration-300 hover:shadow-sm h-full">
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${industry.color} group-hover:scale-110 transition-transform duration-300`}
                    >
                      <industry.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                        {industry.name}
                      </h3>
                      <p className="text-sm text-secondary-600 mb-4">
                        {industry.description}
                      </p>
                      <ul className="space-y-2">
                        {industry.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-center text-sm text-secondary-700"
                          >
                            <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="flex justify-center gap-2 mt-8">
          {emblaApi &&
            scrollSnaps.length > 0 &&
            scrollSnaps.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === selectedIndex
                    ? 'bg-primary w-6'
                    : 'bg-primary/10 hover:bg-primary/40'
                }`}
                onClick={() => scrollTo(index)}
              />
            ))}
        </div>
      </div>
    </section>
  )
}
