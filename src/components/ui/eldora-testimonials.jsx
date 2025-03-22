import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { Marquee } from '@/components/ui/eldora-marquee'
import Wrapper from '../Wrapper'

export function Highlight({ children, className }) {
  return (
    <span
      className={cn('p-1 py-0.5 font-bold text-muted-foreground', className)}
    >
      {children}
    </span>
  )
}

export function TestimonialCard({
  description,
  name,
  img,
  role,
  className,
  ...props // Capture the rest of the props
}) {
  return (
    <div
      className={cn(
        'mb-4 flex w-full cursor-pointer break-inside-avoid flex-col items-center justify-between gap-6 rounded-xl p-4',
        // light styles
        ' border border-neutral-200 bg-white',
        // dark styles
        'dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]',
        className
      )}
      {...props}
    >
      <div className="select-none text-sm font-normal text-neutral-700 dark:text-neutral-400">
        {description}
        <div className="flex flex-row py-1">
          <Star className="size-4 fill-yellow-500 text-yellow-500" />
          <Star className="size-4 fill-yellow-500 text-yellow-500" />
          <Star className="size-4 fill-yellow-500 text-yellow-500" />
          <Star className="size-4 fill-yellow-500 text-yellow-500" />
          <Star className="size-4 fill-yellow-500 text-yellow-500" />
        </div>
      </div>

      <div className="flex w-full select-none items-center justify-start gap-5">
        <img
          width={40}
          height={40}
          src={img || ''}
          alt={name}
          className="size-10 rounded-full ring-1 ring-border ring-offset-4"
        />

        <div>
          <p className="font-medium text-neutral-500">{name}</p>
          <p className="text-xs font-normal text-neutral-400">{role}</p>
        </div>
      </div>
    </div>
  )
}
const testimonials = [
  {
    name: 'Alex Rivera',
    role: 'Security Analyst at SecureSphere Inc.',
    img: 'https://randomuser.me/api/portraits/men/91.jpg',
    description: (
      <p>
        "Our compliance processes have become significantly more efficient with
        their verification services.
        <Highlight>
          The accuracy and speed of their identity checks are unmatched.
        </Highlight>
        It's been a critical tool for our risk management strategy."
      </p>
    ),
  },
  {
    name: 'Samantha Lee',
    role: 'Operations Manager at SwiftOnboard Solutions',
    img: 'https://randomuser.me/api/portraits/women/12.jpg',
    description: (
      <p>
        "Implementing their Aadhaar e-sign solution has revolutionized our
        onboarding process.
        <Highlight>
          We've cut down onboarding time by 60%, enhancing customer
          satisfaction.
        </Highlight>
        Highly reliable and easy to integrate."
      </p>
    ),
  },
  {
    name: 'Raj Patel',
    role: 'CFO at FinTrust Ventures',
    img: 'https://randomuser.me/api/portraits/men/45.jpg',
    description: (
      <p>
        "As a financial institution, trust is paramount. Their business
        verification tools have helped us maintain integrity.
        <Highlight>
          The detailed reports and quick turnaround are invaluable.
        </Highlight>
        "
      </p>
    ),
  },
  {
    name: 'Emily Chen',
    role: 'Compliance Officer at Global Commerce Ltd.',
    img: 'https://randomuser.me/api/portraits/women/83.jpg',
    description: (
      <p>
        "Their KYC and KYB solutions have simplified our compliance workflows.
        <Highlight>
          The comprehensive verification reports are crucial for our regulatory
          adherence.
        </Highlight>
        A must-have for any business focused on compliance."
      </p>
    ),
  },
  {
    name: 'Michael Brown',
    role: 'Head of Fraud Prevention at PaySecure Technologies',
    img: 'https://randomuser.me/api/portraits/men/1.jpg',
    description: (
      <p>
        "Their bank account verification services have significantly reduced our
        fraud rates.
        <Highlight>
          The precision and real-time validation are exceptional.
        </Highlight>
        It's a game-changer for secure transactions."
      </p>
    ),
  },
  {
    name: 'Linda Wu',
    role: 'E-commerce Security Lead at LogiChain Retail',
    img: 'https://randomuser.me/api/portraits/women/5.jpg',
    description: (
      <p>
        "Their e-commerce verification tools have helped us build a safer
        marketplace.
        <Highlight>
          The ability to authenticate sellers efficiently has boosted buyer
          confidence.
        </Highlight>
        "
      </p>
    ),
  },
  {
    name: 'Carlos Gomez',
    role: 'Brand Protection Manager at EcoBrands Inc.',
    img: 'https://randomuser.me/api/portraits/men/14.jpg',
    description: (
      <p>
        "Trademark verification is essential for protecting our brand.
        <Highlight>
          Their services are thorough and provide peace of mind.
        </Highlight>
        It's revolutionized how we manage our intellectual property."
      </p>
    ),
  },
  {
    name: 'Aisha Khan',
    role: 'Product Manager at FastTrack Financials',
    img: 'https://randomuser.me/api/portraits/women/56.jpg',
    description: (
      <p>
        "The seamless integration of their verification tools into our platform
        has been impressive.
        <Highlight>
          Our customer onboarding is faster and more secure.
        </Highlight>
        "
      </p>
    ),
  },
  {
    name: 'Tom Chen',
    role: 'Legal Compliance Officer at HealthVerify Systems',
    img: 'https://randomuser.me/api/portraits/men/18.jpg',
    description: (
      <p>
        "In the healthcare sector, compliance is non-negotiable.
        <Highlight>
          Their verification services ensure we meet all regulatory requirements
          with ease.
        </Highlight>
        It's a crucial part of our compliance system."
      </p>
    ),
  },
  {
    name: 'Sofia Patel',
    role: 'Founder at EduTrust Platforms',
    img: 'https://randomuser.me/api/portraits/women/73.jpg',
    description: (
      <p>
        "Their verification solutions have helped us build a trustworthy
        educational platform.
        <Highlight>The ease of use and reliability are unmatched.</Highlight>"
      </p>
    ),
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-10">
      <Wrapper>
        <div className="mb-4 text-center sora-heading text-3xl lg:text-5xl font-bold leading-[1.2] ">
          What People {` `}
          {/* <div className="inline-block bg-primary rounded-md -rotate-2 p-2">
          <div className="rotate-2 text-white ">People</div>
        </div>{' '} */}
          Are Saying
        </div>

        <h3 className="mx-auto mb-8 text-center text-md font-medium text-foreground/80">
          Don&apos;t just take our word for it. Here&apos;s what{' '}
          <span className="from-fg-onAccent text-primary">real people</span> are
          saying about{' '}
          <span className="from-fg-onAccent font-medium text-primary">
            XRAY AI
          </span>
        </h3>
      </Wrapper>
      <div className="relative mt-6 max-h-screen overflow-hidden">
        <div className="gap-4 md:columns-2 xl:columns-3 2xl:columns-4">
          {Array(Math.ceil(testimonials.length / 3))
            .fill(0)
            .map((_, i) => (
              <Marquee
                vertical
                key={i}
                className={cn({
                  '[--duration:40s]': i === 1,
                  '[--duration:30s]': i === 2,
                  '[--duration:20s]': i === 3,
                  '[--duration:10s]': i === 4,
                })}
              >
                {testimonials.slice(i * 3, (i + 1) * 3).map((card, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: Math.random() * 0.8,
                      duration: 1.2,
                    }}
                  >
                    <TestimonialCard {...card} />
                  </motion.div>
                ))}
              </Marquee>
            ))}
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 w-full bg-gradient-to-t from-background from-20%"></div>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 w-full bg-gradient-to-b from-background from-20%"></div>
      </div>
    </section>
  )
}
