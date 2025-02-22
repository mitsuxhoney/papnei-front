const SpotlightCard = ({
  heading = 'Complete Identity Verification Suite',
  description = 'Everything you need to verify and authenticate customers in your application',
  features = [
    {
      id: 'feature-1',
      title: 'Business Verification',
      subtitle: 'API',
      url: '/business',
      description:
        'Verify business entities with our comprehensive multiple API suites.',
      image: 'https://shadcnblocks.com/images/block/placeholder-1.svg',
    },
    {
      id: 'feature-2',
      title: 'Identity Verification',
      subtitle: 'FOR DEVELOPERS',
      url: '/identity',
      description:
        'Secure and fast identity verification for your customers through multiple API suites.',
      image: 'https://shadcnblocks.com/images/block/placeholder-4.svg',
    },
    {
      id: 'feature-3',
      title: (
        <>
          <span className="hidden lg:block">
            Aadhar <br /> E-signature
          </span>

          <span className="block lg:hidden">Aadhar E-signature</span>
        </>
      ),
      url: '/aadhar',
      subtitle: 'FOR DEVELOPERS',
      description:
        'Seamless digital document signing with Aadhar verification.',
      image: 'https://shadcnblocks.com/images/block/placeholder-4.svg',
    },
  ],
}) => {
  return (
    <section className="pt-8 pb-12">
      <div className="w-full">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-semibold lg:text-4xl">{heading}</h2>
          <p className="text-sm font-normal text-muted-foreground lg:text-lg">
            {description}
          </p>
        </div>
        <div className="mt-10 grid gap-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col gap-4 justify-between rounded-lg bg-accent"
            >
              <div className="flex justify-between gap-14 md:gap-2 border-b">
                <div className="flex flex-col justify-center gap-14 py-6 pl-4 md:pl-6 max-sm:w-[80%] max-w-sm lg:w-[70%] w-[85%]">
                  {/* <p className="text-xs text-muted-foreground"> 
                    {feature.subtitle}
                  </p> */}
                  <h3 className="text-2xl md:text-4xl">{feature.title}</h3>
                </div>
                <div className="max-sm:w-[20%] lg:w-[30%] w-[15%] shrink-0 rounded-r-lg border-l bg-background">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="flex items-center p-4 text-muted-foreground md:p-4">
                {feature.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export { SpotlightCard }
