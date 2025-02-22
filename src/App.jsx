import Home from '@/pages/Home/Home'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Aadhar from './pages/Aadhar/Aadhar'
import Business from './pages/Business/Business'
import Identity from './pages/Identity/Identity'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/aadhar" element={<Aadhar />} />
        <Route path="/business" element={<Business />} />
        <Route path="/identity" element={<Identity />} />
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
