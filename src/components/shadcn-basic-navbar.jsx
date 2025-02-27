import * as React from 'react'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'
import { Icons } from '@/components/ui/icons'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
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
import { useTheme } from '@/components/theme-provider'
import Wrapper from './Wrapper'
import { ArrowRight, Menu, Moon, Sun, X } from 'lucide-react'
import { ScrollProgress } from './ui/scroll-progress'

const components = [
  {
    title: 'Alert Dialog',
    href: '/docs/primitives/alert-dialog',
    description:
      'A modal dialog that interrupts the user with important content and expects a response.',
  },
  {
    title: 'Hover Card',
    href: '/docs/primitives/hover-card',
    description:
      'For sighted users to preview content available behind a link.',
    items: [
      {
        title: 'Hover Card Item',
        href: '/docs/primitives/hover-card-item',
        description:
          'A card item that can be used within the Hover Card component.',
      },
    ],
  },
  {
    title: 'Progress',
    href: '/docs/primitives/progress',
    description:
      'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
    items: [
      {
        title: 'Progress Item',
        href: '/docs/primitives/progress-item',
        description:
          'A progress item that can be used within the Progress component.',
      },
    ],
  },
  {
    title: 'Scroll-area',
    href: '/docs/primitives/scroll-area',
    description: 'Visually or semantically separates content.',
  },
  {
    title: 'Tabs',
    href: '/docs/primitives/tabs',
    description:
      'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
  },
  {
    title: 'Tooltip',
    href: '/docs/primitives/tooltip',
    description:
      'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
  },
]

const logo = {
  url: '/',
  src: 'https://www.shadcnblocks.com/images/block/block-1.svg',
  alt: 'logo',
  title: 'XRAY',
}

const auth = {
  login: { text: 'Get API Keys', url: '#' },
  signup: { text: 'Contact Sales', url: '#' },
}

const products = [
  {
    title: 'Identity Verification',
    url: '/identity',
    icon: <ArrowRight className="h-4 w-4 text-neutral-700" />,
    items: [
      {
        title: 'PAN Verification API',
        url: '/identity/pan-verification',
      },
      {
        title: 'PAN Comprehensive API',
        url: '/identity/pan-comprehensive',
      },
      {
        title: 'Aadhaar to PAN API',
        url: '/identity/aadhaar-to-pan',
      },
      {
        title: 'PAN Validation API',
        url: '/identity/pan-validation',
      },
      {
        title: 'Aadhaar Verification API',
        url: '/identity/aadhaar-verification',
      },
      {
        title: 'Voter-ID Verification API',
        url: '/identity/voter-id-verification',
      },
      {
        title: 'Voter-ID OCR API',
        url: '/identity/voter-id-ocr',
      },
      {
        title: 'DL Verification API',
        url: '/identity/dl-verification',
      },
      {
        title: 'Passport Verification API',
        url: '/identity/passport-verification',
      },
      {
        title: 'Passport OCR API',
        url: '/identity/passport-ocr',
      },
      {
        title: 'Photo-ID OCR API',
        url: '/identity/photo-id-ocr',
      },
      {
        title: 'Vehicle RC Verification API',
        url: '/identity/vehicle-rc-verification',
      },
      {
        title: 'Chassis Number to RC API',
        url: '/identity/chassis-to-rc',
      },
      {
        title: 'RC with Financer details',
        url: '/identity/rc-financer-details',
      },
      {
        title: 'Aadhaar Masking API',
        url: '/identity/aadhaar-masking',
      },
    ],
  },
  {
    title: 'Business Verification',
    url: '/business',
    icon: <ArrowRight className="h-4 w-4 text-neutral-700" />,
    items: [
      {
        title: 'GST OTP Verification API',
        url: '/business/gst-otp-verification',
      },
      {
        title: 'GST Verification API',
        url: '/business/gst-verification',
      },
      {
        title: 'GST To Phone Number API',
        url: '/business/gst-to-phone-number',
      },
      {
        title: 'MCA Data APIs (CIN / DIN)',
        url: '/business/mca-data',
      },
      {
        title: 'MCA Filed Doc Pull API',
        url: '/business/mca-filed-doc-pull',
      },
      {
        title: 'TDS-206 Compliance',
        url: '/business/tds-206-compliance',
      },
      {
        title: 'FSSAI Verification API',
        url: '/business/fssai-verification',
      },
      {
        title: 'TAN Verification API',
        url: '/business/tan-verification',
      },
      {
        title: 'Udyog Verification',
        url: '/business/udyog-verification',
      },
      {
        title: 'Udyam Verification',
        url: '/business/udyam-verification',
      },
      {
        title: 'IEC Verification',
        url: '/business/iec-verification',
      },
    ],
  },

  {
    title: 'Aadhaar',
    url: '/aadhaar',
    icon: <ArrowRight className="h-4 w-4 text-neutral-700" />,
    items: [
      {
        title: 'Aadhaar eSignature',
        url: '/aadhaar/aadhaar-esignature',
      },
      {
        title: 'Face Verification based Aadhaar E-Sign',
        url: '/aadhaar/face-verification-aadhaar-esign',
      },
    ],
  },
]

export function Navbar1() {
  const { theme, setTheme } = useTheme()
  return (
    <div className="w-full">
      <Wrapper>
        <div className="flex items-center justify-between py-4">
          <ScrollProgress className="top-[70px]" />
          <div className="flex items-center gap-6 ">
            <Link to={logo.url} className="flex items-center gap-2">
              <img src={logo.src} className="w-8" alt={logo.alt} />
              <span className="text-lg font-semibold">{logo.title}</span>
            </Link>
          </div>
          <NavigationMenu className="w-full hidden md:block">
            <NavigationMenuList className="w-full">
              <NavigationMenuItem>
                <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] grid-cols-3 lg:w-[720px] overflow-y-auto">
                    {products?.map((product) => (
                      <div key={product.title} className="flex flex-col gap-2">
                        <ListItem
                          title={product.title}
                          href={product.url}
                          icon={product.icon}
                          className="underline"
                        />

                        {product.items?.map((item) => (
                          <ListItem
                            title={item.title}
                            href={item.url}
                            key={item.title}
                          />
                        ))}
                      </div>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/contact-us">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Contact Us
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/about-us">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    About Us
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div className="flex gap-2 items-center">
            <div className="hidden items-center gap-2 lg:flex">
              <Button asChild variant="outline" size="sm">
                <Link to={auth.login.url}>{auth.login.text}</Link>
              </Button>
              <Button asChild size="sm">
                <Link to={auth.signup.url}>{auth.signup.text}</Link>
              </Button>
            </div>
            <div
              className="rounded-md border p-2.5 hover:bg-muted cursor-pointer"
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            >
              {theme === 'light' && <Moon className="h-4 w-4" />}
              {theme === 'dark' && <Sun className="h-4 w-4" />}
            </div>

            <div className="flex md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Menu className="h-4 w-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent className="overflow-y-auto">
                  <SheetHeader>
                    <SheetTitle>
                      <Link to={logo.url} className="flex items-center gap-2">
                        <img src={logo.src} className="w-8" alt={logo.alt} />
                        <span className="text-lg font-semibold">
                          {logo.title}
                        </span>
                      </Link>
                    </SheetTitle>
                  </SheetHeader>
                  <div className="my-6 flex flex-col gap-6">
                    <Accordion
                      type="multiple"
                      collapsible
                      className="w-full flex flex-col gap-4"
                    >
                      {products?.map((product) => (
                        <AccordionItem
                          key={product.title}
                          value={product.title}
                          className="border-b-0"
                        >
                          <AccordionTrigger className="py-0 font-semibold hover:no-underline">
                            {product.title}
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="flex flex-col justify-center pt-6">
                              {product.items?.map((item) => (
                                <Link
                                  key={item.title}
                                  className={cn(
                                    'block select-none text-sm font-semibold rounded-md p-2 leading-2 hover:underline'
                                  )}
                                  to={item.url}
                                >
                                  <div className="flex items-start gap-2">
                                    {item.title}
                                    <p className="hidden lg:block">
                                      {item.icon}
                                    </p>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                    <div className="flex gap-5 flex-col -mt-1">
                      <Link
                        to="/about-us"
                        className="block select-none font-semibold rounded-md px-0 py-0 leading-2 hover:underline"
                      >
                        About Us
                      </Link>
                      <Link
                        to="/contact-us"
                        className="py-0 px-0 font-semibold block select-none rounded-md p-2 hover:underline"
                      >
                        Contact Us
                      </Link>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <Button asChild variant="outline">
                      <Link to={auth.login.url}>{auth.login.text}</Link>
                    </Button>
                    <Button asChild>
                      <Link to={auth.signup.url}>{auth.signup.text}</Link>
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  )
}

const ListItem = ({ className, title, href, icon, children, ...props }) => {
  return (
    <NavigationMenuLink asChild>
      <Link
        className={cn(
          'block select-none text-sm font-medium rounded-md p-2 leading-1 transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
          className
        )}
        to={href}
      >
        <div className="flex items-start gap-2">
          {title}
          <p className="hidden lg:block">{icon}</p>
        </div>
      </Link>
    </NavigationMenuLink>
  )
}
