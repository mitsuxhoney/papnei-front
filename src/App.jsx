import Home from '@/pages/Home/Home'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Aadhar from './pages/Aadhar/Aadhar'
import Business from './pages/Business/Business'
import Identity from './pages/Identity/Identity'
import ContactUs from './pages/ContactUs/ContactUs'
import AboutUs from './pages/AboutUs/AboutUs'
import GSTOTPVerification from './pages/Business/gst-otp-verification'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/aadhar" element={<Aadhar />} />
        <Route path="/business">
          <Route index element={<Business />} />
          <Route path="gst-otp-verification" element={<GSTOTPVerification />} />
        </Route>
        <Route path="/identity" element={<Identity />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Route>
      <Route
        path="/*"
        element={
          <div className="w-screen h-screen flex justify-center items-center">
            404
          </div>
        }
      />
    </Routes>
  )
}

export default App
