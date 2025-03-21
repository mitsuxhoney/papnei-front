import { Button } from '@/components/ui/button'

const Cta11 = ({
  heading = 'Ready to Get Started?',
  description = 'Join thousands of satisfied customers using our platform to build amazing websites.',
  buttons = {
    primary: {
      text: 'Get Started',
      url: 'https://www.shadcnblocks.com',
    },
    secondary: {
      text: 'Learn More',
      url: 'https://www.shadcnblocks.com',
    },
  },
}) => {
  return (
    <section className="w-full bg-accent">
      <div className="w-full flex items-center justify-center rounded-md py-6">
        <div className="flex flex-col items-center rounded-lg p-8 text-center md:rounded-xl ">
          <h3 className="mb-3 max-w-3xl text-2xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
            {heading}
          </h3>
          <p className="mb-8 max-w-3xl text-muted-foreground lg:text-lg">
            {description}
          </p>
          <div className="flex w-full flex-col justify-center gap-2 sm:flex-row">
            {buttons.secondary && (
              <Button variant="outline" className="w-full sm:w-auto" asChild>
                <a href={buttons.secondary.url}>{buttons.secondary.text}</a>
              </Button>
            )}
            {buttons.primary && (
              <Button className="w-full sm:w-auto" asChild>
                <a href={buttons.primary.url}>{buttons.primary.text}</a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export { Cta11 }
