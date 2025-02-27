import { Hero } from '@/components/hero'
import { ProjectStatusCard } from '@/components/ui/expandable-card'

function HeroDemo({ preview, content, pill, background = undefined }) {
  console.log('Content', content)
  return (
    <Hero
      content={content}
      preview={preview}
      pill={pill}
      background={background}
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
