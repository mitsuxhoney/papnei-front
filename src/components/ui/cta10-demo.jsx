import Cta10 from "@/components/ui/shadcnblocks-com-cta10";

const demoData = {
  heading: "Ready to Get Started?",
  description:
    "Join thousands of satisfied customers using our platform to build amazing websites.",
  buttons: {
    primary: {
      text: "Get API Keys",
      url: "https://www.shadcnblocks.com",
    },
    secondary: {
      text: "API Documentation",
      url: "https://www.shadcnblocks.com",
    },
  },
};

function Cta10Demo() {
  return <Cta10 {...demoData} />;
}

export default Cta10Demo;
