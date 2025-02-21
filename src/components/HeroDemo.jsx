import { Hero } from '@/components/hero'
import { Icons } from '@/components/ui/icons'
import { ProjectStatusCard } from '@/components/ui/expandable-card'
import { BackgroundBeamsWithCollision } from './ui/background-beams-with-collision'

function HeroDemo() {
  return (
    <Hero
      pill={{
        text: 'New! PrismUI Components',
        href: '/docs',
        icon: <Icons.logo className="h-4 w-4" />,
        variant: 'default',
        size: 'md',
      }}
      content={{
        title: 'Build beautiful apps',
        titleHighlight: 'with ease',
        description:
          'A modern component library with beautiful defaults and endless customization options. Start building your next project faster.',
        primaryAction: {
          href: '/docs/getting-started',
          text: 'Get Started',
          icon: <Icons.logo className="h-4 w-4" />,
        },
        secondaryAction: {
          href: '/components',
          text: 'Browse Components',
          icon: <Icons.component className="h-4 w-4" />,
        },
      }}
      preview="https://surepass.io/wp-content/uploads/2019/09/main.png"
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
