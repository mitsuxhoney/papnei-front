import { Outlet } from 'react-router-dom'

import { Footerdemo } from './ui/footer-section'
import Navbar from './MegaMenuNavbar'

const Layout = () => {
  return (
    <div className="mx-auto">
      <header className="sticky top-0 z-[50] bg-background shadow-md w-full">
        <Navbar />
      </header>
      <section className=" select-none">
        <Outlet />
      </section>
      <footer className="mt-16">
        <Footerdemo />
      </footer>
    </div>
  )
}

export default Layout
