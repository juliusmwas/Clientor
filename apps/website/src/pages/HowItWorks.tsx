import ConnectedWorkflow from "../components/website/how-it-works/ConnectedWorkflow";
import HowItWorksCta from "../components/website/how-it-works/HowItWorksCta";
import HowItWorksHero from "../components/website/how-it-works/HowItWorksHero";
import WhatHappensNext from "../components/website/how-it-works/WhatHappensNext";
import WorkflowSteps from "../components/website/how-it-works/WorkflowSteps";

function HowItWorks() {
  return (
    <>
      <HowItWorksHero />
      <WorkflowSteps />
      <ConnectedWorkflow />
      <WhatHappensNext />
      <HowItWorksCta />
    </>
  );
}

export default HowItWorks;
