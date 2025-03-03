import Home from '@/pages/Home/Home'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Aadhar from './pages/Aadhar/Aadhar'
import Business from './pages/Business/Business'
import Identity from './pages/Identity/Identity'
import ContactUs from './pages/ContactUs/ContactUs'
import AboutUs from './pages/AboutUs/AboutUs'
import GSTOTPVerification from './pages/Business/gst-otp-verification'
import FaceVerification from './pages/Aadhar/face-verification'
import AadharESign from './pages/Aadhar/aadhar-esign'
import PanVerification from '@/pages/Identity/pan-verification'
import PANComprehensive from './pages/Identity/pan-comprehensive'
import AadharPAN from './pages/Identity/aadhar-pan'
import PANValidation from './pages/Identity/pan-validation'
import VoterVerification from './pages/Identity/voter-verification'
import VoterOCR from './pages/Identity/voter-ocr'
import DLVerification from './pages/Identity/dl-verification'
import PassportVerification from './pages/Identity/passport-verification'
import PassportOCR from './pages/Identity/passport-ocr'
import PhotoOCR from './pages/Identity/photo-ocr'
import VehicleRCVerification from './pages/Identity/vehicle-rc-verification'
import ChasisRC from './pages/Identity/chasis-rc'
import RCFinancer from './pages/Identity/rc-financer'
import AadharMasking from './pages/Identity/aadhar-masking'
import GSTVerification from './pages/Business/gst-verification'
import GSTPhoneAPI from './pages/Business/gst-phone-api'
import MCAData from './pages/Business/mca-data'
import MCAFiledDocs from './pages/Business/mca-filed-docs'
import TDSCompliance from './pages/Business/tds-compliance'
import FSSAIVerification from './pages/Business/fssai-verification'
import TANVerification from './pages/Business/tan-verification'
import UDYOGVerification from './pages/Business/udyog-verification'
import UDYAMVerification from './pages/Business/udyam-verification'
import IECVerification from './pages/Business/IECVerification'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/business">
          <Route index element={<Business />} />
          <Route path="gst-otp-verification" element={<GSTOTPVerification />} />
          <Route path="gst-verification" element={<GSTVerification />} />
          <Route path="gst-to-phone" element={<GSTPhoneAPI />} />
          <Route path="mca-data" element={<MCAData />} />
          <Route path="mca-filed-docs" element={<MCAFiledDocs />} />
          <Route path="tds-206-compliance" element={<TDSCompliance />} />
          <Route path="fssai-verification" element={<FSSAIVerification />} />
          <Route path="tan-verification" element={<TANVerification />} />
          <Route path="udyog-verification" element={<UDYOGVerification />} />
          <Route path="udyam-verification" element={<UDYAMVerification />} />
          <Route path="iec-verification" element={<IECVerification />} />
        </Route>
        <Route path="/identity">
          <Route index element={<Identity />} />
          <Route path="pan-verification" element={<PanVerification />} />
          <Route path="pan-comprehensive" element={<PANComprehensive />} />
          <Route path="aadhaar-to-pan" element={<AadharPAN />} />
          <Route path="pan-validation" element={<PANValidation />} />
          <Route path="aadhaar-verification" element={<VoterVerification />} />
          <Route path="voter-id-ocr" element={<VoterOCR />} />
          <Route path="dl-verification" element={<DLVerification />} />
          <Route
            path="passport-verification"
            element={<PassportVerification />}
          />
          <Route path="passport-ocr" element={<PassportOCR />} />
          <Route path="photo-id-ocr" element={<PhotoOCR />} />
          <Route
            path="vehicle-rc-verification"
            element={<VehicleRCVerification />}
          />
          <Route path="chassis-to-rc" element={<ChasisRC />} />
          <Route path="rc-with-financer" element={<RCFinancer />} />
          <Route path="aadhaar-masking" element={<AadharMasking />} />
        </Route>
        <Route path="/aadhar">
          <Route index element={<Aadhar />} />
          <Route path="face-verification" element={<FaceVerification />} />
          <Route path="e-sign" element={<AadharESign />} />
        </Route>
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
