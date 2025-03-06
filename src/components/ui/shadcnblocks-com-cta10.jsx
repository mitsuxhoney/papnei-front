import { Button } from "@/components/ui/button";
import { MagnetLines } from "@/components/ui/magnet-lines";

const Cta10 = ({
  heading = "Ready to Get Started?",
  description = "Join thousands of satisfied customers using our platform to build amazing websites.",
  buttons = {
    primary: {
      text: "Get API Keys",
      url: "https://www.shadcnblocks.com",
    },
    secondary: {
      text: "API Documentation",
      url: "https://www.shadcnblocks.com",
    },
  },
}) => {
  return (
    <section className="relative flex items-center justify-center py-16 overflow-hidden">
      {/* Background MagnetLines */}
      <div className="absolute inset-0 -z-10 bg-white border rounded-md">
        <MagnetLines
          rows={9}
          columns={20}
          containerSize="100%"
          lineColor="black" // Lighter and less aggressive
          lineWidth="0.6vmin"
          lineHeight="2vmin"
          baseAngle={0}
        />
      </div>

      {/* CTA Content */}
      <div className="container relative z-10">
        <div className="flex w-full flex-col gap-6 rounded-xl  p-8 lg:flex-row lg:items-center lg:p-12">
          <div className="flex-1 bg-white">
            <h3 className="mb-3 text-2xl font-semibold md:text-4xl">
              {heading}
            </h3>
            <p className="text-muted-foreground lg:text-lg">{description}</p>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            {buttons?.secondary && (
              <Button variant="outline" asChild>
                <a href={buttons.secondary.url}>{buttons.secondary.text}</a>
              </Button>
            )}
            {buttons?.primary && (
              <Button asChild>
                <a href={buttons.primary.url}>{buttons.primary.text}</a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta10;
