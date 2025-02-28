import { ProjectStatusCard } from '@/components/ui/expandable-card'
import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react'
import { RippleButton } from './ui/ripple-button'

export default function ExpandableCardBasic() {
  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <ProjectStatusCard
        titleBeforeExpand="Get In Touch"
        descriptionBeforeExpand="Click the button below to get in touch with us! Toggle the form to send us your inquiries, and we'll respond as soon as possible."
        titleAfterExpand=""
        descriptionAfterExpand=""
        open={
          <RippleButton rippleColor="#ADD8E6" className="h-8">
            Click Me !
          </RippleButton>
        }
        close={<ChevronUp className="h-5 w-5 cursor-pointer" />}
        contributors={[]}
        tasks={[]}
        // progress={75}
        // dueDate="Jan 15, 2024"
        // contributors={[{ name: 'Sarah' }, { name: 'Mike' }, { name: 'Alex' }]}
        // tasks={[
        //   { title: 'Update Button Components', completed: true },
        //   { title: 'Add Dark Mode Support', completed: true },
        //   { title: 'Write Documentation', completed: false },
        // ]}
        // githubStars={128}
        // openIssues={5}
      />
    </div>
  )
}
