import { Outlet } from 'react-router-dom'
import { Navbar1 } from './shadcnblocks-com-navbar1'
import { Footerdemo } from './ui/footer-section'

const Layout = () => {
  return (
    <div className="mx-auto">
      <header className="sticky top-0 px-4 md:px-14 z-[50] bg-background shadow-md">
        <Navbar1 />
      </header>
      <section className="px-4 md:px-14 select-none">
        <Outlet />
      </section>
      <footer className="px-4 md:px-14">
        <Footerdemo />
      </footer>
    </div>
  )
}

export default Layout
