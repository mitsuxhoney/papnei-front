import {
  Book,
  Fingerprint,
  Handshake,
  IdCard,
  Menu,
  Moon,
  Sun,
  Sunset,
  Trees,
  Zap,
} from 'lucide-react'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'

import { useTheme } from '@/components/theme-provider'

import { Switch } from '@/components/ui/switch'

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Link } from 'react-router-dom'
import Wrapper from './Wrapper'
import { ScrollProgress } from './ui/scroll-progress'
import { ModeToggle } from './ui/mode-toggle'

const Navbar1 = ({
  logo = {
    url: '/',
    src: 'https://www.shadcnblocks.com/images/block/block-1.svg',
    alt: 'logo',
    title: 'XRAY',
  },

  menu = [
    {
      title: 'Products',
      url: '',
      items: [
        {
          title: 'Business Verification',
          description:
            'Quick and secure verification to ensure business credibility and compliance.',
          icon: <Handshake className="size-5 shrink-0" />,
          url: '/business',
        },
        {
          title: 'Identity Verfication',
          description:
            'Seamless and secure identity authentication to prevent fraud and enhance trust.',
          icon: <Fingerprint className="size-5 shrink-0" />,
          url: '/identity',
        },
        {
          title: 'Aadhar E-Sign',
          description:
            'Legally sign documents online with Aadhar for a fast, paperless experience.',
          icon: <IdCard className="size-5 shrink-0" />,
          url: '/aadhar',
        },
      ],
    },
    { title: 'Contact Us', url: '/contact-us' },
    { title: 'About Us', url: '/about-us' },
  ],

  mobileExtraLinks = [
    { name: 'Press', url: '#' },
    { name: 'Contact', url: '#' },
    { name: 'Imprint', url: '#' },
    { name: 'Sitemap', url: '#' },
  ],

  auth = {
    login: { text: 'Get API Keys', url: '#' },
    signup: { text: 'Contact Sales', url: '#' },
  },
}) => {
  const { theme, setTheme } = useTheme()
  return (
    <Wrapper>
      <section className="py-4 select-none">
        <div className="mx-auto">
          <nav className="hidden justify-between lg:flex left-0 right-0 ">
            <ScrollProgress className="top-[72px]" />

            <div className="flex items-center gap-6 ">
              <Link to={logo.url} className="flex items-center gap-2">
                <img src={logo.src} className="w-8" alt={logo.alt} />
                <span className="text-lg font-semibold">{logo.title}</span>
              </Link>
              <div className="flex items-center ">
                <NavigationMenu>
                  <NavigationMenuList>
                    {menu.map((item) => renderMenuItem(item))}
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <Button asChild variant="outline" size="sm">
                <Link to={auth.login.url}>{auth.login.text}</Link>
              </Button>
              <Button asChild size="sm">
                <Link to={auth.signup.url}>{auth.signup.text}</Link>
              </Button>
              <div
                className="rounded-md border p-2.5 hover:bg-muted cursor-pointer"
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              >
                {theme === 'light' && <Moon className="h-4 w-4" />}
                {theme === 'dark' && <Sun className="h-4 w-4" />}
              </div>
            </div>
          </nav>
          <div className="block lg:hidden">
            <ScrollProgress className="top-[72px] " />

            <div className="flex items-center justify-between">
              <Link to={logo.url} className="flex items-center gap-2">
                <img src={logo.src} className="w-8" alt={logo.alt} />
                <span className="text-lg font-semibold">{logo.title}</span>
              </Link>

              <div className="flex items-center gap-2">
                <div
                  className="rounded-md border p-[0.7rem] hover:bg-muted cursor-pointer"
                  onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                >
                  {theme === 'light' && <Moon className="h-4 w-4" />}
                  {theme === 'dark' && <Sun className="h-4 w-4" />}
                </div>

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
                        type="single"
                        collapsible
                        className="flex w-full flex-col gap-4"
                      >
                        {menu.map((item) => renderMobileMenuItem(item))}
                      </Accordion>
                      <div className="border-t py-4">
                        <div className="grid grid-cols-2 justify-start">
                          {mobileExtraLinks.map((link, idx) => (
                            <Link
                              key={idx}
                              className="inline-flex h-10 items-center gap-2 whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-accent-foreground"
                              to={link.url}
                            >
                              {link.name}
                            </Link>
                          ))}
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
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  )
}

const renderMenuItem = (item) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title} className="text-muted-foreground">
        <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="w-80 p-3">
            <NavigationMenuLink>
              {item.items.map((subItem) => (
                <li key={subItem.title}>
                  <Link
                    className="flex select-none gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted hover:text-accent-foreground"
                    to={subItem.url}
                  >
                    {subItem.icon}
                    <div>
                      <div className="text-sm font-semibold">
                        {subItem.title}
                      </div>
                      {subItem.description && (
                        <p className="text-sm leading-snug text-muted-foreground">
                          {subItem.description}
                        </p>
                      )}
                    </div>
                  </Link>
                </li>
              ))}
            </NavigationMenuLink>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    )
  }

  return (
    <Link
      key={item.title}
      className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-accent-foreground"
      to={item.url}
    >
      {item.title}
    </Link>
  )
}

const renderMobileMenuItem = (item) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="py-0 font-semibold hover:no-underline">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items.map((subItem) => (
            <a
              key={subItem.title}
              className="flex select-none gap-4 rounded-md p-3 leading-none outline-none transition-colors hover:bg-muted hover:text-accent-foreground"
              href={subItem.url}
            >
              {subItem.icon}
              <div>
                <div className="text-sm font-semibold">{subItem.title}</div>
                {subItem.description && (
                  <p className="text-sm leading-snug text-muted-foreground">
                    {subItem.description}
                  </p>
                )}
              </div>
            </a>
          ))}
        </AccordionContent>
      </AccordionItem>
    )
  }

  return (
    <a key={item.title} href={item.url} className="font-semibold">
      {item.title}
    </a>
  )
}

export { Navbar1 }
