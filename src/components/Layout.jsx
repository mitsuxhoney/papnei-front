import { Outlet } from 'react-router-dom'

import { Footerdemo } from './ui/footer-section'
import { Navbar1 } from './shadcn-basic-navbar'

const Layout = () => {
  return (
    <div className="mx-auto">
      <header className="sticky top-0 z-[50] bg-background shadow-md w-full">
        <Navbar1 />
      </header>
      <section className=" select-none">
        <Outlet />
      </section>
      <footer className="">
        <Footerdemo />
      </footer>
    </div>
  )
}

export default Layout
