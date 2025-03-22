import * as React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import {
  ArrowUpIcon,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Send,
} from 'lucide-react'

import Wrapper from '../Wrapper'
import { Link } from 'react-router-dom'

function Footerdemo() {
  const [visible, setVisible] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <footer className="bg-secondary text-white py-8 select-none">
      <Wrapper>
        <div className="relative transition-colors duration-300">
          <div className="mx-auto pb-12">
            <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
              <div className="relative">
                <h2 className="mb-4 text-3xl font-bold tracking-tight">
                  Stay Connected
                </h2>
                <p className="mb-6">
                  Join our newsletter for the latest updates and exclusive
                  offers.
                </p>
                <form className="relative">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="pr-12"
                  />
                  <Button
                    type="submit"
                    size="icon"
                    className="absolute right-1 top-1 h-8 w-8 rounded-full bg-secondary hover:bg-secondary/90 text-primary-foreground transition-transform hover:scale-105"
                  >
                    <Send className="h-4 w-4" />
                    <span className="sr-only">Subscribe</span>
                  </Button>
                </form>
                <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
              </div>
              <div>
                <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
                <nav className="space-y-2 text-sm">
                  <Link
                    to="/"
                    className="block transition-colors hover:underline"
                    onClick={() => {
                      window.scrollTo({ left: 0, top: 0, behavior: 'smooth' })
                    }}
                  >
                    Home
                  </Link>
                  <Link
                    to="/business"
                    className="block transition-colors hover:underline"
                    onClick={() => {
                      window.scrollTo({ left: 0, top: 0, behavior: 'smooth' })
                    }}
                  >
                    Business Verification
                  </Link>
                  <Link
                    to="identity"
                    className="block transition-colors hover:underline"
                    onClick={() => {
                      window.scrollTo({ left: 0, top: 0, behavior: 'smooth' })
                    }}
                  >
                    Identity Verification
                  </Link>
                  <Link
                    to="/aadhar"
                    className="block transition-colors hover:underline"
                    onClick={() => {
                      window.scrollTo({ left: 0, top: 0, behavior: 'smooth' })
                    }}
                  >
                    Aadhar Verification
                  </Link>
                  <Link
                    to="/contact-us"
                    className="block transition-colors hover:underline"
                    onClick={() => {
                      window.scrollTo({ left: 0, top: 0, behavior: 'smooth' })
                    }}
                  >
                    Contact Us
                  </Link>
                  <Link
                    to="/about-us"
                    className="block transition-colors hover:underline"
                    onClick={() => {
                      window.scrollTo({ left: 0, top: 0, behavior: 'smooth' })
                    }}
                  >
                    About Us
                  </Link>
                </nav>
              </div>
              <div>
                <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
                <address className="space-y-2 text-sm not-italic">
                  <p>44 IIND FLOOR REGAL BUILDING,</p>
                  <p>CONNAUGHT PLACE, NEW DELHI</p>
                </address>
              </div>
              <div className="relative">
                <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
                <div className="mb-6 flex space-x-4">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="outline"
                          size="icon"
                          className="rounded-full hover:bg-primary/10 hover:bg-white hover:border-transparent hover:shadow-none"
                        >
                          <Facebook className="h-4 w-4 text-secondary" />
                          <span className="sr-only">Facebook</span>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Follow us on Facebook</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="outline"
                          size="icon"
                          className="rounded-full hover:bg-primary/10 hover:bg-white hover:border-transparent hover:shadow-none"
                        >
                          <Twitter className="h-4 w-4 text-secondary" />
                          <span className="sr-only">Twitter</span>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Follow us on Twitter</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="outline"
                          size="icon"
                          className="rounded-full hover:bg-primary/10 hover:bg-white hover:border-transparent hover:shadow-none"
                        >
                          <Instagram className="h-4 w-4 text-secondary" />
                          <span className="sr-only">Instagram</span>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Follow us on Instagram</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="outline"
                          size="icon"
                          className="rounded-full hover:bg-primary/10 hover:bg-white hover:border-transparent hover:shadow-none"
                        >
                          <Linkedin className="h-4 w-4 text-secondary" />
                          <span className="sr-only">LinkedIn</span>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Connect with us on LinkedIn</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>
            </div>
            <div className="mt-4 flex flex-col items-center justify-between gap-4 border-t pt-8 text-center md:flex-row relative">
              <p className="text-sm">© 2024 XRAY AI. All rights reserved.</p>
              <nav className="flex gap-4 text-sm">
                <Link to="#" className="transition-colors hover:underline">
                  Privacy Policy
                </Link>
                <Link to="#" className="transition-colors hover:underline">
                  Terms of Service
                </Link>
              </nav>
              <div
                className={`fixed z-[10000] bottom-8 right-8 ${
                  visible ? '' : 'hidden'
                }`}
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full hover:bg-secondary hover:bg-white"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                >
                  <ArrowUpIcon
                    className="h-6 w-6 text-secondary"
                    strokeWidth={3}
                  />
                  <span className="sr-only ">Scroll to top</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </footer>
  )
}

export { Footerdemo }
