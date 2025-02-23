import { Hero } from '@/components/hero'
import { Icons } from '@/components/ui/icons'
import { ProjectStatusCard } from '@/components/ui/expandable-card'
import { BackgroundBeamsWithCollision } from './ui/background-beams-with-collision'
import { Key } from 'lucide-react'

const tiltedItems = [
  { id: '1', text: 'Feature One' },
  { id: '2', text: 'Feature Two' },
  { id: '3', text: 'Feature Three' },
  { id: '4', text: 'Feature Four' },
  { id: '5', text: 'Feature Five' },
]

function HeroDemo() {
  return (
    <Hero
      pill={{
        text: "Introducing new API's",
        href: '/',
        icon: <Icons.logo className="h-4 w-4" />,
        variant: 'default',
        size: 'md',
      }}
      content={{
        title: 'Instant. Secure. Hassle-Free Verification',

        description:
          'Integrate our robust APIs to streamline Business Verification, Identity Verification, KYC/KYB compliance, and Aadhaar E-Sign processes.',
        primaryAction: {
          href: '/docs/getting-started',
          text: 'Get API Keys',
          icon: <Key className="h-4 w-4" />,
        },
        secondaryAction: {
          href: '/contact-us',
          text: 'Contact Sales',
          icon: <Icons.component className="h-4 w-4" />,
        },
      }}
      preview={tiltedItems}
    />
  )
}

function PreviewCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <ProjectStatusCard
        title="Marketing Website"
        progress={75}
        dueDate="Feb 15, 2024"
        contributors={[{ name: 'Alex' }, { name: 'Sarah' }, { name: 'Mike' }]}
        tasks={[
          { title: 'Homepage Design', completed: true },
          { title: 'Blog Integration', completed: true },
          { title: 'SEO Optimization', completed: false },
        ]}
        githubStars={124}
        openIssues={3}
      />
      <ProjectStatusCard
        title="Mobile App"
        progress={40}
        dueDate="Apr 1, 2024"
        contributors={[{ name: 'Chris' }, { name: 'Emma' }, { name: 'Tom' }]}
        tasks={[
          { title: 'UI Design', completed: true },
          { title: 'Core Features', completed: false },
          { title: 'Testing', completed: false },
        ]}
        githubStars={89}
        openIssues={5}
      />
    </div>
  )
}

export default HeroDemo
