import { Users, Award, Heart, Shield } from 'lucide-react'
import { AboutImageSlider } from '../../components/AboutImageSlider'
import { Link } from 'react-router-dom'
import ExpandableCardBasic from '../../components/ExpandableCardDemo'
import { SparklesText } from '../../components/ui/sparkle-text'
import Wrapper from '../../components/Wrapper'
import { AuroraBackground } from '../../components/ui/aurora-background'
import { NumberTicker } from '@/components/ui/number-ticker'
import { MagicCard } from '../../components/ui/magic-card'
import { Connect } from '../../components/ui/new-cta'

const AboutUs = () => {
  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative">
        <AboutImageSlider />
      </section>

      {/* Our Story Section */}
      <section className="py-16 ">
        <div className=" mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">About XRAY AI</h2>
            <div className="space-y-6 text-muted-foreground text-center">
              <p>
                XRAY AI is transforming digital verification with cutting-edge API solutions.
                Our mission is to enhance security, efficiency, and trust in identity and business verification.
              </p>
              <p>
                Since our inception, we have collaborated with enterprises and technology leaders
                to develop API-driven solutions that streamline verification processes.
              </p>
              <p>
                Today, XRAY AI is a trusted partner for businesses, leveraging innovation to redefine
                identity verification, Aadhaar e-sign verification, and business authentication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Values Section */}
      <section id="mission" className="py-16">
        <div className=" mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Mission & Values</h2>
            <p className="text-muted-foreground">
              At XRAY AI, we are committed to enabling secure and seamless digital verification
              through AI-driven solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <MagicCard className="p-8 rounded-lg shadow-md duration-300 hover:shadow-lg">
              <div className="p-3 rounded-full inline-block mb-4">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Trust & Security</h3>
              <p className="text-muted-foreground">
                Our solutions prioritize security and data integrity, ensuring
                compliance and trust in digital transactions.
              </p>
            </MagicCard>

            <MagicCard className=" p-8 rounded-lg shadow-md duration-300 hover:shadow-lg">
              <div className=" p-3 rounded-full inline-block mb-4">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Excellence</h3>
              <p className="text-muted-foreground">
                We uphold the highest standards in verification technology,
                ensuring accuracy and reliability in every API service.
              </p>
            </MagicCard>

            <MagicCard className=" p-8 rounded-lg shadow-md duration-300 hover:shadow-lg">
              <div className=" p-3 rounded-full inline-block mb-4">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Integrity</h3>
              <p className="text-muted-foreground">
                We are committed to ethical AI practices, maintaining transparency
                and accountability in all verification processes.
              </p>
            </MagicCard>

            <MagicCard className=" p-8 rounded-lg shadow-md duration-300 hover:shadow-lg">
              <div className=" p-3 rounded-full inline-block mb-4">
                <Users className="w-6 h-6 " />
              </div>
              <h3 className="text-xl font-bold mb-3">Collaboration</h3>
              <p className="text-muted-foreground">
                We partner with businesses and organizations to develop
                verification solutions that enhance digital security worldwide.
              </p>
            </MagicCard>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 mb-16">
        <div className=" mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
            <p className="">
              Enhancing trust and security in digital transactions through AI-driven verification.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">
                <NumberTicker value={500} className="font-bold tracking-normal" />+
              </div>
              <p className="text-xl ">Businesses Verified</p>
            </div>

            <div className="text-center">
              <div className="text-5xl font-bold mb-2">
                <NumberTicker value={1} className="font-bold tracking-normal" />M+
              </div>
              <p className="text-xl">Identities Verified</p>
            </div>

            <div className="text-center">
              <div className="text-5xl font-bold mb-2">
                <NumberTicker value={1} className="font-bold tracking-normal" />M+
              </div>
              <p className="text-xl">Documents Verified</p>
            </div>

            <div className="text-center">
              <div className="text-5xl font-bold mb-2">
                <NumberTicker value={1} className="font-bold tracking-normal" />M+
              </div>
              <p className="text-xl">Users Verified</p>
            </div>
          </div>
        </div>
      </section>

      <div className="mb-16 px-16">
        <Connect />
      </div>
    </div>
  )
}

export default AboutUs