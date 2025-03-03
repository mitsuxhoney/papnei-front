import { Users, Award, Heart, Shield } from 'lucide-react'
import { AboutImageSlider } from '../../components/AboutImageSlider'
import { Link } from 'react-router-dom'
import ExpandableCardBasic from '../../components/ExpandableCardDemo'
import { SparklesText } from '../../components/ui/sparkle-text'
import Wrapper from '../../components/Wrapper'
import { AuroraBackground } from '../../components/ui/aurora-background'
import { NumberTicker } from '@/components/ui/number-ticker'
import { MagicCard } from '../../components/ui/magic-card'

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
            <h2 className="text-3xl font-bold mb-8 text-center">Our Story</h2>
            <div className="space-y-6 text-muted-foreground text-center">
              <p>
                Founded in 2018, Papnei began with a simple yet powerful vision:
                to make healthcare more accessible, efficient, and
                patient-centered. What started as a small team of dedicated
                healthcare professionals and technologists has grown into a
                leading healthcare innovation company.
              </p>
              <p>
                Our journey has been marked by continuous learning, adaptation,
                and a relentless focus on improving patient outcomes. Through
                partnerships with healthcare providers, research institutions,
                and technology experts, we&apos;ve developed solutions that
                address real-world healthcare challenges.
              </p>
              <p>
                Today, Papnei stands at the intersection of healthcare and
                technology, driving meaningful change in how care is delivered
                and experienced. Our commitment to excellence and innovation
                remains as strong as ever as we continue to expand our reach and
                impact.
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
              Guided by our core principles, we&apos;re committed to
              transforming healthcare for the better.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <MagicCard className="p-8 rounded-lg shadow-md duration-300 hover:shadow-lg">
              <div className="p-3 rounded-full inline-block mb-4">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Patient-Centered Care</h3>
              <p className="text-muted-foreground">
                We place patients at the heart of everything we do, ensuring
                their needs, preferences, and experiences guide our solutions.
              </p>
            </MagicCard>

            <MagicCard className=" p-8 rounded-lg shadow-md duration-300 hover:shadow-lg">
              <div className=" p-3 rounded-full inline-block mb-4">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Excellence</h3>
              <p className="text-muted-foreground">
                We strive for excellence in all aspects of our work, from the
                quality of our solutions to the service we provide to our
                partners.
              </p>
            </MagicCard>

            <MagicCard className=" p-8 rounded-lg shadow-md duration-300 hover:shadow-lg">
              <div className=" p-3 rounded-full inline-block mb-4">
                <Shield className="w-6 h-" />
              </div>
              <h3 className="text-xl font-bold s mb-3">Integrity</h3>
              <p className="text-muted-foreground">
                We uphold the highest ethical standards, ensuring transparency,
                honesty, and accountability in all our interactions.
              </p>
            </MagicCard>

            <MagicCard className=" p-8 rounded-lg shadow-md duration-300 hover:shadow-lg">
              <div className=" p-3 rounded-full inline-block mb-4">
                <Users className="w-6 h-6 " />
              </div>
              <h3 className="text-xl font-bold mb-3">Collaboration</h3>
              <p className="text-muted-foreground">
                We believe in the power of partnership and work closely with
                healthcare providers, patients, and industry experts.
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
              Making a difference in healthcare through innovation and
              dedication.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">
                <NumberTicker
                  value={50}
                  className="font-bold tracking-normal"
                />
                +
              </div>
              <p className="text-xl ">Healthcare Partners</p>
            </div>

            <div className="text-center">
              <div className="text-5xl font-bold mb-2">
                <NumberTicker
                  value={100}
                  className="font-bold tracking-normal"
                />
                k+
              </div>
              <p className="text-xl">Patients Served</p>
            </div>

            <div className="text-center">
              <div className="text-5xl font-bold mb-2">
                <NumberTicker
                  value={15}
                  className="font-bold tracking-normal"
                />
                +
              </div>
              <p className="text-xl">Innovative Solutions</p>
            </div>

            <div className="text-center">
              <div className="text-5xl font-bold mb-2">
                <NumberTicker
                  value={12}
                  className="font-bold tracking-normal"
                />
              </div>
              <p className="text-xl ">Industry Awards</p>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full text-center relative overflow-hidden">
        {/* <div className="w-full mx-auto">
            <Meteors number={50} />
          </div> */}
        <AuroraBackground className="w-screen h-full py-10">
          <div className="w-full flex flex-col gap-12 items-center">
            <Wrapper>
              <div className="flex flex-col gap-2 items-center">
                {/* <h3 className="text-xl font-semibold md:text-4xl">{heading}</h3> */}
                <SparklesText
                  className={`text-3xl font-semibold md:text-5xl`}
                  text="Ready To Get Started"
                />
                {/* <TypingAnimation>{heading}</TypingAnimation> */}
                <p className="text-muted-foreground text-sm lg:text-md">
                  Join thousand of satisfied customers using our platform to
                  build amazing websites.
                </p>
              </div>
            </Wrapper>

            <div className="max-w-md lg:max-w-lg w-full">
              <ExpandableCardBasic />
            </div>
          </div>
        </AuroraBackground>
      </div>
    </div>
  )
}

export default AboutUs
