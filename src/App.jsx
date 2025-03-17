import { Routes, Route } from 'react-router-dom'
import { Spinner } from './components/ui/spinner'
import Layout from './components/Layout'
import { Suspense, lazy } from 'react'

const Home = lazy(() => import('@/pages/Home/Home'))
const Aadhar = lazy(() => import('@/pages/Aadhar/Aadhar'))
const Business = lazy(() => import('@/pages/Business/Business'))

const Identity = lazy(() => import('@/pages/Identity/Identity'))
const ContactUs = lazy(() => import('@/pages/ContactUs/ContactUs'))
const AboutUs = lazy(() => import('@/pages/AboutUs/AboutUs'))
const GSTOTPVerification = lazy(() =>
  import('./pages/Business/gst-otp-verification')
)
const IECVerification = lazy(() => import('./pages/Business/IECVerification'))
const FaceVerification = lazy(() => import('./pages/Aadhar/face-verification'))
const AadharESign = lazy(() => import('./pages/Aadhar/aadhar-esign'))
const PanVerification = lazy(() => import('./pages/Identity/pan-verification'))
const PANComprehensive = lazy(() =>
  import('./pages/Identity/pan-comprehensive')
)
const AadharPAN = lazy(() => import('./pages/Identity/aadhar-pan'))
const PANValidation = lazy(() => import('./pages/Identity/pan-validation'))
const VoterOCR = lazy(() => import('./pages/Identity/voter-ocr'))
const DLVerification = lazy(() => import('./pages/Identity/dl-verification'))
const PassportVerification = lazy(() =>
  import('./pages/Identity/passport-verification')
)
const PassportOCR = lazy(() => import('./pages/Identity/passport-ocr'))
const PhotoOCR = lazy(() => import('./pages/Identity/photo-ocr'))
const VehicleRCVerification = lazy(() =>
  import('./pages/Identity/vehicle-rc-verification')
)
const ChasisRC = lazy(() => import('./pages/Identity/chasis-rc'))
const RCFinancer = lazy(() => import('./pages/Identity/rc-financer'))
const AadharMasking = lazy(() => import('./pages/Identity/aadhar-masking'))
const GSTVerification = lazy(() => import('./pages/Business/gst-verification'))
const GSTPhoneAPI = lazy(() => import('./pages/Business/gst-phone-api'))
const MCAData = lazy(() => import('./pages/Business/mca-data'))
const MCAFiledDocs = lazy(() => import('./pages/Business/mca-filed-docs'))
const TDSCompliance = lazy(() => import('./pages/Business/tds-compliance'))
const FSSAIVerification = lazy(() =>
  import('./pages/Business/fssai-verification')
)
const TANVerification = lazy(() => import('./pages/Business/tan-verification'))
const UDYOGVerification = lazy(() =>
  import('./pages/Business/udyog-verification')
)
const UDYAMVerification = lazy(() =>
  import('./pages/Business/udyam-verification')
)
const AadharVerification = lazy(() =>
  import('./pages/Identity/aadhar-verification')
)
const VoterVerification = lazy(() =>
  import('./pages/Identity/voter-verification')
)

function App() {
  return (
    <Suspense
      fallback={
        <div className="w-screen h-screen flex justify-center items-center">
          <Spinner />
        </div>
      }
    >
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/business">
            <Route index element={<Business />} />
            <Route
              path="gst-otp-verification"
              element={<GSTOTPVerification />}
            />
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
            <Route
              path="aadhar-verification"
              element={<AadharVerification />}
            />
            <Route
              path="voter-id-verification"
              element={<VoterVerification />}
            />
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
    </Suspense>
  )
}

export default App
