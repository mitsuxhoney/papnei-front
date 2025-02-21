import { Outlet } from 'react-router-dom'
import { Navbar1 } from './shadcnblocks-com-navbar1'
import { Footerdemo } from './ui/footer-section'

const Layout = () => {
  return (
    <div className="max-w-[1280px] mx-auto">
      <header className="sticky top-0 px-4 z-[50] bg-background shadow-md">
        <Navbar1 />
      </header>
      <section className="px-4 select-none">
        <Outlet />
      </section>
      <footer className="px-4">
        <Footerdemo />
      </footer>
    </div>
  )
}

export default Layout
