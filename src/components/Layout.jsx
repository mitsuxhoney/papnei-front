import { Outlet } from 'react-router-dom'
import { Navbar1 } from './shadcnblocks-com-navbar1'
import { Footerdemo } from './ui/footer-section'

const Layout = () => {
  return (
    <div className="max-w-[1280px] mx-auto">
      <header>
        <Navbar1 />
      </header>
      <section>
        <Outlet />
      </section>
      <footer>
        <Footerdemo />
      </footer> 
    </div>
  )
}

export default Layout
