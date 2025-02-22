import { Outlet } from 'react-router-dom'
import { Navbar1 } from './shadcnblocks-com-navbar1'
import { Footerdemo } from './ui/footer-section'

const Layout = () => {
  return (
    <div className="mx-auto">
      <header className="sticky top-0 z-[50] bg-background shadow-md">
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
