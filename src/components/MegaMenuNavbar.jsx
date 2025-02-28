import React, { useState, useRef, useEffect } from 'react'
import {
  ChevronDown,
  Menu,
  X,
  Shield,
  UserCheck,
  FileSignature,
  Building,
  User,
  FileText,
  Database,
  CreditCard,
  Briefcase,
  FileCheck,
  Lock,
  Globe,
  Zap,
  BarChart,
  CheckCircle,
  Clock,
  Fingerprint,
  Search,
  AlertCircle,
  FileSearch,
  Landmark,
  DollarSign,
  Percent,
  Award,
  Layers,
  Network,
  PieChart,
  Users,
  Key,
  ShieldCheck,
  Smartphone,
  Mail,
  Printer,
  Calendar,
  HardDrive,
  Cpu,
  Moon,
  Sun,
} from 'lucide-react'
import { cn } from '../lib/utils'
import Wrapper from './Wrapper'
import { Link } from 'react-router-dom'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { ModeToggle } from './ui/mode-toggle'
import { useTheme } from './theme-provider'

// Business Verification Items - 15 items
const businessVerificationItems = [
  {
    id: 'bv-1',
    title: 'Business Registration',
    description: 'Verify company registration status and details',
    icon: <Building className="w-4 h-4 text-blue-600" />,
  },
  {
    id: 'bv-2',
    title: 'GST Verification',
    description: 'Validate GST registration and filing status',
    icon: <Database className="w-4 h-4 text-blue-600" />,
  },
  {
    id: 'bv-3',
    title: 'Director Verification',
    description: 'Verify company directors and their details',
    icon: <Briefcase className="w-4 h-4 text-blue-600" />,
  },
  {
    id: 'bv-4',
    title: 'Financial Health Check',
    description: 'Assess business financial stability and credit score',
    icon: <CreditCard className="w-4 h-4 text-blue-600" />,
  },
  {
    id: 'bv-5',
    title: 'Address Verification',
    description: 'Verify registered business address',
    icon: <Globe className="w-4 h-4 text-blue-600" />,
  },
  {
    id: 'bv-6',
    title: 'Legal Status Check',
    description: 'Check for legal disputes and compliance issues',
    icon: <FileCheck className="w-4 h-4 text-blue-600" />,
  },
  {
    id: 'bv-7',
    title: 'Tax Compliance',
    description: 'Verify tax compliance status and history',
    icon: <DollarSign className="w-4 h-4 text-blue-600" />,
  },
  {
    id: 'bv-8',
    title: 'Credit Score Analysis',
    description: 'Comprehensive business credit score assessment',
    icon: <Percent className="w-4 h-4 text-blue-600" />,
  },
  {
    id: 'bv-9',
    title: 'Ownership Verification',
    description: 'Verify business ownership structure and details',
    icon: <Users className="w-4 h-4 text-blue-600" />,
  },
  {
    id: 'bv-10',
    title: 'Bank Account Verification',
    description: 'Verify business bank account details',
    icon: <Landmark className="w-4 h-4 text-blue-600" />,
  },
  {
    id: 'bv-11',
    title: 'Compliance Certification',
    description: 'Verify business compliance certifications',
    icon: <Award className="w-4 h-4 text-blue-600" />,
  },
  {
    id: 'bv-12',
    title: 'Industry Classification',
    description: 'Verify business industry classification',
    icon: <Layers className="w-4 h-4 text-blue-600" />,
  },
  {
    id: 'bv-13',
    title: 'Business Relationships',
    description: 'Analyze business partnerships and relationships',
    icon: <Network className="w-4 h-4 text-blue-600" />,
  },
  {
    id: 'bv-14',
    title: 'Financial Statements',
    description: 'Verify and analyze business financial statements',
    icon: <PieChart className="w-4 h-4 text-blue-600" />,
  },
  {
    id: 'bv-15',
    title: 'Business License Verification',
    description: 'Verify business licenses and permits',
    icon: <CheckCircle className="w-4 h-4 text-blue-600" />,
  },
]

// Identity Verification Items - 15 items
const identityVerificationItems = [
  {
    id: 'iv-1',
    title: 'Aadhaar Verification',
    description: 'Verify identity using Aadhaar details',
    icon: <User className="w-4 h-4 text-green-600" />,
  },
  {
    id: 'iv-2',
    title: 'PAN Verification',
    description: 'Validate PAN card details and status',
    icon: <FileText className="w-4 h-4 text-green-600" />,
  },
  {
    id: 'iv-3',
    title: 'Voter ID Verification',
    description: 'Verify voter ID card details',
    icon: <UserCheck className="w-4 h-4 text-green-600" />,
  },
  {
    id: 'iv-4',
    title: 'Driving License Check',
    description: 'Validate driving license details and status',
    icon: <FileCheck className="w-4 h-4 text-green-600" />,
  },
  {
    id: 'iv-5',
    title: 'Passport Verification',
    description: 'Verify passport details and validity',
    icon: <Globe className="w-4 h-4 text-green-600" />,
  },
  {
    id: 'iv-6',
    title: 'Biometric Verification',
    description: 'Verify identity using fingerprint or facial recognition',
    icon: <Fingerprint className="w-4 h-4 text-green-600" />,
  },
  {
    id: 'iv-7',
    title: 'Address Verification',
    description: 'Verify residential address details',
    icon: <Search className="w-4 h-4 text-green-600" />,
  },
  {
    id: 'iv-8',
    title: 'Employment Verification',
    description: 'Verify employment history and current status',
    icon: <Briefcase className="w-4 h-4 text-green-600" />,
  },
  {
    id: 'iv-9',
    title: 'Education Verification',
    description: 'Verify educational qualifications and certificates',
    icon: <Award className="w-4 h-4 text-green-600" />,
  },
  {
    id: 'iv-10',
    title: 'Criminal Record Check',
    description: 'Verify criminal record status',
    icon: <AlertCircle className="w-4 h-4 text-green-600" />,
  },
  {
    id: 'iv-11',
    title: 'Bank Account Verification',
    description: 'Verify bank account details and status',
    icon: <Landmark className="w-4 h-4 text-green-600" />,
  },
  {
    id: 'iv-12',
    title: 'Credit Score Check',
    description: 'Verify and analyze personal credit score',
    icon: <DollarSign className="w-4 h-4 text-green-600" />,
  },
  {
    id: 'iv-13',
    title: 'Document Verification',
    description: 'Verify authenticity of submitted documents',
    icon: <FileSearch className="w-4 h-4 text-green-600" />,
  },
  {
    id: 'iv-14',
    title: 'Age Verification',
    description: 'Verify age for compliance purposes',
    icon: <Clock className="w-4 h-4 text-green-600" />,
  },
  {
    id: 'iv-15',
    title: 'Phone Number Verification',
    description: 'Verify and validate phone numbers',
    icon: <Smartphone className="w-4 h-4 text-green-600" />,
  },
]

// Aadhar E-Sign Items - 15 items
const aadharESignItems = [
  {
    id: 'es-1',
    title: 'Document E-Sign',
    description: 'Electronically sign documents using Aadhaar',
    icon: <FileSignature className="w-4 h-4 text-purple-600" />,
  },
  {
    id: 'es-2',
    title: 'Bulk E-Sign',
    description: 'Process multiple documents for e-signing',
    icon: <FileText className="w-4 h-4 text-purple-600" />,
  },
  {
    id: 'es-3',
    title: 'E-Sign Verification',
    description: 'Verify authenticity of Aadhaar e-signatures',
    icon: <FileCheck className="w-4 h-4 text-purple-600" />,
  },
  {
    id: 'es-4',
    title: 'E-Sign API Integration',
    description: 'Integrate e-signing capabilities into your platform',
    icon: <Zap className="w-4 h-4 text-purple-600" />,
  },
  {
    id: 'es-5',
    title: 'E-Sign Workflow',
    description: 'Create custom e-signing workflows for your business',
    icon: <BarChart className="w-4 h-4 text-purple-600" />,
  },
  {
    id: 'es-6',
    title: 'E-Sign Analytics',
    description: 'Track and analyze e-signing activities',
    icon: <PieChart className="w-4 h-4 text-purple-600" />,
  },
  {
    id: 'es-7',
    title: 'Secure Document Storage',
    description: 'Securely store e-signed documents',
    icon: <Lock className="w-4 h-4 text-purple-600" />,
  },
  {
    id: 'es-8',
    title: 'E-Sign Audit Trail',
    description: 'Maintain detailed audit trails for all e-signatures',
    icon: <Clock className="w-4 h-4 text-purple-600" />,
  },
  {
    id: 'es-9',
    title: 'Template Management',
    description: 'Create and manage document templates for e-signing',
    icon: <Layers className="w-4 h-4 text-purple-600" />,
  },
  {
    id: 'es-10',
    title: 'Multi-party E-Sign',
    description: 'Facilitate document signing by multiple parties',
    icon: <Users className="w-4 h-4 text-purple-600" />,
  },
  {
    id: 'es-11',
    title: 'E-Sign Encryption',
    description: 'Advanced encryption for e-signed documents',
    icon: <Key className="w-4 h-4 text-purple-600" />,
  },
  {
    id: 'es-12',
    title: 'Compliance Management',
    description: 'Ensure e-signatures comply with legal requirements',
    icon: <ShieldCheck className="w-4 h-4 text-purple-600" />,
  },
  {
    id: 'es-13',
    title: 'Mobile E-Sign',
    description: 'Sign documents on mobile devices',
    icon: <Smartphone className="w-4 h-4 text-purple-600" />,
  },
  {
    id: 'es-14',
    title: 'E-Sign Notifications',
    description: 'Automated notifications for e-signing workflow',
    icon: <Mail className="w-4 h-4 text-purple-600" />,
  },
  {
    id: 'es-15',
    title: 'Document Expiry Management',
    description: 'Manage expiration of e-signed documents',
    icon: <Calendar className="w-4 h-4 text-purple-600" />,
  },
]

const Navbar = () => {
  const { theme, setTheme } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [activeCategory, setActiveCategory] = useState(null)
  const navRef = useRef(null)

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveDropdown(null)
        setActiveCategory(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // Handle window resize to close menus on mobile/desktop switch
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [mobileMenuOpen])

  const toggleDropdown = (menu) => {
    if (activeDropdown === menu) {
      setActiveDropdown(null)
      setActiveCategory(null)
    } else {
      setActiveDropdown(menu)
      setActiveCategory(null)
    }
  }

  const toggleCategory = (category) => {
    setActiveCategory(activeCategory === category ? null : category)
  }

  // Handle hover events for desktop
  const handleMouseEnter = (menu) => {
    if (window.innerWidth >= 768) {
      setActiveDropdown(menu)
    }
  }

  const handleCategoryMouseEnter = (category) => {
    if (window.innerWidth >= 768) {
      setActiveCategory(category)
    }
  }

  const handleMouseLeave = () => {
    if (window.innerWidth >= 768) {
      setActiveDropdown(null)
      setActiveCategory(null)
    }
  }

  // Get the appropriate items based on active category
  const getActiveItems = () => {
    switch (activeCategory) {
      case 'business':
        return businessVerificationItems
      case 'identity':
        return identityVerificationItems
      case 'aadhar':
        return aadharESignItems
      default:
        return []
    }
  }

  // Get the appropriate color based on active category
  const getActiveCategoryColor = () => {
    switch (activeCategory) {
      case 'business':
        return 'text-blue-600'
      case 'identity':
        return 'text-green-600'
      case 'aadhar':
        return 'text-purple-600'
      default:
        return 'text-foreground'
    }
  }

  return (
    <>
      <div className="bg-primary py-2 px-4 text-center text-primary-foreground">
        <p className="text-sm font-medium">
          New: Enhanced Business Verification API now available{' '}
          <a href="#" className="underline ml-2">
            Learn more →
          </a>
        </p>
      </div>
      <Wrapper>
        <div ref={navRef} className="">
          {/* Announcement banner */}

          <div className="py-4">
            <nav className="relative z-30">
              <div className="flex justify-between items-center">
                {/* Logo */}
                <Link to="/">
                  <div className="flex gap-1 items-center cursor-pointer">
                    <Shield className="h-5 w-5 text-primary" />
                    <span className="text-lg font-semibold text-foreground">
                      VerifyAPI
                    </span>
                  </div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center justify-center flex-1 ml-10">
                  <div className="flex gap-2">
                    {/* Products Dropdown */}
                    <div
                      className="relative"
                      onMouseEnter={() => handleMouseEnter('products')}
                      onMouseLeave={handleMouseLeave}
                    >
                      <button
                        onClick={() => toggleDropdown('products')}
                        className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-2 py-2 text-sm font-medium text-foreground transition-colors hover:text-blue-600"
                      >
                        Products
                        <ChevronDown
                          className={cn(
                            'ml-1 h-4 w-4 transition-transform',
                            activeDropdown === 'products' ? 'rotate-180' : ''
                          )}
                        />
                      </button>
                    </div>

                    {/* About Us */}
                    <Link
                      to="/about-us"
                      className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:text-blue-600"
                    >
                      About Us
                    </Link>

                    {/* Contact Us */}
                    <Link
                      to="/contact-us"
                      className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:text-blue-600"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>

                {/* Get API Keys Button */}
                <div className="flex items-center gap-2">
                  <div className="hidden md:flex items-center">
                    <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                      Get API Keys
                    </button>
                  </div>

                  <div
                    className="rounded-md border p-3 hover:bg-muted cursor-pointer"
                    onClick={() =>
                      setTheme(theme === 'light' ? 'dark' : 'light')
                    }
                  >
                    {theme === 'light' && <Moon className="h-4 w-4" />}
                    {theme === 'dark' && <Sun className="h-4 w-4" />}
                  </div>

                  {/* Mobile menu button */}
                  <div className="flex items-center md:hidden">
                    <Sheet>
                      <SheetTrigger asChild>
                        <Button variant="outline" size="icon">
                          <Menu className="h-4 w-4" />
                        </Button>
                      </SheetTrigger>
                      <SheetContent className="overflow-y-auto">
                        <SheetHeader>
                          <SheetTitle>
                            <Link to="/" className="flex items-center gap-1">
                              <Shield className="h-5 w-5 text-primary" />
                              <span className="text-lg font-semibold text-foreground">
                                XRAY
                              </span>
                            </Link>
                          </SheetTitle>
                        </SheetHeader>
                        <div className="my-6 flex flex-col gap-6">
                          <Accordion
                            type="multiple"
                            collapsible
                            className="flex w-full flex-col gap-0"
                          >
                            <AccordionItem
                              value="business"
                              className="border-none"
                            >
                              <AccordionTrigger className="hover:no-underline py-2">
                                Business Verification
                              </AccordionTrigger>
                              <AccordionContent>
                                <div className="flex flex-col gap-2">
                                  {businessVerificationItems.map((item) => (
                                    <div
                                      key={item.id}
                                      className="flex items-center gap-2"
                                    >
                                      <div>{item.icon}</div>
                                      <p className="font-medium text-sm">
                                        {item.title}
                                      </p>
                                    </div>
                                  ))}
                                </div>
                              </AccordionContent>
                            </AccordionItem>
                            <AccordionItem
                              value="identity"
                              className="border-none"
                            >
                              <AccordionTrigger className="hover:no-underline py-2">
                                Identity Verification
                              </AccordionTrigger>
                              <AccordionContent>
                                <div className="flex flex-col gap-2">
                                  {identityVerificationItems.map((item) => (
                                    <div
                                      key={item.id}
                                      className="flex items-center gap-2"
                                    >
                                      <div>{item.icon}</div>
                                      <p className="font-medium text-sm">
                                        {item.title}
                                      </p>
                                    </div>
                                  ))}
                                </div>
                              </AccordionContent>
                            </AccordionItem>
                            <AccordionItem
                              value="aadhar"
                              className="border-none"
                            >
                              <AccordionTrigger className="hover:no-underline py-2">
                                Aadhar E-sign
                              </AccordionTrigger>
                              <AccordionContent>
                                <div className="flex flex-col gap-2">
                                  {aadharESignItems.map((item) => (
                                    <div
                                      key={item.id}
                                      className="flex items-center gap-2"
                                    >
                                      <div>{item.icon}</div>
                                      <p className="font-medium text-sm">
                                        {item.title}
                                      </p>
                                    </div>
                                  ))}
                                </div>
                              </AccordionContent>
                            </AccordionItem>
                          </Accordion>

                          <div className="flex flex-col gap-2">
                            <Button asChild variant="outline">
                              <Link to="/about-us">About Us</Link>
                            </Button>
                            <Button asChild>
                              <Link to="/contact-us">Contact Us</Link>
                            </Button>
                          </div>
                        </div>
                      </SheetContent>
                    </Sheet>
                  </div>
                </div>
              </div>
            </nav>

            {/* Full-width mega menu */}
            {activeDropdown === 'products' && (
              <div
                className="absolute left-0 right-0 mt-1 bg-accent border-b shadow-lg z-40"
                onMouseEnter={() => handleMouseEnter('products')}
                onMouseLeave={handleMouseLeave}
              >
                <Wrapper>
                  <div className="container py-6 -mt-2">
                    <div className="flex">
                      {/* Left sidebar - Categories */}
                      <div className="w-64 border-r pr-6">
                        <h3 className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-4">
                          Verification Solutions
                        </h3>

                        <div className="space-y-1">
                          <button
                            onClick={() => toggleCategory('business')}
                            onMouseEnter={() =>
                              handleCategoryMouseEnter('business')
                            }
                            className={cn(
                              'w-full flex items-center p-3 rounded-md hover:bg-muted group text-left',
                              activeCategory === 'business' ? 'bg-muted' : ''
                            )}
                          >
                            <Building className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                            <div>
                              <h4
                                className={cn(
                                  'text-sm font-semibold group-hover:text-blue-600',
                                  activeCategory === 'business'
                                    ? 'text-blue-600'
                                    : ''
                                )}
                              >
                                Business Verification
                              </h4>
                              <p className="text-xs text-muted-foreground">
                                Verify business credentials
                              </p>
                            </div>
                          </button>

                          <button
                            onClick={() => toggleCategory('identity')}
                            onMouseEnter={() =>
                              handleCategoryMouseEnter('identity')
                            }
                            className={cn(
                              'w-full flex items-center p-3 rounded-md hover:bg-muted group text-left',
                              activeCategory === 'identity' ? 'bg-muted' : ''
                            )}
                          >
                            <UserCheck className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                            <div>
                              <h4
                                className={cn(
                                  'text-sm font-semibold group-hover:text-green-600',
                                  activeCategory === 'identity'
                                    ? 'text-green-600'
                                    : ''
                                )}
                              >
                                Identity Verification
                              </h4>
                              <p className="text-xs text-muted-foreground">
                                Verify individual identity
                              </p>
                            </div>
                          </button>

                          <button
                            onClick={() => toggleCategory('aadhar')}
                            onMouseEnter={() =>
                              handleCategoryMouseEnter('aadhar')
                            }
                            className={cn(
                              'w-full flex items-center p-3 rounded-md hover:bg-muted group text-left',
                              activeCategory === 'aadhar' ? 'bg-muted' : ''
                            )}
                          >
                            <FileSignature className="w-5 h-5 text-purple-600 mr-3 flex-shrink-0" />
                            <div>
                              <h4
                                className={cn(
                                  'text-sm font-semibold group-hover:text-purple-600',
                                  activeCategory === 'aadhar'
                                    ? 'text-purple-600'
                                    : ''
                                )}
                              >
                                Aadhaar E-Sign
                              </h4>
                              <p className="text-xs text-muted-foreground">
                                Electronic signature solutions
                              </p>
                            </div>
                          </button>
                        </div>
                      </div>

                      {/* Right content - Services grid */}
                      <div className="flex-1 pl-6 overflow-y-auto">
                        {activeCategory ? (
                          <>
                            <div className="flex items-center justify-between mb-4">
                              <h3
                                className={cn(
                                  'text-lg font-semibold',
                                  getActiveCategoryColor()
                                )}
                              >
                                {activeCategory === 'business' &&
                                  'Business Verification Services'}
                                {activeCategory === 'identity' &&
                                  'Identity Verification Services'}
                                {activeCategory === 'aadhar' &&
                                  'Aadhaar E-Sign Services'}
                              </h3>
                              <Link
                                to={activeCategory}
                                onClick={() => toggleDropdown('products')}
                                className={cn(
                                  'text-sm font-medium flex items-center',
                                  getActiveCategoryColor()
                                )}
                              >
                                View all services
                                <ChevronDown className="w-4 h-4 ml-1 rotate-[-90deg]" />
                              </Link>
                            </div>

                            <div className="grid grid-cols-3 gap-4 overflow-y-auto">
                              {getActiveItems().map((item) => (
                                <a
                                  key={item.id}
                                  href="#"
                                  className="flex select-none gap-3 rounded-md p-3 leading-none outline-none transition-colors hover:bg-muted"
                                >
                                  <div className="flex-shrink-0">
                                    {item.icon}
                                  </div>
                                  <div>
                                    <div className="text-sm font-semibold">
                                      {item.title}
                                    </div>
                                    <p className="text-xs leading-snug text-muted-foreground mt-1">
                                      {item.description}
                                    </p>
                                  </div>
                                </a>
                              ))}
                            </div>
                          </>
                        ) : (
                          <div className="h-full flex items-center justify-center text-center p-12">
                            <div>
                              <Shield className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4" />
                              <h3 className="text-lg font-semibold mb-2">
                                Explore Our Verification Solutions
                              </h3>
                              <p className="text-muted-foreground max-w-md mx-auto">
                                Select a category from the left to view our
                                comprehensive verification services for
                                businesses and individuals.
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </Wrapper>
              </div>
            )}
          </div>
        </div>
      </Wrapper>
    </>
  )
}

export default Navbar
